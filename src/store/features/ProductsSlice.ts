import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
    id: number;
    imageUrl: string;
    productName: string;
    productPrice: string;
    productSellingPrice: string;
}

export interface IProductsState {
    subHeading: string;
    mainHeading: string;
    description: string;
    isLoadMore: boolean;
    isLoading: boolean;
    isError: boolean;
    products: IProduct[]
}

const initialState: IProductsState = {
    isLoadMore: false,
    subHeading: '',
    mainHeading: '',
    description: '',
    isLoading: true,
    isError: false,
    products: []
}

export const fetchTodos = createAsyncThunk("fetchProducts", async () => {
    const res = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
    return res;
});

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<IProductsState>) => {
            state.subHeading = action.payload.subHeading
            state.mainHeading = action.payload.mainHeading
            state.description = action.payload.description
            state.products = action.payload.products
            state.isLoadMore = action.payload.isLoadMore
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            console.log(action.payload)
            const products: IProduct[] = [];
            action.payload.forEach((item: { id: number; image: string; title: string; price: string; }) => {
                item.title =
                    item.title.slice(0, 10) +
                    (item.title.length > 10 ? '...' : '');
                const newProduct: IProduct = {
                    id: item.id,
                    imageUrl: item.image,
                    productName: item.title,
                    productPrice: item.price,
                    productSellingPrice: item.price
                }
                products.push(newProduct);
            });
            state.products = products;
            state.isLoading = false;
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            state.isError = true;
        })
    }
})

export const { addProducts } = ProductsSlice.actions;

export default ProductsSlice;
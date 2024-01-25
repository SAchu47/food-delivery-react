import React, { FC, ReactElement } from 'react';
import './App.css';
import { Footer, Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './pages';

const App: FC = (): ReactElement => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<CategoryProducts />} /> */}
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};

export default App;

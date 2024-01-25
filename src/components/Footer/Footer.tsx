import React, { FC, ReactElement } from 'react';
import './Footer.css';

const Footer: FC = (): ReactElement => {
  return (
    <div className="footer__mian" id="footer">
      <div className="footer__main__links">
        <h5>Company Info</h5>
        <div className="links">About Us</div>
        <div className="links">Carrier</div>
        <div className="links">We are hiring</div>
        <div className="links">Blog</div>
      </div>
      <div className="footer__main__links">
        <h5>Features</h5>
        <div className="links">Business Marketing</div>
        <div className="links">User Analytic</div>
        <div className="links">Live Chat</div>
        <div className="links">Unlimited Support</div>
      </div>
      <div className="footer__main__links">
        <h5>Resources</h5>
        <div className="links">IOS & Android</div>
        <div className="links">Watch a Demo</div>
        <div className="links">Customers</div>
        <div className="links">API</div>
      </div>
      <div className="footer__main__links">
        <h5>Legal</h5>
        <div className="links">About Us</div>
        <div className="links">Carrier</div>
        <div className="links">We are hiring</div>
        <div className="links">Blog</div>
      </div>
      <div className="footer__main__links">
        <h5>Get In Touch</h5>
        <div className="links">Get In Touch</div>
        <div className="links">care@bandage.com</div>
      </div>
    </div>
  );
};

export default Footer;

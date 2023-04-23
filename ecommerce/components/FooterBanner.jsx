import React from 'react';
import Link from "next/link";
import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className='banner-desc'> {/*banner description*/}
        <div className="center">
          <h2>Sparkle</h2>
          <h3>About-us</h3>
          <p>We are dedicated to providing the best hair products to
            African women so that they can feel beautiful adn comfortable
            in their natural self.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default FooterBanner;

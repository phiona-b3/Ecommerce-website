import React from 'react'
import Link from 'next/link'; //link to the products detail
import { urlFor } from '../lib/client'; //get the url for the image in sanity dashboard

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])} //check if we have an image and then return the first one
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>  
    </div>
  )
}

export default Product;

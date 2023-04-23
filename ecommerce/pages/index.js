import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* HeroBanner component */}

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>The Best Products in the Market</h2>
        <p>"Products"</p>
      </div>

      {/* loop through the products in the website */}
      <div className="products-container">
        {products?.map((product) => <Product key={product.id} product={product} />)}
      </div>
      
      {/* FooterBanner component */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} /> {/*checks if bannerdata exists and returns the first object */}
    </>
  )
}

//function to fetch data from either an API or a CMS
export const getServerSideProps = async () => {
  //sanity query
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;

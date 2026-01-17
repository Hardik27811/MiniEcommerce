import React from 'react'
import products from '../data/product';
import ProductCard from '../components/ProductCard';
import {Helmet} from 'react-helmet-async'

const Home = () => {
  console.log(products);
  
  
  return (
    <>
    <Helmet>
      <title>MyStore</title>
      <meta name='description' content='Browse latest products on MyStore' />
    </Helmet>
    <h1>Products</h1>
    <div>
     {products.map((product)=>(
      <ProductCard key={product.id} product={product}/>
     ))}
    </div>
    </>
  )
}

export default Home
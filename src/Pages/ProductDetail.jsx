import React from 'react'
import{useParams,useNavigate} from 'react-router-dom'
import products from '../data/product'
import { Helmet } from 'react-helmet-async'

import Notfound from './Notfound'
const ProductDetail = () => {
  const {slug} = useParams();
  console.log(slug);
  
  const pdt = products.find( p => p.slug === slug);
  console.log(products);


  

  if(!pdt){
    return <Notfound/>
  }
  return (
    <>
    <Helmet>
      <title>{pdt.name}</title>
      <meta name='description' content='Browse  products on MyStore'/>
    </Helmet>
    <div style={{padding:'40px', display:"flex",flexDirection:"column", alignItems:"center"}} >
      <h1>Products</h1>
      <h1>{pdt.name}</h1>
      <img src={pdt?.image} style={{width:"400px"}}/>
      <p>{pdt.description.substring(0, 120)}</p>
      <h3>₹ {pdt.price}</h3>
    </div>
    </>
  )
}

export default ProductDetail
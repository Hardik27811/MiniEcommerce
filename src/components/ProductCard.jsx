import React from 'react'
import { Link } from 'react-router-dom';
const ProductCard = React.memo(({product})=>{
    return(
        <div style={{border : "'1px solid black" , padding:"10px" , background:"#e0e0e0",margin:"2px" , width: "fit-content",minWidth:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <img  style={{height:"280px"}} src={product.image} loading="lazy" alt={`${product.slug}`} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <Link style={{textDecoration: "none", color: "blue"}} to={`/product/${product.slug}`}>View Detail</Link>
        </div>
    )
});

export default ProductCard
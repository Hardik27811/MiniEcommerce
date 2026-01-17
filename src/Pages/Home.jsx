import React, { useEffect, useState } from 'react'
import productsData from '../data/product';
import ProductCard from '../components/ProductCard';
import {Helmet} from 'react-helmet-async'
import Skeleton from '../components/Skeleton';



const Home = () => {
  // console.log(products);

  const [products,setProducts] = useState([]);
  const [loading,setloading] = useState(true);

  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  useEffect(()=>{
    setTimeout(()=>{
      setProducts(productsData);
      setloading(false);
    },1000)
  },[])

  const filteredProducts = products.filter((pdt) => {
    const matchName = pdt.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCat =
      cat === "All" || pdt.category === cat;

    return matchName && matchCat;
  });

  // console.log(productsData.length);
console.log(productsData);
  

const uniqueCategories = ["All", ...new Set(productsData.map(item => item.category))];
  
  return (
    <>
    <Helmet>
      <title>MyStore</title>
      <meta name='description' content='Browse  products on MyStore' />
    </Helmet>

    <div style={{ marginBottom: "20px", display: "flex", gap: "10px",marginTop:"18px" }}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />

        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          style={{ padding: "8px" }}
        >
          
         {uniqueCategories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    
    <h1 style={{textAlign: "center",marginTop:"20px" ,fontSize:"40px"}}>Products</h1>
    <div style={{display:"grid" ,gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px"}}>
    {loading
          ? Array.from({ length: `${productsData.length}` }).map((_, i) => (
              <Skeleton key={i} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>
    </>
  )
}

export default Home
"use client"
import Image from "next/image";
import AppHead from "../Components/AppHead";
import { useEffect, useState } from "react";
import { AddToCart, getAllShops, getProduct } from "../requests";
import AppHeader from "../Components/AppHeader";

export default function Home() {
  const [loadDom,setLoadDom]=useState(false);
  const [products,setProducts]=useState([])
  const [allShops, setAllShops] = useState([]);

  useEffect(()=>{
    setLoadDom(true);
    getProduct().
    then(data=>{
      console.log("Products:",data.products);
      setProducts(data.products)
      
    })
    getAllShops().
	then(data=>setAllShops(data.reverse().slice(0,3)));


  },[])
  return (
    <>
    {loadDom && (
      <html lang="en">
      <AppHead/>
      
        <body>
      
           {/* Start Header/Navigation --> */}
          <AppHeader/>
           {/* End Header/Navigation --> */}
      
           {/* Start Hero Section --> */}
            <div class="hero">
              <div class="container">
                <div class="row justify-content-between">
                  <div class="col-lg-5">
                    <div class="intro-excerpt">
                      <h1>All Products</h1>
                      <p class="mb-4">List of all your quality furniture at an affordable price.</p>
                      <p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="hero-img-wrap">
                      <img src="images/couch.png" class="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           {/* End Hero Section --> */}
      
      
                 {/* Start Product Section --> */}
                 <div class="product-section">
            <div class="container">
            <div class="row mb-5">
                <div class="col-md-6">
                  <h2 className="section-title">Products</h2>
                </div>
              </div>
              <div className="row my-8">
      
                 {/* Start Column 2 --> */}
                {products.map((product,index)=>(
                  <div key={index} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a className="product-item mt-5" href={`/product/${product._id}`}>
                    <img src={`/images/${product.banner}`} class="img-fluid product-thumbnail"/>
                    <h3 class="product-title">{product.name}</h3>
                    <strong class="product-price">${product.price}</strong>
      
                    <span onClick={async()=>{
                      var res =await AddToCart(product._id,1,product.shop_id);
                      if(res==201){
                        alert('Cart has been added!');
                      }
                    }} class="icon-cross">
                      <img src="images/cross.svg" class="img-fluid"/>
                    </span>
                  </a>
                  </div>
                ))}
                 {/* End Column 2 --> */}
      
              </div>
            </div>
          </div>
           {/* End Product Section --> */}

      
      
      
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/tiny-slider.js"></script>
          <script src="js/custom.js"></script>
        </body>
      
      </html>
    )}
    </>
    
  );
}

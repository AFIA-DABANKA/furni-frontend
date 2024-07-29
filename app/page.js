"use client"
import Image from "next/image";
import AppHead from "./Components/AppHead";
import { useEffect, useState } from "react";
import { AddToCart, getAllShops, getProduct } from "./requests";
import AppHeader from "./Components/AppHeader";

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
                      <h1>Modern <span clsas="d-block">Home of Furniture</span></h1>
                      <p class="mb-4">Get all your quality furniture at an affordable price.</p>
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
              <div class="row">
      
                 {/* Start Column 1 --> */}
                <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                  <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
                  <p class="mb-4">This shop has a list of very quality furniture </p>
                  <p><a href="shop.html" class="btn">Explore</a></p>
                </div> 
                 {/* End Column 1 --> */}
      
                 {/* Start Column 2 --> */}
                {products?.slice(products.length-3,products.length).map((product,index)=>(
                  <div key={index} class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                  <a class="product-item">
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
      
    
      
           {/* Start Popular Product --> */}
          <div class="popular-product">
            <div class="container">
            <div class="row mb-5">
                <div class="col-md-6">
                  <h2 class="section-title">Products</h2>
                </div>
                <div class="col-md-6 text-start text-md-end">
                  <a href="/product-list" class="more">View All Products</a>
                </div>
              </div>
              <div class="row">
      
                {products?.slice(products.length-3,products.length).map((product,index)=>(
                  <div key={index} class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div class="product-item-sm d-flex">
                    <div class="thumbnail">
                      <img src={`images/${product.banner}`} alt="Image" class="img-fluid"/>
                    </div>
                    <div class="pt-3">
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
                      <p><a href="#">View</a></p>
                    </div>
                  </div>
                </div>
                ))}
      
              </div>
            </div>
          </div>
           {/* End Popular Product --> */}
      
           {/* Start Shops Section --> */}
          <div class="blog-section">
            <div class="container">
              <div class="row mb-5">
                <div class="col-md-6">
                  <h2 class="section-title">Recent Shops</h2>
                </div>
              </div>
      
              <div class="row">
      
               {allShops.map((shop,index)=>(
                  <div key={index} class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                  <div class="post-entry">
                    <a href={`/shop/${shop._id}`} class="post-thumbnail"><img src="images/post-1.jpg" alt="Image" class="img-fluid"/></a>
                    <div class="post-content-entry">
                      <h3><a href="#">{shop.name}</a></h3>
                      {/* <div class="meta">
                        <span> Supply by <a href="#">{shop.suplier}</a></span>
                      </div> */}
                    </div>
                  </div>
                  </div>
               ))}
      
                
      
              </div>
            </div>
          </div>
           {/* End Shops Section  */}
      
      
          <script src="js/bootstrap.bundle.min.js"></script>
          <script src="js/tiny-slider.js"></script>
          <script src="js/custom.js"></script>
        </body>
      
      </html>
    )}
    </>
    
  );
}

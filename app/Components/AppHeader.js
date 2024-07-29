"use client"

import { useEffect, useState } from "react";
import { getMyShops } from "../requests";

export default function AppHeader(){
  const [myShops, setMyShops] = useState([]);

	useEffect(() => {
		getMyShops().then(data=>{
			setMyShops(data);
		})
	},[])
    return(
        
  <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

  <div className="container">
    <a className="navbar-brand" href="/">Furni<span>.</span></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsFurni">
      <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
        <li className="nav-item ">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li><a className="nav-link" href="/orders">Orders</a></li>
        
        {myShops.length>0&&<li><a className="nav-link" href="/my-shops">My Shops</a></li>}
        <li><a className="nav-link" href="/shop/create">Create Shop</a></li>
      </ul>

      <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
        <li><a className="nav-link" href="/profile"><img src="/images/user.svg"/></a></li>
        <li><a className="nav-link" href="/cart"><img src="/images/cart.svg"/></a></li>
      </ul>
    </div>
  </div>
    
</nav>

    )
} 
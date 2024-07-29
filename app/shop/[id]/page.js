"use client"
import { useEffect, useState } from "react";
import AppHead from "../../Components/AppHead";
import AppHeader from "../../Components/AppHeader";
import { AddToCart, getMyShopDetails, getShopProducts } from "../../requests";

export default function Home({params}) {
	const [products, setProducts] = useState([]);
	const [shop, setShop] = useState([]);
	const [shopDetails, setShopDetails] = useState([]);

	useEffect(() => {
		// setDomLoaded(true);
		// myLoad();
	
		getShopProducts(params.id).then(data=>setProducts(data));
		getMyShopDetails(params.id).then(data=>{
			console.log('====================================');
			console.log(data);
			console.log('====================================');
			setShopDetails(data);
		}).catch(data=>{
			console.log('====================================');
			console.log("ERROR",error.message);
			console.log('====================================');
		})
	},[])
  return (
<html lang="en">
<AppHead/>

<body>

	{/* <!-- Start Header/Navigation --> */}
	<AppHeader/>
	{/* <!-- End Header/Navigation --> */}

	{/* <!-- Start Hero Section --> */}
	<div className="hero">
		<div className="container">
		<div className="row justify-content-between">
			<div className="col-lg-5">
			<div className="intro-excerpt">
				<h1>{shopDetails.name}</h1>
				<p className="mb-4">{shopDetails.desc}</p>
				<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
			</div>
			</div>
			<div className="col-lg-7">
			<div className="hero-img-wrap">
				<img src="/images/couch.png" className="img-fluid"/>
			</div>
			</div>
		</div>
		</div>
	</div>
	{/* <!-- End Hero Section --> */}

	

	<div className="untree_co-section product-section before-footer-section">
		<div className="container">
			  <div className="row">

				  {/* <!-- Start Column 1 --> */}
				{products.map((product,index)=>(
					<div key={index} className="col-12 col-md-4 col-lg-3 mb-5">
					<a className="product-item" onClick={async()=>{
                      var res =await AddToCart(product._id,1,product.shop_id);
                      if(res==201){
                        alert('Cart has been added!');
                      }
                    }}>
						<img src={`/images/${product.banner}`} className="img-fluid product-thumbnail"/>
						<h3 className="product-title">{product.name}</h3>
						<strong className="product-price">${product.price}</strong>
						<span className="icon-cross">
							<img src="/images/cross.svg" className="img-fluid"/>
						</span>
					</a>
				</div>
				))} 
				{/* <!-- End Column 1 --> */}

			
			  </div>
		</div>
	</div>


	<script src="js/bootstrap.bundle.min.js"></script>
	<script src="js/tiny-slider.js"></script>
	<script src="js/custom.js"></script>
</body>

</html>
);
}

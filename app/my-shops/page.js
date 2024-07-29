"use client"
import { useEffect, useState } from "react";
import AppHead from "../Components/AppHead";
import AppHeader from "../Components/AppHeader";
import { getMyShops } from "../requests";

export default function Home() {
	const [myshops,setMyShops] = useState([]);

	useEffect(()=>{
		getMyShops().
		then(data=>{
			setMyShops(data);
		})
	},[]);


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
							<h1>My Shops</h1>
							<p className="mb-4">These are the list of my current shops</p>
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

	

	{/* <!-- Start Blog Section --> */}
	<div className="blog-section">
		<div className="container">
			
			<div className="row">

				{myshops.map((shop,index)=>(
					<div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
					<div className="post-entry">
						<a href={`/my-shops/${shop._id}`} className="post-thumbnail"><img src={`/images/${shop.banner}`} alt="Image" className="img-fluid"/></a>
						<div className="post-content-entry">
							<h3><a href="#">{shop.name}</a></h3>
							<div className="meta">
								<span>{shop.desc}</span>
							</div>
						</div>
					</div>
				</div>
				))}


			</div>
		</div>
	</div>
	{/* <!-- End Blog Section -->	 */}

	





	<script src="js/bootstrap.bundle.min.js"></script>
	<script src="js/tiny-slider.js"></script>
	<script src="js/custom.js"></script>
</body>

</html>
    
  );
}

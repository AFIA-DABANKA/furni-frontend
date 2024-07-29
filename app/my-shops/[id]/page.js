"use client"
import { useEffect, useState } from "react";
import AppHead from "../../Components/AppHead";
import AppHeader from "../../Components/AppHeader";
import { getShopProducts } from "../../requests";

export default function Home({params}) {
	const [products, setProducts] = useState([]);
	const [shop, setShop] = useState([]);

	useEffect(() => {
		// setDomLoaded(true);
		// myLoad();
	
		getShopProducts(params.id).then(data=>{
			console.log('====================================');
			console.log(data);
			console.log('====================================');
			setProducts(data)
		});
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
							<h1>Shop</h1>
						</div>
					</div>
					<div className="col-lg-7">
						
					</div>
				</div>
			</div>
		</div>
	{/* <!-- End Hero Section --> */}

	

	<div className="untree_co-section product-section before-footer-section">
		<div className="container">
			  <div className="row">

				  {/* <!-- Start Column 1 --> */}
				{products.map((product)=>(
					<div className="col-12 col-md-4 col-lg-3 mb-5">
					<a className="product-item" href={`/my-shops/products/edit/${product._id}`}>
						<img src={`/images/${product.banner}`} className="img-fluid product-thumbnail"/>
						<h3 className="product-title">{product.name}</h3>
						<p>{product.unit} in stock</p>
						<strong className="product-price">${product.price}</strong>

						<span className="icon-cross">
							<img src="/images/cross.svg" className="img-fluid"/>
						</span>
					</a>
				</div>
				))} 
				{/* <!-- End Column 1 --> */}

			
			  </div>
			  <a href={`/my-shops/products/${params.id}`} className="btn btn-primary-hover-outline">Add Product</a>
		</div>
	</div>


	{/* <!-- Start Footer Section --> */}
	<footer className="footer-section">
		<div className="container relative">

			<div className="sofa-img">
				<img src="/images/sofa.png" alt="Image" className="img-fluid"/>
			</div>

			<div className="row">
				<div className="col-lg-8">
					<div className="subscription-form">
						<h3 className="d-flex align-items-center"><span className="me-1"><img src="/images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

						<form action="#" className="row g-3">
							<div className="col-auto">
								<input type="text" className="form-control" placeholder="Enter your name"/>
							</div>
							<div className="col-auto">
								<input type="email" className="form-control" placeholder="Enter your email"/>
							</div>
							<div className="col-auto">
								<button className="btn btn-primary">
									<span className="fa fa-paper-plane"></span>
								</button>
							</div>
						</form>

					</div>
				</div>
			</div>

			<div className="row g-5 mb-5">
				<div className="col-lg-4">
					<div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
					<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

					<ul className="list-unstyled custom-social">
						<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
						<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
						<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
						<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
					</ul>
				</div>

				<div className="col-lg-8">
					<div className="row links-wrap">
						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#">About us</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Contact us</a></li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#">Support</a></li>
								<li><a href="#">Knowledge base</a></li>
								<li><a href="#">Live chat</a></li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#">Jobs</a></li>
								<li><a href="#">Our team</a></li>
								<li><a href="#">Leadership</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

						<div className="col-6 col-sm-6 col-md-3">
							<ul className="list-unstyled">
								<li><a href="#">Nordic Chair</a></li>
								<li><a href="#">Kruzo Aero</a></li>
								<li><a href="#">Ergonomic Chair</a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>

			<div className="border-top copyright">
				<div className="row pt-4">
					<div className="col-lg-6">
						<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a>  Distributed By <a href="https://themewagon.com">ThemeWagon</a> 
		</p>
					</div>

					<div className="col-lg-6 text-center text-lg-end">
						<ul className="list-unstyled d-inline-flex ms-auto">
							<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
							<li><a href="#">Privacy Policy</a></li>
						</ul>
					</div>

				</div>
			</div>

		</div>
	</footer>
	{/* <!-- End Footer Section -->	 */}


	<script src="js/bootstrap.bundle.min.js"></script>
	<script src="js/tiny-slider.js"></script>
	<script src="js/custom.js"></script>
</body>

</html>
);
}

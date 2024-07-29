"use client"
import AppHeader from "@/app/Components/AppHeader";
import AppHead from "@/app/Components/AppHead";
import { useEffect, useState } from "react";
import { AddProduct, CreateShop, DeleteProduct, getMyShops, getProductDetails, UpdateProduct } from "@/app/requests";
import { useRouter } from "next/router";


export default function Home({params}) {
	const [loadDom,setLoadDom]=useState(false);
	const [inputValueName, setInputValueName] = useState(''); 
	const [inputValueType, setInputValueType] = useState(''); 
	const [inputValueUnit, setInputValueUnit] = useState(''); 
	const [inputValueSupplier, setInputValueSupplier] = useState(''); 
	const [inputValueBanner, setInputValueBanner] = useState(''); 
	const [inputValueDesc, setInputValueDesc] = useState(''); 
	const [inputValuePrice, setInputValuePrice] = useState(''); 
	const [productDetails, setProductDetials] = useState([]);
	// const router = useRouter();

	const handleChange = (setter) => (event) => setter(event.target.value);


	useEffect(() => {
		setLoadDom(true);
		getProductDetails(params.id).then(data=>{
			setInputValueName(data.name);
			setInputValueType(data.type);
			setInputValueUnit(data.unit);
			setInputValueBanner(data.banner);
			setInputValueDesc(data.desc);
			setInputValuePrice(data.price);
			setInputValueSupplier(data.suplier);
			setProductDetials(data);
			console.log('====================================');
			console.log(data);
			console.log('====================================');
		});
		
	  }, []);

	  const handleDelete = async () => {
		const res = await DeleteProduct(params.id);
		if (res) {
		  alert('Product deleted!');
		  window.location.href='/my-shops'
		//   router.back(); 
		}
	  }
  return (
	<>{loadDom && (
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
							<h1>Add Product</h1>
							<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<p><a className="btn btn-secondary me-2"
							onClick={handleDelete}>Delete product</a><a href="#edit" className="btn btn-white-outline">Edit product</a></p>
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

	{/* <!-- Start Contact Form --> */}
	<div className="untree_co-section" id="edit">
  <div className="container">
	<div className="block">
	  <div className="row justify-content-center">


		<div className="col-md-8 col-lg-8 pb-4">
		  <form>
			<div className="row">
			  <div className="col-6">
				<div className="form-group">
				  <label className="text-black" for="fname">Name</label>
				  <input type="text" className="form-control" id="fname"
					value={inputValueName} 
					onChange={handleChange(setInputValueName)} />
				</div>
			  </div>
			  <div className="col-6">
				<div className="form-group">
				  <label className="text-black" for="lname">Type</label>
				  <input type="text" className="form-control" id="lname"
				  value={inputValueType} 
				  onChange={handleChange(setInputValueType)}/>
				</div>
			  </div>
			  <div className="col-6">
				<div className="form-group">
				  <label className="text-black" for="lname">Supplier</label>
				  <input type="text" className="form-control" id="lname"
				  value={inputValueSupplier} 
				  onChange={handleChange(setInputValueSupplier)}/>
				</div>
			  </div>
			  <div className="col-6">
				<div className="form-group">
				  <label className="text-black" for="lname">Price</label>
				  <input type="number" className="form-control" id="lname"
				  min={1}
				  value={inputValuePrice} 
				  onChange={handleChange(setInputValuePrice)}/>
				</div>
			  </div>
			  <div className="col-6">
				<div className="form-group">
				  <label className="text-black" for="lname">Quantity</label>
				  <input type="number" className="form-control" id="lname"
				  min={1}
				  value={inputValueUnit} 
				  onChange={handleChange(setInputValueUnit)}/>
				</div>
			  </div>
			  <div className="col-6">
				<div className="form-group">
				  <label className="text-black" for="lname">Banner</label>
				  <input type="text" className="form-control" id="lname"
				  value={inputValueBanner}
				  onChange={handleChange(setInputValueBanner)}/>
				</div>
			  </div>
			</div>

			<div className="form-group mb-5">
			  <label className="text-black" for="message">Message</label>
			  <textarea name="" className="form-control" id="message" cols="30" rows="5"
			  value={inputValueDesc}
			  onChange={handleChange(setInputValueDesc)}></textarea>
			</div>

			<div className="btn btn-primary-hover-outline" 
			onClick={async()=>{
				const res =await UpdateProduct(inputValueName,inputValueType,inputValueUnit,inputValueSupplier,inputValuePrice,inputValueBanner,inputValueDesc,params.id,productDetails.shop_id);

				if(res._id){
					alert('Product is updated!')
				}
			}}>Submit</div>
		  </form>

		</div>

	  </div>

	</div>

  </div>


</div>

{/* <!-- End Contact Form --> */}

	

	{/* <!-- Start Footer Section --> */}
	<footer className="footer-section">
		<div className="container relative">

			<div className="sofa-img">
				<img src="images/sofa.png" alt="Image" className="img-fluid"/>
			</div>

			<div className="row">
				<div className="col-lg-8">
					<div className="subscription-form">
						<h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

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
						<p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  
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
</html>)}</>
);
}

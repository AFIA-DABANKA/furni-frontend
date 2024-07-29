import AppHead from "../Components/AppHead";
import AppHeader from "../Components/AppHeader";

export default function Home() {
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
							<h1>Services</h1>
							<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="hero-img-wrap">
							<img src="images/couch.png" className="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/* <!-- End Hero Section --> */}

	

	{/* <!-- Start Why Choose Us Section --> */}
	<div className="why-choose-section">
		<div className="container">
			
			
			<div className="row my-5">
				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/truck.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>Fast &amp; Free Shipping</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/bag.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>Easy to Shop</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/support.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>24/7 Support</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/return.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>Hassle Free Returns</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/truck.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>Fast &amp; Free Shipping</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/bag.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>Easy to Shop</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/support.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>24/7 Support</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

				<div className="col-6 col-md-6 col-lg-3 mb-4">
					<div className="feature">
						<div className="icon">
							<img src="images/return.svg" alt="Image" className="imf-fluid"/>
						</div>
						<h3>Hassle Free Returns</h3>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
					</div>
				</div>

			</div>
		
		</div>
	</div>
	{/* <!-- End Why Choose Us Section --> */}

	{/* <!-- Start Product Section --> */}
	<div className="product-section pt-0">
		<div className="container">
			<div className="row">

				{/* <!-- Start Column 1 --> */}
				<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
					<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
					<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
					<p><a href="#" className="btn">Explore</a></p>
				</div> 
				{/* <!-- End Column 1 --> */}

				{/* <!-- Start Column 2 --> */}
				<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
					<a className="product-item" href="#">
						<img src="images/product-1.png" className="img-fluid product-thumbnail"/>
						<h3 className="product-title">Nordic Chair</h3>
						<strong className="product-price">$50.00</strong>

						<span className="icon-cross">
							<img src="images/cross.svg" className="img-fluid"/>
						</span>
					</a>
				</div> 
				{/* <!-- End Column 2 --> */}

				{/* <!-- Start Column 3 --> */}
				<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
					<a className="product-item" href="#">
						<img src="images/product-2.png" className="img-fluid product-thumbnail"/>
						<h3 className="product-title">Kruzo Aero Chair</h3>
						<strong className="product-price">$78.00</strong>

						<span className="icon-cross">
							<img src="images/cross.svg" className="img-fluid"/>
						</span>
					</a>
				</div>
				{/* <!-- End Column 3 --> */}

				{/* <!-- Start Column 4 --> */}
				<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
					<a className="product-item" href="#">
						<img src="images/product-3.png" className="img-fluid product-thumbnail"/>
						<h3 className="product-title">Ergonomic Chair</h3>
						<strong className="product-price">$43.00</strong>

						<span className="icon-cross">
							<img src="images/cross.svg" className="img-fluid"/>
						</span>
					</a>
				</div>
				{/* <!-- End Column 4 --> */}

			</div>
		</div>
	</div>
	{/* <!-- End Product Section --> */}

	

	{/* <!-- Start Testimonial Slider --> */}
	<div className="testimonial-section before-footer-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-7 mx-auto text-center">
					<h2 className="section-title">Testimonials</h2>
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="testimonial-slider-wrap text-center">

						<div id="testimonial-nav">
							<span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
							<span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
						</div>

						<div className="testimonial-slider">
							
							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<blockquote className="mb-5">
												<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
											</blockquote>

											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
												</div>
												<h3 className="font-weight-bold">Maria Jones</h3>
												<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
											</div>
										</div>

									</div>
								</div>
							</div> 
							{/* <!-- END item --> */}

							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<blockquote className="mb-5">
												<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
											</blockquote>

											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
												</div>
												<h3 className="font-weight-bold">Maria Jones</h3>
												<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
											</div>
										</div>

									</div>
								</div>
							</div> 
							{/* <!-- END item --> */}

							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<blockquote className="mb-5">
												<p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
											</blockquote>

											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
												</div>
												<h3 className="font-weight-bold">Maria Jones</h3>
												<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
											</div>
										</div>

									</div>
								</div>
							</div> 
							{/* <!-- END item --> */}

						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- End Testimonial Slider --> */}

	

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

</html>
);
}

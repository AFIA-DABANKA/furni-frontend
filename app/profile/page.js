"use client"
import { useEffect, useState } from "react";
import AppHead from "../Components/AppHead";
import { getSession, updateProfle } from "../requests";
import AppHeader from "../Components/AppHeader";

export default function Home() {
	const [ session,setSession]=useState();
	const [inputValueName, setInputValueName] = useState(''); 
	const [inputValueUsername, setInputValueUsername] = useState(''); 
	const [inputValuePhone, setInputValuePhone] = useState(''); 
	const [inputValueEmail, setInputValueEmail] = useState('');

	const handleChange = (setter) => (event) => setter(event.target.value);

	useEffect(()=>{
		getSession().then(data=>{
			setSession(data);
			setInputValueName(data.userProfile.full_name)
			setInputValueUsername(data.userUsername)
			setInputValueEmail(data.userEmail)
			setInputValuePhone(data.userPhone)
		})
	},[]);
  return (
<html lang="en">
	<AppHead/>
<body>
	<AppHeader/>
	{/* <!-- Start Testimonial Slider --> */}
	<div className="testimonial-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-7 mx-auto text-center">
					<h2 className="section-title">Profile</h2>
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="testimonial-slider-wrap text-center">

						<div className="testimonial-slider">
							
							<div className="item">
								<div className="row justify-content-center">
									<div className="col-lg-8 mx-auto">

										<div className="testimonial-block text-center">
											<div className="author-info">
												<div className="author-pic">
													<img src="images/person-1.png" alt="Maria Jones" className="img-fluid"/>
												</div>
												<h3 className="font-weight-bold"><strong>Username: </strong>{session?.userUsername}</h3>
												<span className="position d-block mb-3"><strong>Email: </strong>{session?.userEmail}</span>
												<span className="position d-block mb-3"><strong>Contact: </strong>{session?.userPhone}</span>
												<span className="position d-block mb-3"><strong>Role: </strong>{session?.userProfile.role}</span>
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
					<label className="text-black" for="fname">Username</label>
					<input type="text" className="form-control" id="fname"
						value={inputValueUsername} 
						onChange={handleChange(setInputValueUsername)} />
					</div>
				</div>
				<div className="col-6">
					<div className="form-group">
					<label className="text-black" for="lname">Contact</label>
					<input type="tel" className="form-control" id="lname"
					value={inputValuePhone} 
					onChange={handleChange(setInputValuePhone)}/>
					</div>
				</div>

				<div className="col-6">
					<div className="form-group">
					<label className="text-black" for="lname">Email</label>
					<input type="email" className="form-control" id="lname"
					min={1}
					value={inputValueEmail} 
					onChange={handleChange(setInputValueEmail)}/>
					</div>
				</div></div>

				<div className="btn btn-primary-hover-outline mt-5" 
				onClick={async()=>{
					var res =await updateProfle(inputValueUsername,inputValueEmail,inputValuePhone,inputValueName);

					if(res==201){
						alert('Profile updated!');
					}
					getSession().
					then(data=>{
						setSession(data);
						setInputValueUsername(data.userUsername)
						setInputValueEmail(data.userEmail)
						setInputValuePhone(data.userPhone)
						setInputValueName(data.userProfile.full_name)
					})
				}}>Update</div>
			</form>
			</div>
		</div>
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

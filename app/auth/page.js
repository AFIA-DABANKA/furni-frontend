"use client"
import { useState } from "react";
import { login, regiser } from "../requests";

export default function Home() {
	const [email,setEmail] = useState();
	const [inputValueEmail, setInputValueEmail] = useState(''); 
	const [inputValuePassword, setInputValuePassword] = useState(''); 
	const [inputValueUsername, setInputValueUsername] = useState(''); 


	const handleChangeEmail = (event) => {
		setInputValueEmail(event.target.value);
	};
	const handleChangePassword = (event) => {
		setInputValuePassword(event.target.value);
	};
	const handleChangeUsername = (event) => {
		setInputValueUsername(event.target.value);
	};


  return (
	<html lang="en" dir="ltr">
	  <head>
		<meta charSet="UTF-8"/>
		<title> Login and Registration </title>
		<link rel="stylesheet" href="/css/login.css"/>
		 {/* Fontawesome CDN Link  */}
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	   </head>
	<body>
	  <div className="container">
		<input type="checkbox" id="flip"/>
		<div className="cover">
		  <div className="front">
			<img src="/images/frontImg.jpg" alt=""/>
			<div className="text">
			  <span className="text-1">Every new friend is a <br/> new adventure</span>
			  <span className="text-2">Let's get connected</span>
			</div>
		  </div>
		  <div className="back">
			<img className="backImg" src="images/backImg.jpg" alt=""/>
			<div className="text">
			  <span className="text-1">Complete miles of journey <br/> with one step</span>
			  <span className="text-2">Let's get started</span>
			</div>
		  </div>
		</div>
		<div className="forms">
			<div className="form-content">
			  <div className="login-form">
				<div className="title">Login</div>
			  <form>
				<div className="input-boxes">
				  <div className="input-box">
					<i className="fas fa-envelope"></i>
					<input type="text" placeholder="Enter your email"
					value={inputValueEmail}
					onChange={handleChangeEmail}
					/>
				  </div>
				  <div className="input-box">
					<i className="fas fa-lock"></i>
					<input type="password" placeholder="Enter your password" value={inputValuePassword}
					onChange={handleChangePassword}/>
				  </div>
				  <div className="text"><a href="#">Forgot password?</a></div>
				  <div className="button input-box">

					<div className="button"
					onClick={async()=>{
						var res = await login(inputValueEmail,inputValuePassword);
						res ==true ? window.location.href='/':alert(res.error)
					}}>
						<p>Login</p>
					</div>
				  </div>
				  <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
				</div>
			</form>
		  </div>
			<div className="signup-form">
			  <div className="title">Signup</div>
			<form action="#">
				<div className="input-boxes">
				  <div className="input-box">
					<i className="fas fa-user"></i>
					<input type="text" placeholder="Enter your name"
					value={inputValueUsername}
					onChange={handleChangeUsername}/>
				  </div>
				  <div className="input-box">
					<i className="fas fa-envelope"></i>
					<input type="text" placeholder="Enter your email"
					value={inputValueEmail}
					onChange={handleChangeEmail}/>
				  </div>
				  <div className="input-box">
					<i className="fas fa-lock"></i>
					<input type="password" placeholder="Enter your password"
					value={inputValuePassword}
					onChange={handleChangePassword}/>
				  </div>
				  <div className="button input-box">
				  <div className="button"
				  onClick={async()=>{
					const res = await regiser(inputValueUsername,inputValueEmail,inputValuePassword);
					res ==true ? window.location.href='/':alert(res.error)
				  }}>
						<p>Register</p>
					</div>
				  </div>
				  
				  <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
				</div>
		  </form>
		</div>
		</div>
		</div>
	  </div>
	</body>
	</html>
	
);
}

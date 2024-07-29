'use server'
import { cookies } from "next/headers"
import {getIronSession} from 'iron-session'
import axios from "axios";
import { redirect } from "next/navigation";

// Authentication and Authorization
export const getSession=async ()=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    if(!session.isLoggedIn){
        session.isLoggedIn=false;
    }
    
    return JSON.parse(JSON.stringify(session));
}

export const login = async(email,password)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    // Make a post request to server for login
    const results = await axios({
        method: 'post',
        url: 'https://gateway-bo1v.onrender.com/customer/login',
        data: { email,password }
      });

    if(!results.data.id)  {
        return {error:"Wrong credentials!"}
    }else{
        session.userId = results.data.id;
        session.userEmail = results.data.email;
        session.userUsername = results.data.username;
        session.userPhone = results.data.phone?results.data.phone:'';
        session.userProfile = results.data.profile?results.data.profile:{ role: '', full_name: '' };
        session.userToken = results.data.token;
        session.isLoggedIn=true;

        await session.save();
        console.log("session:",session)
        return true;
    }  
}

export const regiser = async(username,email,password)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    console.log(username,email,password)

    // Make a post request to server for signup
    const results = await axios({
        method: 'post',
        url: 'https://gateway-bo1v.onrender.com/customer/signup',
        data: { email,password,username }
      });

    if(email !==results.data.email)  {
        return {error:"Wrong credentials!"}
    }

    

    session.userId = results.data.id;
    session.userEmail = results.data.email;
    session.userUsername = results.data.username;
    session.userPhone = results.data.phone;
    session.userProfile = results.data.profile;
    session.userToken = results.data.token;
    session.isLoggedIn=true;
    
    await session.save();
    console.log("session:",session)
    return true;
}

export const updateProfle = async(username,email,phone,full_name)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    // console.log("=>",username,email,phone,full_name)


    // Make a post request to server for signup
    const results = await axios({
        method: 'put',
        url: 'https://gateway-bo1v.onrender.com/customer/profile',
        headers: {
			'Authorization': `Bearer ${session.userToken}`,
		},
        data: { username,email,phone,profile:{full_name}}
      });

    if(email !==results.data.email)  {
        return {error:"Wrong credentials!"}
    }

    session.userId = results.data.id;
    session.userEmail = results.data.email;
    session.userUsername = results.data.username;
    session.userPhone = results.data.phone;
    session.userProfile = results.data.profile;
    session.userToken = results.data.token;
    session.isLoggedIn=true;
    
    await session.save();
    return results.status;
}

// users
export const getProduct = async ()=>{
    const results  = await axios({
        method:'get',
        url:'https://gateway-bo1v.onrender.com/',
        headers:{
            'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q0QHRlc3QuY29tIiwiX2lkIjoiNjY5YmFiMzg1NTFkMjkwOGY5MDI3ODUyIiwiaWF0IjoxNzIxNDc3OTQ1LCJleHAiOjE3MjQwNjk5NDV9.CzOG0G5s32Jes55Got-ojSMCwuK5uqB28eE59Eg4vDU'
        }
    });

    return results.data
}
export const GetShoppingDetails =async()=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'get',
        url: `https://gateway-bo1v.onrender.com/customer/shoping-details`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		}
      });
    return results.data;
}

export const getProductDetails =async(product_id)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'get',
        url: `https://gateway-bo1v.onrender.com/listings/${product_id}`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		}
      });

    return results.data;
}

export const AddToCart =async(_id,qty,shop_id)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});
    console.log('====================================');
    console.log(_id,qty,shop_id);
    console.log('====================================');

    const results = await axios({
        method: 'put',
        url: `https://gateway-bo1v.onrender.com/cart`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
        data:{ _id, qty,shop_id }
      });

    return results.status;
}

export const deleteCart =async(productId)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'DELETE',
        url: `https://gateway-bo1v.onrender.com/cart/${productId}`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		}
      });

    return results.data;
}

export const createOrder =async(txnId,deliveryFee)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'POST',
        url: `https://gateway-bo1v.onrender.com/shopping/order`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
        data:{ txnNumber: txnId,name:session.userUsername,address:'',contact:session.userPhone,note:'',destCoords:{ lng:'longitude',lat:'latitude' },deliveryFee}
      });

    return results.data;
}

export const getAllShops =async()=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'get',
        url: ' https://gateway-bo1v.onrender.com/shops',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
      });


    return results.data;
}

export const getShopProducts =async(shop_id)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});
    

    const results = await axios({
        method: 'get',
        url: `https://gateway-bo1v.onrender.com/shops/${shop_id}/listings`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
      });


    return results.data;
}



// Shop Owners
export const CreateShop =async(name, desc, banner, address, contact, email,longitude,latitude)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'POST',
        url: `https://gateway-bo1v.onrender.com/shop/create`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
        data:{ name, desc, banner, address, contact, email,locCoords:{lng:longitude,lat:latitude} }
      });

    return results.data;
}

export const getMyShops =async()=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'get',
        url: `https://gateway-bo1v.onrender.com/shop/myshop`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		}
      });
    return results.data;
}

export const AddProduct =async(name,type,unit,suplier,price,banner,shop_id,desc)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'POST',
        url: `https://gateway-bo1v.onrender.com/product/create`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
        data:{ name,type,unit,suplier,price,banner,shop_id,desc }
      });

    return results.data;
}

export const UpdateProduct =async(name,type,unit,suplier,price,banner,desc,product_Id,shop_id)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'PUT',
        url: `https://gateway-bo1v.onrender.com/listings/${product_Id}`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
        data:{ name,type,unit,suplier,price,banner,desc,shop_id }
      });

    return results.data;
}

export const DeleteProduct =async(product_Id)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'DELETE',
        url: `https://gateway-bo1v.onrender.com/listings/${product_Id}`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		}
      });

    return results.data;
}



// Order and Delivery Management
export const GetAllOrders =async()=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'get',
        url: `https://gateway-bo1v.onrender.com/shopping/orders/all`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		}
      });
    return results.data;
}

export const UpdateOrder =async(order_id,status)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    console.log('====================================');
    console.log(order_id,status);
    console.log('====================================');
    const results = await axios({
        method: 'PUT',
        url: `https://gateway-bo1v.onrender.com/shopping/order/status/${order_id}`,
        headers: {
            'Content-Type': 'application/json',
			'Authorization': `Bearer ${session.userToken}`
		},
        data:{status:status}
      });

    console.log('====================================');
    console.log(results.data);
    console.log('====================================');
    return results.data;
}

export const getMyShopDetails =async(id)=>{
    const session = await getIronSession(cookies(),{password:'ab5b9722-0447-4749-b357-1a2472324dd7',cookieName:'farad-session',cookieOptions:{httpOnly:true}});

    const results = await axios({
        method: 'get',
        url: `https://gateway-bo1v.onrender.com/myshop/${id}`,
        headers: {
			'Authorization': `Bearer ${session.userToken}`,
            'Content-Type': 'application/json'
		}
      });
    return results.data;
}
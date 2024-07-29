"use client"
import { useEffect, useState } from "react";

import { deleteCart, GetShoppingDetails } from "../requests";
import AppHead from "../Components/AppHead";
import AppHeader from "../Components/AppHeader";

export default function Home() {
  const [products,setProducts]=useState([]);
  const [orders,setOrders]=useState([]);
  const [reload,setReload]=useState(false);
	const [subtotal, setSubtotal] = useState(0);
	const [shipping, setShipping] = useState(0);
	const [session, setSession] = useState(null);

  useEffect(()=>{
    GetShoppingDetails().
    then(data=>{
      setOrders(data.orders)
      console.log("ppp:",data);
    });
  },[reload])
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
              <h1>Your Orders</h1>
            </div>
          </div>
          <div className="col-lg-7">
            
          </div>
        </div>
      </div>
    </div>
  {/* <!-- End Hero Section --> */}


  <div className="untree_co-section before-footer-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Order</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Date</th>
                      </tr>
                    </thead>
                    <tbody>

                      {orders?.map((order,index)=>(
                        <tr key={index}>
                        <td className="product-thumbnail">
                          <img src="/images/product-1.png" alt="Image" className="img-fluid"/>
                        </td>
                        <td className="product-name">
                          <h2 className="h5 text-black">#{order.orderId.toString().substr(0,10)}</h2>
                        </td>
                        <td>${order.amount}</td>
                        <td>{order.date.toString().substr(0,10)}</td>
                        
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <a className="col flex algn-self-center btn bg-transparent border border-none m-5"></a>
        <a className="col flex algn-self-center btn btn-outline-primary m-5" href = './order-management'>
          Track Order
        </a>
        <a className="col flex algn-self-center btn bg-transparent border border-none m-5"></a>
        </div>
  


  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/tiny-slider.js"></script>
  <script src="js/custom.js"></script>
</body>
</html>);
}

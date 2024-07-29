"use client";
import { useEffect, useState } from "react";

import { deleteCart, GetAllOrders, UpdateOrder } from "../requests";
import AppHead from "../Components/AppHead";
import AppHeader from "../Components/AppHeader";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await GetAllOrders();
        setOrders(data.reverse());
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, [reload]);

  const handleChangeStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const success = await UpdateOrder(orderId, newStatus);
      if (success) {
        setReload(prev => !prev); // Trigger reload to refresh the order list
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <html lang="en">
      <AppHead />
      <body>
        <AppHeader />
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Order Delivery Details</h1>
                </div>
              </div>
              <div className="col-lg-7"></div>
            </div>
          </div>
        </div>

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
                        <th className="product-quantity">Status</th>
                        <th className="product-action">Action</th>
                      </tr>
                    </thead>
                      {console.log(orders)}
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <img src="/images/product-1.png" alt="Image" className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">#{order.orderId.toString().substr(0, 10)}</h2>
                          </td>
                          <td>${order.amount}</td>
                          <td>
                            <select
                              value={order.status}
                              onChange={(e) => handleChangeStatus(index, e.target.value)}
                            >
                              <option value="On Hold">On Hold</option>
                              <option value="Ready">Ready</option>
                              <option value="Shipping">Shipping</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td>
                            <button
                              onClick={() => handleUpdateStatus(order.orderId, orders[index].status)}
                            >
                              Update
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
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

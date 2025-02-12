"use client";
import { useEffect, useState } from "react";

import { AddProduct, AddToCart, deleteCart, GetShoppingDetails } from "../requests";
import AppHead from "../Components/AppHead";
import AppHeader from "../Components/AppHeader";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [reload, setReload] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [session, setSession] = useState(null);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchShoppingDetails = async () => {
      try {
        const data = await GetShoppingDetails();
        let newSubtotal = 0;
        data.cart.forEach(element => {
          const itemTotal = element.product.price * element.unit;
          newSubtotal += itemTotal;
        });
        setSubtotal(newSubtotal);
        setShipping(newSubtotal > 0 ? 5 : 0);
        setCarts(data.cart);
        setQuantities(data.cart.reduce((acc, cart) => {
          acc[cart.product._id] = cart.unit; // Set the initial quantity from data
          return acc;
        }, {}));
      } catch (error) {
        console.error('Error fetching shopping details:', error);
      }
    };
    fetchShoppingDetails();
  }, [reload]);

  const handleQuantityChange = (id, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: parseInt(value, 10) || 1 // Ensure value is a number and default to 1 if invalid
    }));
  };

  const handleUpdateClick = async (productId, shopId) => {
    try {
      const quantity = quantities[productId] || 1;
      await AddToCart(productId, quantity, shopId);
      const data = await GetShoppingDetails();
      setCarts(data.cart);
      setReload(prev => !prev); // Toggle reload to refresh data
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const handleRemoveClick = async (productId) => {
    try {
      await deleteCart(productId);
      const data = await GetShoppingDetails();
      setCarts(data.cart);
      setReload(prev => !prev); // Toggle reload to refresh data
    } catch (error) {
      console.error('Error removing from cart:', error);
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
                  <h1>Cart</h1>
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
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts.map((cart, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <img src="/images/product-1.png" alt="Image" className="img-fluid" />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{cart.product.name}</h2>
                          </td>
                          <td>${cart.product.price}</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: '120px' }}>
                              <input
                                type="number"
                                className="form-control text-center quantity-amount"
                                value={quantities[cart.product._id] || 1}
                                onChange={(e) => handleQuantityChange(cart.product._id, e.target.value)}
                                aria-label="Product quantity"
                              />
                            </div>
                          </td>
                          <td>
                            <div
                              className="btn btn-primary btn-sm"
                              onClick={() => handleUpdateClick(cart.product._id, cart.product.shop_id)}
                            >
                              Update
                            </div>
                          </td>
                          <td>
                            <a className="btn btn-black btn-sm"
                               onClick={() => handleRemoveClick(cart.product._id)}>
                              X
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <span className="text-black">Subtotal</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">${subtotal}</strong>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <a className="btn btn-black btn-lg py-3 btn-block" href="/checkout">Proceed To Checkout</a>
                      </div>
                    </div>
                  </div>
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

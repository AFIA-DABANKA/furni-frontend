"use client" //onclick="window.location='thankyou.html'" 
import { useEffect, useState } from "react";
import { PaystackConsumer } from 'react-paystack';
import AppHead from "../Components/AppHead";
// import { getShopDetails } from "../requests";
import AppHeader from "../Components/AppHeader";
import { createOrder, GetShoppingDetails } from "../requests";

export default function Home() {
  const [carts,setCarts]=useState([])
  const [subtotal,setSubtotal]=useState(0)

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [note, setNote] = useState('');

  const [componentProps, setComponentProps] = useState(null);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const handleChangeName =(event)=>setName(event.target.value);

  useEffect(()=>{
    GetShoppingDetails().
    then(data=>{
      setCarts(data.cart);
      // setSenderEmail(data.email);
      var newSubtotal=0
      data.cart.forEach(element => {
        const itemTotal = element.product.price * element.unit;
        newSubtotal +=itemTotal;
      });
      setSubtotal(newSubtotal);

      setComponentProps({
        reference: (new Date()).getTime().toString(),
        email: data.email,
        amount: parseInt((newSubtotal+newSubtotal*.008)*100),
        publicKey: process.env.NEXT_PUBLIC_PAYMENT_API_KEY,
        currency: 'GHS',
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose,
      });
    })
  },[]);


  async function handleSuccess(reference){
    var price =await document.getElementById('price').value;
    console.log(price)
      if (reference.status === 'success') {
        const res = await createOrder(reference.reference,price);
        if (res) {
          alert("Order has been placed successfully");
  
          const { cart } = await GetShoppingDetails();
          setCarts(cart);
  
          const newSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.unit, 0);
          setSubtotal(newSubtotal);
          setConfig(null);
        }
      }
    };
  
    function handleClose(){
      console.log('Payment dialog closed');
    };
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
              <h1>Checkout</h1>
            </div>
          </div>
          <div className="col-lg-7">
            
          </div>
        </div>
      </div>
    </div>
  {/* <!-- End Hero Section --> */}

  <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="border p-4 rounded" role="alert">
              Returning customer? <a href="#">Click here</a> to login
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Billing Details</h2>
            <div className="p-3 p-lg-5 border bg-white">
              <div className="form-group row">
                <div className="col-md-12">
                  <label for="c_address" className="text-black">Name {name}<span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_companyname" name="c_companyname"  placeholder="Your name"
                  value={name} onChange={handleChangeName}/>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label for="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address"
                  value={address} onChange={handleChange(setAddress)}/>
                </div>
              </div>

              <div className="form-group mt-3">
                <label for="c_address" className="text-black">Contact <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="024*******"
                value={contact} onChange={handleChange(setContact)}/>
                <input type="number"  value={subtotal+subtotal*.008} id="price" hidden/>
              </div>

              <div className="form-group">
                <label for="c_order_notes" className="text-black">Order Notes</label>
                <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..." value={note} onChange={handleChange(setNote)}></textarea>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Your Order</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                      <th>Product</th>
                      <th>Total</th>
                    </thead>
                    <tbody>
                      {carts.map((item,index)=>(
                        <tr key={index}>
                        <td>{item.product.name} <strong className="mx-2">x</strong> {item.unit}</td>
                        <td>${item.product.price}</td>
                      </tr>
                      ))}
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                        <td className="text-black">${subtotal}</td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                        <td className="text-black font-weight-bold"><strong>${subtotal+subtotal*.008}</strong></td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="form-group">

                    {componentProps && (
                        <PaystackConsumer {...componentProps}>
                          {({ initializePayment }) => <button className="btn btn-black btn-lg py-3 btn-block" onClick={() => initializePayment(handleSuccess, handleClose)}>Place Order</button>}
                        </PaystackConsumer>
                      )}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- </form> --> */}
      </div>
    </div>


  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/tiny-slider.js"></script>
  <script src="js/custom.js"></script>
</body>

</html>
    
  );
}

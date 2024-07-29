"use client" //onclick="window.location='thankyou.html'" 
import { useEffect, useState } from "react";
import { PaystackConsumer } from 'react-paystack';
import AppHead from "@/app/Components/AppHead";
// import { getShopDetails } from "../requests";
import AppHeader from "@/app/Components/AppHeader";
import { createOrder, getProductDetails, GetShoppingDetails, AddToCart } from "@/app/requests";

export default function Home({params}) {
  const [carts,setCarts]=useState([])
  const [productDetails,setProductDetails]=useState([])
  const [subtotal,setSubtotal]=useState(0)

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [note, setNote] = useState('');

  const [componentProps, setComponentProps] = useState(null);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const handleChangeName =(event)=>setName(event.target.value);

  useEffect(()=>{
    console.log("=====>",params.id);
    getProductDetails(params.id).then(data=>{
      setProductDetails(data)
      console.log("setProductDetails:",data);
    })
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
              <h1>Single Product</h1>
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
        <div className="row">

          {/* REPLACE WITH PRODUCT BANNER */}


          <div className="col-md-6 mb-5 mb-md-0">
          <img src={`/images/${productDetails.banner}`} class="img-fluid product-thumbnail"/>
          </div>

          {/* REPLACE WITH PRODUCT DETAILS */}

          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">{productDetails.name}</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                      <th>Detail</th>
                      <th></th>
                    </thead>
                    <tbody>
                      {carts.map((item,index)=>(
                        <tr key={index}>
                        <td>{item.product.name} <strong className="mx-2">x</strong> {item.unit}</td>
                        <td>${item.product.price}</td>
                      </tr>
                      ))}
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Description</strong></td>
                        <td className="text-black">{productDetails.desc}</td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Price</strong></td>
                        <td className="text-black font-weight-bold"><strong>${productDetails.price}</strong></td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Supplier</strong></td>
                        <td className="text-black font-weight-bold"><strong>{productDetails.suplier}</strong></td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>Category</strong></td>
                        <td className="text-black font-weight-bold"><strong>{productDetails.type}</strong></td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold"><strong>In Stock</strong></td>
                        <td className="text-black font-weight-bold"><strong>{productDetails.unit}</strong></td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="form-group">

                    {componentProps && (
                        <PaystackConsumer {...componentProps}>
                          {({ initializePayment }) => <button className="btn btn-black btn-lg py-3 btn-block" onClick={async()=>{
                      var res =await AddToCart(productDetails._id,1,productDetails.shop_id);
                      if(res==201){
                        alert('Cart has been added!');
                      }
                    }}>Add to Cart</button>}
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
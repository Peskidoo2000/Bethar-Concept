
import {React, useContext}from "react"
import { ProductContext  } from './Productcontext';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Billing = () => {
  const {cart} = useContext(ProductContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.total, 0);

  
  const generateWhatsAppMessage = (cart, totalPrice) => {
    let message = "Hello, I want to order the following items:\n\n";
  
    cart.forEach((product, index) => {
      const name = product?.name || "N/A";
      const quantity = product?.quantity || "0";
      const price = product?.price || "0";
      message += `${index + 1}. ${name} - ${quantity} - ${price}$\n`;
    });
  
    message += `\nTotal Amount: ${totalPrice}$\nThank you!`;
  
    return encodeURIComponent(message); 
};

const phoneNumber = "2349079404750"; 
const message = generateWhatsAppMessage(cart, totalPrice); 
const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
window.location.href = whatsappLink; 
   
    
  
    return (
      <div>
        <h2 className="billing"> Your Billings</h2>
        <table className="billing-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price per Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.objectId || index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Amount</td>
              <td>{totalPrice}</td>
            </tr>
          </tfoot>
        </table>
        <div className="payment">
            <p className="payment-word"> Pay with Vendor</p>
            <div className="sub-child-apart2"> 
      <button onClick={() => window.open(whatsappLink, "_blank")} className="social-media2"><WhatsAppIcon/></button>
    </div>
        </div>
      </div>
    );
  };
  
  export default Billing;
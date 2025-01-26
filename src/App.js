import {React, useContext} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Home from "./Home";
import {Aside5} from "./Aside"
import Admindashboard from "./Admindashboard";
import Adminlogin from './loginpage'; 
import SearchIcon from '@mui/icons-material/Search';
import BoltIcon from '@mui/icons-material/Bolt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Snacks from "./Snacks";
import Category from "./Category";
import Vegetables from "./Vegetables";
import Seafoods from "./Seafoods";
import Grain from "./Grain";
import Meat from "./Meat";
import Flour from "./Flour";
import Shop from "./Shop";
import Billing from "./Billing";
import { ProductProvider, ProductContext  } from './Productcontext';



function App() {

return(
  <ProductProvider>
  <Router>
    <Main/>
  </Router>
  </ProductProvider>
)


}
function Main(){
  const {cart,  cartCount, searchProduct, searchQuery, setSearchQuery} = useContext(ProductContext);
  const navigate = useNavigate();
        return(
  <div >

<nav className="navigation">

<div className="container-fluid navigator">
  <img src='./assets/bethar logo.jpg' alt='our_logo' className="bethar_logo"/>
 <p className="navbar-brand">Bethar Concept</p>
 <form className="navbar-brand-form" onSubmit={(e) => { e.preventDefault(); searchProduct(); }}>
 <div className="search">
 
            

              <SearchIcon  
              onClick={searchProduct}
              className="search"/>     
            <input
             type="text" 
             value={searchQuery || ""}
             onChange={(e)=>setSearchQuery(e.target.value)}
            style={{ width: '100%'}} 
            className="search-field" 
            placeholder="Search...." />
          </div>
  </form>
      
      <BoltIcon className="bolt-icon"/>
      <p className="navbar-brand add">order now and get it in your footsteps</p>
      <small className="cart-count" onClick={() => navigate('/billing')}>{cartCount}</small><AddShoppingCartIcon className="cart-icon"/>
     
         </div>
</nav>  
  
  

        <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/vegetables" element={<Vegetables/>}/>
          <Route path="/seafoods" element={<Seafoods/>}/>
          <Route path="/grain" element={<Grain/>}/>
          <Route path="/flour" element={<Flour/>}/>
          <Route path="/meat" element={<Meat/>}/>
          <Route path="/snacks" element={<Snacks/>}/>
          <Route path="/admin-dashboard" element ={<Admindashboard/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/billing" element={<Billing cart={cart}/>}/>
        </Routes>
      </main>

      <footer className="footer">
  <div className="container-fluid">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3 category-parent">
        <p className="category">Category</p>
        <Aside5/>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <p className="category">About Us</p>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 for-footer"><small onClick={() => window.open("https://www.facebook.com/profile.php?id=61567240883410&mibextid=ZbWKwL", "_blank")} className="nav-link p-0 text-body-secondary">News and Blog</small></li>
          <li className="nav-item mb-2 for-footer"><small onClick={() => window.open("https://wa.me/2349079404750", "_blank")}className="nav-link p-0 text-body-secondary">Our Whatsapp</small></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
         <Adminlogin/>
      </div>

    
     
      <div className="col-md-5 offset-md-1 mb-3 offer">
        <div className="offer-child1">
        <p className="company-name"> Bethar Concept</p>
        <img src="./assets/bethar logo.jpg" alt='our_logo' className="bethar_logo"/> 
        
        </div>
        <div className="offer-child2">
          <p className="payment">Accepted Payment</p>
          <small className="for-footer">Direct payment</small><button onClick={()=> window.open("https://wa.me/2349079404750", "_blank")} className="social-media2"><WhatsAppIcon/></button>
          </div>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className="reserved">© 2025 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3 social-media1" onClick={() => window.open("https://www.facebook.com/profile.php?id=61567240883410&mibextid=ZbWKwL", "_blank")}><FacebookRoundedIcon/></li>
        <li className="ms-3 social-media2" onClick={()=> window.open("https://wa.me/2349079404750", "_blank")} ><WhatsAppIcon/></li>
        <li className="ms-3 social-media2" onClick={()=> window.open("https://wa.me/2349079404750", "_blank")} ><WhatsAppIcon/></li>
      </ul>
    </div>
  </footer>
</div>
  </footer>
  </div>
  )
}

export default App;

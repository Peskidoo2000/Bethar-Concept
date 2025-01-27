import React, {useContext} from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Aside2, Aside3, Aside4} from './Aside';
import { styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import Stack from '@mui/material/Stack';
import BoltIcon from '@mui/icons-material/Bolt';
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from './Productcontext';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Home = () =>{
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  

    
    const {
      selectedCategory, 
      setSelectedCategory, 
      displayProduct, 
      productState, 
      updateProductState, 
      fallbackForCategory,
      displaySelected,} = useContext(ProductContext);

     
    
        return (
        <div className="App">
          <aside className='home-aside'> 
          <div className="home-advert1">
            <p className="advert-word1"> We bring the store <br/> to your door</p>
            <p className="advert-word2">Get organic produce andsubstainably <br/>sourced groceries at up to 4% off grocery</p>
            <Button variant="contained" size="small" className="shoping-button">
          Shop Now
        </Button>
          </div>
          <div className="home-advert2">
            <img src="./assets/Veg_bag.png" alt="Maybe a bag of farm produce" className="advert-img"/>
          </div>
          </aside>
          <main className="home-header">
            <Aside2/>
            <div className="topic">
            <p className='advert-word3'> You might need</p>
          </div>
  

<div className="product-display">
  {displayProduct.map((item, index) => {
    const product = productState.find((p) => p.id === item.objectId);
    return (
    <Item key={item.id || index} className="product-card"> 
      <CardMedia
        sx={{ height: 60 }}
        image= {item?.Image || fallbackForCategory?.[index % fallbackForCategory?.length]?.img || "./assets/Beans flour.jpeg"}
        title={item.title}
        className="card-media"
      />
      <CardContent>
        <p className="compo">{item?.Name || "No Name Available"}</p>
        <Typography variant="body2" className="gram display">
          {item?.Quantity || "N/A"} gm
        </Typography>
        <p className="price">{item?.Price || "N/A"}$</p>
      </CardContent>
      
      <div className="button-up">
        <Button
          size="small"
          className={product?.buttonclassName || "add-button"}
          onClick={() => updateProductState(item.objectId, "increment")}
        >
          {product?.display || "+"}
        </Button>
        {product?.quantity > 0 && (
          <Button
            size="small"
            className="add-button"
            onClick={() => updateProductState(item.objectId, "decrement")}
          >
            -
          </Button>
        )}
      </div>
    </Item>
     );
})}
</div>


    <div className="topic">
            <p className='advert-word3'> Featured Stores</p>
              <Aside4/>
          </div>
    <div className='parent-features'>
      <div className="child-features ">
          <div className='child-child-features1'>
          <div className="sub-child-child-features1">
           <img src="./assets/crush_pi.png"  alt="maybe crush "className="posterity"/>
           </div>
          </div>
          <div className="child-child-features2">
            <p className='sub-child-child-features2'>Crush Grocery</p>
            <Stack direction="row" spacing={1} className="stack">
            <BoltIcon className='sub-child-child-features3'/>
            <p className='sub-child-child-features4'>Delivery in 12 minutes</p>
            </Stack>
          </div>
      </div>

      <div className="child-features blue special">
          <div className='child-child-features1'>
          <div className="sub-child-child-features1">
           <img src="./assets/Now_delivery.jpg"  alt="Now delivery "className="posterity"/>
           </div>
          </div>
          <div className="child-child-features2">
            <p className='sub-child-child-features2'>Delivery Market</p>
            <Stack direction="row" spacing={1} className="stack">
            <BoltIcon className='sub-child-child-features3'/>
            <p className='sub-child-child-features4'>Delivery in 12 minutes</p>
            </Stack>
          </div>
      </div>

      <div className="child-features special aqua" style={{marginRight:"2rem"}}>
          <div className='child-child-features1'>
          <div className="sub-child-child-features1">
           <img src="./assets/quality.png"  alt="maybe quality "className="posterity"/>
           </div>
          </div>
          <div className="child-child-features2">
            <p className='sub-child-child-features2'>Quality Product</p>
            <Stack direction="row" spacing={1} className="stack">
            <BoltIcon className='sub-child-child-features3'/>
            <p className='sub-child-child-features4'>Delivery in 12 minutes</p>
            </Stack>
          </div>
      </div>
    </div>

    <div className="discount-features">
      <div className='child-discount-features1'>
        <p className='sub-child-discount-features1 common'> Save</p>
        <p className='sub-child-discount-features2 common'> $29</p>
        <p className='sub-child-discount-features3 common'>Enjoy Discount on all type of <br/> Groceries & grain items</p>
          <div className='child-child-discount-features1'>
            <img src='./assets/Garri Ijebu.jpg'
              alt="garri"
              className='filter-image'
              />
          </div>
      </div>

      <div className='child-discount-features1 numba2'>
        <p className='sub-child-discount-features1 common un'> Discount</p>
        <p className='sub-child-discount-features2 common duo'> $30</p>
        <p className='sub-child-discount-features3 common tract'>Enjoy Discount on all type of <br/> Groceries & Flours</p>
          <div className='child-child-discount-features1 secondly'>
          <img src='./assets/fufu powder.jpg'
              alt="fufu powder"
              className='filter-image'
              />
          </div>
      </div>

      <div className='child-discount-features1 numba3'>
        <p className='sub-child-discount-features1 common up-to'> Up to</p>
        <p className='sub-child-discount-features2 common fifty-perce'> $50</p>
        <p className='sub-child-discount-features3 common enjoy-dis'>Enjoy Discount on all type of <br/> Groceries & frozen items</p>
          <div className='child-child-discount-features1 thirdly'>
          <img src='./assets/Melon.jpg'
              alt="garri"
              className='filter-image'
              />
          </div>
      </div>

      <div className='child-discount-features1 numba4'>
        <p className='sub-child-discount-features1 common free'> free</p>
        <p className='sub-child-discount-features2 common shipper'> SHIP</p>
        <p className='sub-child-discount-features3 common counter'>Enjoy Discount on all type of <br/> Groceries & frozen items</p>
        <div className='child-child-discount-features1 fourtly'>
        <img src='./assets/Yam Flour.jpg'
              alt="garri"
              className='filter-image'
              />
          </div>
      </div>
    </div>

  <div className="best-selling-items">
  <div className="topic">
  <p className='selling-items'> Weekly Best Selling Items</p>
  <Aside3/>
  </div>

  <div>
    <nav className="nav-category">
    <Grid container spacing={2} className="box-home">
    {["Sea foods", "Baseless", "Flour", "Snacks", "Dried Veggies", "Grain", "Meat"].map((category)=>(
      <Grid key ={category}>
            <Item 
            className= {selectedCategory === category ? "active" : ""}
            onClick = {()=>setSelectedCategory(category)}
            >
            {category}
            </Item>
          </Grid>        
      ))}
       </Grid>
       
    </nav>
    
    <AnimatePresence mode="wait">
    <motion.div
        key={selectedCategory} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
    >
    <Grid container spaing ={2} className={"display-selected"}>
    {displaySelected.map((item, index) => {
       const product = productState.find((p) => p.id === item.objectId);
       return (
    <Grid item={true} sm={2} md={4} key={item.id || index}>
        <Item className ="product-card">
          <CardMedia
                sx={{ height: 80 }}
                image={item?.Image || fallbackForCategory?.[index % fallbackForCategory?.length]?.img || "./assets/cashewnut.jpg"}
                title={item.title}
                className="card-media"
            />
            <CardContent>
    <Typography variant="h6" className="compo site-name">
        {item?.Name || fallbackForCategory?.[index % fallbackForCategory?.length]?.name || "No Name Available"}
    </Typography>
    <Typography variant="body2" className="gram display">
        {item?.Quantity || fallbackForCategory?.[index % fallbackForCategory?.length]?.quantity || "N/A"} gm
    </Typography>
    <Typography className="price resus">
        {item?.Price || fallbackForCategory?.[index % fallbackForCategory?.length]?.price || "N/A"}$
    </Typography>
</CardContent>
<div className="button-up">
        <Button
          size="small"
          className={product?.buttonclassName || "add-button"}
          onClick={() => updateProductState(item.objectId, "increment")}
        >
          {product?.display || "+"}
        </Button>
        {product?.quantity > 0 && (
          <Button
            size="small"
            className="add-button"
            onClick={() => updateProductState(item.objectId, "decrement")}
          >
            -
          </Button>
        )}
      </div>
        </Item>
    </Grid>
    );
})}
    </Grid>
    </motion.div>
    </AnimatePresence>
   </div>
 </div>

 <div className="parent-apart container-fluid">
  <div className="cover">
  <div className="child-apart1">
    <p className="sub-child-apart1"> Stay Home and Get all your Essentials from Our Market</p>
    <small className="small">contact our admin</small>
    <div className="sub-child-apart2"> 
    <button onClick={() => window.open("https://www.facebook.com/profile.php?id=61567240883410&mibextid=ZbWKwL", "_blank")}className="social-media1"><FacebookRoundedIcon/></button>
      <button onClick={()=> window.open("https://wa.me/2349079404750", "_blank")} className="social-media2"><WhatsAppIcon/></button>
    </div>
  </div>
  <div className="child-apart2">
      <img src='./assets/delivery-removebg-preview.png' alt="_delivery.man" className="apart-img"/>
  </div>
 </div>
 </div>
</main>
    
          
    
        </div>
        )
}

export default Home;
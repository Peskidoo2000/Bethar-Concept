import React, {useContext} from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from './Productcontext';


const Category =() =>{

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
        displaySelectedOverall,
        productState, 
        updateProductState, 
        fallbackForCategory,
        } = useContext(ProductContext);
  
return(
    <div> 
       <p className='overall-category'>Poduct Category </p>

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
    {displaySelectedOverall.map((item, index) => {
       const product = productState.find((p) => p.id === item.objectId);
       return (
    <Grid item sm={2} md={4} key={item.id}>
        <Item className ="product-card">
          <CardMedia
                sx={{ height: 80 }}
                image={item?.Image || fallbackForCategory?.[index % fallbackForCategory?.length]?.img}
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
          className={product?.buttonClass || "add-button"}
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
)
}

 export default Category
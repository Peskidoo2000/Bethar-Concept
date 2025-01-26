import React, {useState, useEffect, useContext} from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import { ProductContext } from './Productcontext';

const Meat =() =>{
    const [displayCategory, setDisplayCategory] = useState([]);

    const category = "Meat";
    
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
        filterProductsByCategory,
        productState, 
        updateProductState, 
        fallbackForCategory,
        fallBackImages
        } = useContext(ProductContext);


        useEffect(() => {
            const filterBySelection = filterProductsByCategory(category)
            if (filterBySelection.length === 0) {
              setDisplayCategory(fallBackImages[category] || []);
            } else {
                setDisplayCategory(filterBySelection);
            }
          }, [fallBackImages, filterProductsByCategory]);

return(
    <div> 

<div className="parent-apart container-fluid">
  <div className="cover">
  <div className="child-apart1">
    <p className="sub-child-apart1"> Stay Home and Get all your Essentials from Our Market</p>
  </div>
  <div className="child-apart2">
      <img src='./assets/delivery-removebg-preview.png' alt="_delivery.man" className="apart-img"/>
  </div>
 </div>
 </div>

      <p className='overall-category'>Bethar Meat Product </p>
        <Grid container spaing ={2} className={"display-selected"}>
    {displayCategory.map((item, index) => {
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
        </div>
)
}

 export default Meat
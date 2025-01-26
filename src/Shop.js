import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled} from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; 
import { ProductContext } from './Productcontext';


const Shop =() =>{
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
        productState, 
        updateProductState, 
        fallbackForCategory,
        displayProductOverall,
        } = useContext(ProductContext);

return(
    <div className="shop"> 
    <p className='shop-overall'>SHOP YOUR FAVORITE PRODUCT WITH EASE </p>

    <div className="product-display">
  {displayProductOverall.map((item, index) => {
    const product = productState.find((p) => p.id === item.objectId);
    return (
    <Item key={item.id} className="product-card"> 
      <CardMedia
        sx={{ height: 60 }}
        image={item?.Image || fallbackForCategory?.[index % fallbackForCategory?.length]?.img}
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
     );
})}
</div>
    </div>
)
}

export default Shop
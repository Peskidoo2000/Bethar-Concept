import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';


export const Aside1=()=>{
       return(
        <aside>
        <Link to="/" className="aside2-links"> Get Started</Link>
       </aside>
    )
}

export const Aside2 = ()=>{
    const Item = styled('div')(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
    }));

    return(
        <aside>
        <div className="parent-item">
          <Item className="item-aside">
          <Link to ="/seafoods" className="aside-linkers"> Sea foods</Link>
          <img src="./assets/sea_foods-removebg-preview.png"
           alt="sea foods"
           className='listed-items'/>
            </Item>
          <Item className="item-aside">
          <Link to ="/vegetables" className="aside-linkers"> Dried Veggies</Link>
          <img src="./assets/vegetable-removebg-preview.png"
           alt="dried vegies"
           className='listed-items'/>
            </Item>
          <Item className="item-aside">
          <Link to ="/snacks" className="aside-linkers"> Snacks</Link>
          <img src="./assets/snacks-removebg-preview.png"
           alt="snacks"
           className='listed-items'/>
            </Item>
            <Item className="item-aside">
          <Link to ="/grain" className="aside-linkers"> Grain</Link>
          <img src="./assets/Garri Ijebu.jpg"
           alt="Garri"
           className='listed-items'/>
            </Item>
            <Item className="item-aside">
          <Link to ="/meat" className="aside-linkers"> Meat</Link>
          <img src="./assets/meats-removebg-preview.png"
           alt="Meat"
           className='listed-items'/>
            </Item>
            <Item className="item-aside">
          <Link to ="/flour" className="aside-linkers"> Flour</Link>
          <img src="./assets/flour-removebg-preview.png"
           alt="Flour"
           className='listed-items'/>
            </Item>
            <Item className="see-more1">
              <Link to ="./category" className="aside-linkers">
            <span className='see-more2'>See More</span> <br/> <span className="arrow"> → </span>
            </Link>
            </Item>
          </div>
</aside>
    )
}

export const Aside3 =()=>{
    return(
       <aside>
        <Link to='/category' className='see-links'><span className='items'>See More</span>  <span className="arrow-2"> → </span></Link>
       </aside>
    )
}

export const Aside4 =()=>{
  return(
     <aside>
      <Link to='/shop' className='see-links'><span className='items'>Visit all stores</span>  <span className="arrow-2"> → </span></Link>
     </aside>
  )
}

export const Aside5 = ()=>{
  return(
    <aside>
       <ul className="nav flex-column">
          <li className="nav-item mb-2 for-footer"><Link to ="/seafoods" className="nav-link p-0 text-body-secondary"> Sea foods</Link></li>
          <li className="nav-item mb-2 for-footer"> <Link to ="/vegetables" className="nav-link p-0 text-body-secondary"> Dried Veggies</Link></li>
          <li className="nav-item mb-2 for-footer"><Link to ="/grain" className="nav-link p-0 text-body-secondary"> Grain</Link></li>
          <li className="nav-item mb-2 for-footer"><Link to ="/meat" className="nav-link p-0 text-body-secondary"> Meat</Link></li>
          <li className="nav-item mb-2 for-footer"><Link to ="/flour" className="nav-link p-0 text-body-secondary"> Flour</Link></li>
          <li className="nav-item mb-2 for-footer"><Link to ="/snacks" className="nav-link p-0 text-body-secondary"> Snacks</Link></li>
          <li className="nav-item mb-2 for-footer"><Link to ="/" className="nav-link p-0 text-body-secondary"> Home</Link></li>
        </ul> 
    </aside>
  )
}


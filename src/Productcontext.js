// productcontext.js
import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import Backendless from './Backendless';
import { Description } from '@mui/icons-material';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Sea foods');
  const [displayProduct, setDisplayProduct] = useState([]);
  const [displayProductOverall, setDisplayProductOverall] = useState([]);
  const [productState, setProductState] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [displaySelected, setDisplaySelected]  = useState([]);
  const [displaySelectedOverall, setDisplaySelectedOverall] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  
  const fallBackImages = useMemo(() => ({
    Baseless:[
            {name:"coco", img:"./assets/coco.jpg", price:"200", quantity: "30"},
            {name:"cashew nuts", img:"./assets/cashewnut.jpg", price:"200", quantity: "30"},
            {name:"Dried Ginger", img:"./assets/Dried Split Ginger.jpg", price:"200", quantity: "30"},
            {name:"kolanut", img:"./assets/kolanut.jpeg", price:"200", quantity: "30"},
            {name:"garlic", img:"./assets/garlic.jpeg", price:"200", quantity: "30"}
    ],
    "Sea foods":[
           {name:"cat fish", img:"/assets/cat fish.jpeg", price:"200", quantity: "30"},
            {name:"cray fish", img:"./assets/crayfish.jpg", price:"200", quantity: "30"},
           {name:"croaker fish", img: "./assets/croaker fish.jpg", price:"200", quantity: "30"},
            {name:"hake fish", img:"./assets/hake fish.jpeg", price:"200", quantity: "30"}
    ],
    Flour:[
     {name:"cassava flour", img:"./assets/cassava flour.jpeg", price:"200", quantity: "30"},
     {name: "semovita", img:"./assets/semovita.jpeg", price:"200", quantity: "30"},
      {name:"fufu Powder", img:"./assets/fufu powder.jpg", price:"200", quantity: "30"},
      {name:"Garri", img:"./assets/Garri Ijebu.jpeg", price:"200", quantity: "30"},
     {name: "Poundo Yam", img:"./assets/poundo yam flour.jpeg", price:"200", quantity: "30"}
    ],
    Meat:[
     {name:"cow meat", img:"./assets/cow meat.jpg", price:"200", quantity: "30"},
     {name:"Goat meat", img: "./assets/Goat meat.jpg", price:"200", quantity: "30"},
     {name:"foxtail", img: "./assets/foxtail.jpeg", price:"200", quantity: "30"},
      {name:"kilishi", img:"./assets/kilishi.jpeg", price:"200", quantity: "30"},
     {name:"Ponmo", img: "./assets/ponmo.jpeg", price:"200", quantity: "30"}
    ],
   "Dried Veggies":[
     {name:"Ewedu", img: "./assets/ewedu.jpeg", price:"200", quantity: "30"},
     {name:"Utozi", img: "./assets/utazi.jpeg", price:"200", quantity: "30"},
    {name:"Uziza", img:  "./assets/uziza.jpeg", price:"200", quantity: "30"},
     {name:"Spinach", img: "./assets/spinach.jpg", price:"200", quantity: "30"},
    ],
    Grain:[
      {name:"Garri", img:"./assets/Garri Ijebu.jpg", price:"200", quantity: "30"},
     {name:"Ofada Rice", img: "./assets/Ofada Rice.jpg", price:"200", quantity: "30"},
    ],
    Snacks:[
     {name:"Chin chin", img: "./assets/chinchin.jpeg", price:"200", quantity: "30"},
      {name:"Kulikuli", img:"./assets/kulikuli.jpeg", price:"200", quantity: "30"},
      {name:"Plantain Chips", img:"./assets/plantain chips.jpeg", price:"200", quantity: "30"},
     {name:"Groundnut", img: "./assets/groundnut.jpeg", price:"200", quantity: "30"},
    ],
  }), []);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      const queryBuilder = Backendless.DataQueryBuilder.create();
      queryBuilder.setPageSize(100);
      try {
        const productsData = await Backendless.Data.of('Products').find(queryBuilder);
        if (productsData) {
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

 
  const searchProduct = async (query)=>{
    if (query.trim() === "") {
      console.log("Search query is empty. Fetching default product data...");
      
     
      try {
        const defaultProducts = await Backendless.Data.of("Products").find();
        setProducts(defaultProducts);
      } catch (error) {
        console.error("Error fetching default product data", error);
      }
      return;
    }

    console.log(`Searching for: ${searchQuery}`);

    const whereClause = `Name LIKE '%${searchQuery}%' OR Description LIKE '%${searchQuery}%'`;

    const queryBuilder =Backendless.DataQueryBuilder.create();
    queryBuilder.setWhereClause(whereClause);
    queryBuilder.setPageSize(20);

try{
  const searchResult =  await Backendless.Data.of("Products").find(queryBuilder)
  if (searchResult.length > 0) {
    setProducts(searchResult);
  } else {
    setProducts([]);
    console.warn("No search result found");
  } 
}
 catch(error){
  console.error('error searchin product', error);
  return [];
}

  }

  
  // Product Filtering
  const filterProductsByCategory = useCallback((category) => {
    return products.filter((product) => product.Category === category);
  }, [products]);
  

  
  useEffect(() => {
    const filterBySelection = filterProductsByCategory(selectedCategory)
    if (filterBySelection.length === 0) {
      setDisplaySelected(fallBackImages[selectedCategory] || []);
    } else {
      setDisplaySelected(filterBySelection.slice(0, 4));
    }
  }, [selectedCategory, fallBackImages, filterProductsByCategory]);


  useEffect(() => {
    const filterBySelection = filterProductsByCategory(selectedCategory)
    if (filterBySelection.length === 0) {
      setDisplaySelectedOverall(fallBackImages[selectedCategory] || []);
    } else {
      setDisplaySelectedOverall(filterBySelection);
    }
  }, [selectedCategory, fallBackImages, filterProductsByCategory]);
  


useEffect(() => {
  const initialProductState = products.map((product) => ({
    id:product.objectId,
    name:product.Name,
    price:product.Price,
    description: product.Description,
    quantity: 0,
    display: "+",
    buttonClass: "add-button",
  }));
  setProductState(initialProductState);
}, [products]);

 


const updateProductState = (id, action) => {
  setProductState((prevState) =>
    prevState.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: action === "increment" ? product.quantity + 1 : Math.max(0, product.quantity - 1),
            display:
              action === "increment"
                ? `+ ${product.quantity + 1}`
                : product.quantity - 1 === 0
                ? "+"
                : `- ${product.quantity - 1} +`,
          }
        : product
    )
  );

  // Update the Cart State
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === id);
    const currentProduct = productState.find((product) => product.id === id);

    if (action === "increment") {
      if (existingProduct) {
        // Update existing product quantity
        return prevCart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * currentProduct.price,
              }
            : item
        );
      } else {
        // Add new product to the cart
        return [...prevCart, { ...currentProduct, quantity: 1, total: currentProduct.price }];
      }
    } else {
      if (existingProduct && existingProduct.quantity > 1) {
        // Decrease product quantity
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * currentProduct.price }
            : item
        );
      } else {
      
        return prevCart.filter((item) => item.id !== id);
      }
    }
  });
};


 

useEffect(() => {
  const totalItems = productState.reduce((sum, product) => sum + product.quantity, 0);
  setCartCount(totalItems);
}, [productState]);



  

  useEffect(()=>{    
    const timer = setTimeout(()=>{
      const filterBySelection = filterProductsByCategory(selectedCategory)
      setDisplaySelected(filterBySelection.slice(0, 4));     
    }, 1000)
    return ()=> clearTimeout(timer)
  }, [selectedCategory, filterProductsByCategory])
  
  const getFallbackImages =(category)=>{
    const images = fallBackImages[category] || [];
    return images.length > 0 ? images.slice(-4) : [];
  }

  const fallbackForCategory = getFallbackImages(selectedCategory);

const flattenedProducts = Object.values(displayProduct).flat(); // Flatten the object of arrays
const slicedProducts = flattenedProducts.slice(0, 10); // Take only the first 10

// Add fallback images to products
const productsWithFallback = useMemo(() => {
  return slicedProducts.map((item, index) => ({
    ...item,
    Image: item.Image || fallbackForCategory[index % fallbackForCategory.length]?.img || '/assets/default.jpg',
  }));
}, [slicedProducts]);


useEffect(() => {
  if (products.length === 0) {
    setDisplayProduct(productsWithFallback || []);
  } else {
    setDisplayProduct(products.slice(0, 10));
  }
}, [products]);  



useEffect(() => {
  if (products.length === 0) {
    setDisplayProductOverall(productsWithFallback || []);
  } else {
    setDisplayProductOverall(products);
  }
}, [products])

  return (
    
    <ProductContext.Provider value={{ fallBackImages, filterProductsByCategory, searchProduct, searchQuery, setSearchQuery, cart, displayProductOverall, displaySelectedOverall, products, selectedCategory, setSelectedCategory, displayProduct, productState, updateProductState, cartCount, displaySelected, }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };

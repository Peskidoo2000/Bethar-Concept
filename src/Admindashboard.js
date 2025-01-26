import React, {useState, useEffect} from "react";
import Backendless from "backendless";

const Admindashboard = ()=>{
    const [products, setproducts] = useState([]);
    const[selected, setSelected] = useState(null);

  
    useEffect(()=>{
        const fetchProduct = async () =>{
        const productData = await Backendless.Data.of('Products').find();
        if(productData){
        setproducts(productData)
        } else{
            console.log("faillure to fetch data for admin")
        }
        }
        fetchProduct()
    }, [])

    const selectedData = (product)=>{
        setSelected(product)
    }

    const saveSelected = async () =>{
        try{
            await Backendless.Data.of('Products').save(selected);
            alert("products save successfully")
        }
        catch(error){
            console.log("unable to save product", error)
        }

    }
return (
    <div>
         <p>I am Admin Dahboard </p>

         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {products.map( (product) => (
                    <tr key = {product.objectId}>
                        <td> {product.Name} </td>
                        <td> {product.Price}</td>
                        <td> {product.Description}</td>
                        <td> <button onClick={()=> selectedData(product)}> Edit</button></td>
                    </tr>
                ))}
            </tbody>
         </table>

         {selected && (
            <div>
                <h3> Edit Product</h3>
                <input 
                type="text"
                value={selected.Name}
                onChange={(e) => setSelected({...selected, Name: e.target.value})}
            />

                <input 
                type="text"
                value={selected.Price}
                onChange={(e) => setSelected({...selected, Price: e.target.value})}
            />

            <button onClick={saveSelected}> Save</button>
            <button onClick={()=> setSelected(null)}> Cancel</button>
            </div>
            
         )
         }
    </div>
)
}

export default Admindashboard;
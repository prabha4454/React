import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import { useEffect } from "react"
import {Product} from "./components/Product"
import {Cart} from "./components/Cart"
import {Upload} from "./components/Upload"
import { ProductList } from './components/ProductList';
import Portfolio from './components/Portfolio';

/* import { Header } from "./components/header";

 */
function App() {

  const [productData , setProductData] = useState(
    { 
      name :'',
      pimg : null,
      price : '',
      description : ''

    }
  );
  const [cartData , setCartData] = useState(
    {
      name:'',
      pimg:'',
      price:''

    }
  );
  const [total , setTotal] = useState(0);

  const [products , setProducts] = useState([]);
  const [cartItems , setCart] = useState([]);

  
/* to handdle form inputs */

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setProductData({...productData , [name]: value});
  console.log(productData);
  };
/* to handle input file */

const handleFileChange = (e) => {

setProductData({...productData , pimg : e.target.files[0]});
};
  

  /* to fetch cart details  */

  const cartList = async()=>{
    try{
    const response = await fetch('http://localhost:5000/cart')
    const data = await response.json();
    setCart(data);
    }
    catch{
      console.log('error')
      };
    };

  /* for useeffect */

  useEffect(() => {
    console.log("use effect is called");
    productList();
    cartList();
    
    }, []);

    


/* for add to cart */

const handleAddToCart = async (id) => {
  try{
    const response = await fetch(`http://localhost:5000/addToCart/${id}`, {
      method: 'POST',
     
    });

    const result =  await response.json();
  
    productList();
    cartList();
    console.log(result)
  
  }
  catch(err){
    console.log(err);
  }
 

}


/* to upload product data */
  const handleProductUpload = async (e) => {
    e.preventDefault();

    let formDataToSend = new FormData();
    formDataToSend.append("name", productData.name);
    formDataToSend.append("price", productData.price);
    formDataToSend.append("description", productData.description);
    formDataToSend.append("pimg", productData.pimg);
 

    
    try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          
          body:formDataToSend
        });

      const result = response.json();

      setProductData({
        name :'',
      pimg : null ,
      price : '',
      description : ''
      });
      productList();
      cartList();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  
  /* to fetch products details */

  const productList = async()=>{
    try{
      const response = await fetch('http://localhost:5000/products',)
      const data = await response.json();
      setProducts(data);
    }
catch{
  console.log('error')
}
    }


    /* for handle delete product and cart */

    const handleDeleteProduct = async(id) => {
      try {
const response= await  fetch(`http://localhost:5000/product/${id}`,{
          method:"DELETE"
        }) 
        const result = await response.json();
        console.log(result);
        productList();
      } catch (error) {
        console.log(error)
      }
    }


    const handleDeleteCart = async(id) => {
      try {
       const response = await fetch(`http://localhost:5000/cart/${id}`, {
          method:"DELETE"
        });

        const result = await response.json();
        productList();
         cartList();
        console.log(result);
       
       
      } catch (error) {
        console.log(error)
      }
    }

  
  return (
    <>

    {/* for header */}
     

      {/* for main */}

      <main>
        <div className="ecommes-site-section overflow-auto row justify-content-between " style={{height:"100vh"}}>
          <div className="products-section col-md-8 overflow-auto " style={{height:"100vh"}}>
          <h1 className='text-center h1 text-danger bg-dark'> PRODUCTS</h1>
           <Product  products={products} handleAddToCart={handleAddToCart} />
          </div>
          <div className="cart-section overflow-auto col-md-6 col-lg-4 d-block border" style={{height:"100vh"}}>
          <h1 className="h1 text-center text-secondary bg-dark "> CART ITEMS</h1>
            <Cart
             cartItems={cartItems}
            handleDelete = {handleDeleteCart}/>
          </div>

        </div>

<div className="row">
  <div className="form-section col-md-6">
    <h1 className="h1 text-center text-secondary bg-dark ">ADD PRODUCTS </h1>
  <Upload 
 upload ={handleProductUpload} 
 productData={productData} 
 handleInputChange = {handleInputChange} 
 handleFileChange ={handleFileChange} />
  </div>

  <div className="products-list col-md-6">
  <h1 className="h1 text-center text-secondary bg-dark ">PRODUCTS DETAILS</h1>
    <ProductList 
    products={products}
    deleteProduct={handleDeleteProduct}
    handleEditProduct=''
    />
  </div>



</div>
        
        <Portfolio></Portfolio>

      
      </main>
    </>
  )
}

export default App

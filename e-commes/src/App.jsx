import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import { useEffect } from "react"
import {Product} from "./components/Product"
import {Cart} from "./components/Cart"
import {Upload} from "./components/Upload"

/* import { Header } from "./components/header";

 */
function App() {

  const [productData , setProductData] = useState(
    { 
      name :'',
      pimg : '',
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

const handleAddToCart = async (product) => {
  try{
    const response = await fetch('http://localhost:5000/cart', {
      method: 'POST',
      body: product
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

    /* let formDataToSend = new FormData();
    formDataToSend.append("fname", formData.fname);
    formDataToSend.append("lname", formData.lname);
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
 */
    
    try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData),
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
      const response = await fetch('http://localhost:5000/products')
      const data = await response.json();
      setProducts(data);
    }
catch{
  console.log('error')
}
    }


  
  return (
    <>

    {/* for header */}
     

      {/* for main */}

      <main>
        <div className="ecommes-site-section row justify-content-between" style={{height:"100vh"}}>
          <div className="products-section col-md-6  ">
          <h1 className='text-center h1 text-danger bg-dark'> PRODUCTS</h1>
           <Product  products={products} handleAddToCart={handleAddToCart} />
          </div>
          <div className="cart-section col-md-6 col-lg-4">
          <h1 className="h1 text-center text-secondary bg-dark "> CART ITEMS</h1>
            <Cart cart={cartItems}></Cart>
          </div>

        </div>

<div className="row">
<Upload upload ={handleProductUpload} productData={productData} handleInputChange = {handleInputChange} handleFileChange ={handleFileChange} />
</div>
        

      
      </main>
    </>
  )
}

export default App

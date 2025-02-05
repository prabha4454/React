import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"
import { useEffect } from "react"
import {Product} from "./components/Product"
import {Cart} from "./components/Cart"
import {Upload} from "./components/Upload"
import { ProductList } from './components/ProductList';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

/* import { Header } from "./components/header";

 */
function App() {

  
  const [cartData , setCartData] = useState(
    {
      name:'',
      pimg:'',
      price:''

    }
  );
  const [total , setTotal] = useState(0);

  
  const [cartItems , setCart] = useState([]);

  
/* to handdle form inputs */


/* to handle input file */


  

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
   
    cartList();
    
    }, []);

    


/* for add to cart */

const handleAddToCart = async (id) => {
  try{
    const response = await fetch(`http://localhost:5000/addToCart/${id}`, {
      method: 'POST',
     
    });

    const result =  await response.json();
  
  
    cartList();
    console.log(result)
  
  }
  catch(err){
    console.log(err);
  }
 

}


/* to upload product data */
  
  
  /* to fetch products details */

  /* const ProductsHome = ()=>{ */
    
      /* const response = await fetch('http://localhost:5000/products',)
      const data = await response.json(); */
      /* const {data , error , isloading } = useQuery('products', async ()=>{
        const response = await axios.get('http://localhost:5000/products');
        return response.data

      })
    */
/* return(
  <>
  
   <Product  products={data} handleAddToCart={handleAddToCart} />

  
          </>
)
    } */


    /* for handle delete product and cart */

    


    const handleDeleteCart = async(id) => {
      try {
       const response = await fetch(`http://localhost:5000/cart/${id}`, {
          method:"DELETE"
        });

        const result = await response.json();
    
         cartList();
        console.log(result);
       
       
      } catch (error) {
        console.log(error)
      }
    }

    const queryClient = new QueryClient()
  return (
    <>

    {/* for header */}
     

      {/* for main */}

      {/* <main>
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
    editProduct=''
    />
  </div>



</div>
        
        <Portfolio></Portfolio>

      
      </main> */}

<Router>
  <Routes>
    <Route path="/" element={<QueryClientProvider client={queryClient }><Product handleAddToCart={handleAddToCart} /></QueryClientProvider>} />

          <Route path='/cart' element={<div className="cart-section ">
          <h1 className="h1 text-center text-secondary bg-dark "> CART ITEMS</h1>
            <Cart
             cartItems={cartItems}
            handleDelete = {handleDeleteCart}/>
          </div>} />

          <Route path='/add-products' element={<Upload />} />

          <Route path='/products-list' element={<QueryClientProvider client={queryClient }><ProductList 

    
    /> </QueryClientProvider>}/>
  </Routes>
</Router>

    </>
  )
}

export default App

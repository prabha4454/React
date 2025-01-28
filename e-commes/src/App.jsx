import { useState } from "react"
import { useEffect } from "react"

import { Header } from "./components/header";


function App() {

  const [product , setProduct] = useState(
    { 
      name :'',
      pimg : '',
      price : '',
      description : ''

    }
  );
  const [cart , setCart] = useState(
    {
      name:'',
      pimg:'',
      price:''

    }
  );
  const [total , setTotal] = useState(0);
 


  
  return (
    <>
      <Header></Header>
    </>
  )
}

export default App

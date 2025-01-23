
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.compat.css"
import { Home } from "./components/home"
import { Tools } from "./components/Tools"
import { About } from "./components/about"
import Header from "./partials/Header"
import {Footer} from "./partials/Footer"
import { Service } from './components/service';
import {Items} from './components/items';
import Container from "react-bootstrap/Container"
import { Box } from './components/box';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./app.css"
import { Whyus } from './components/Whyus';
import { Contact } from './Contact';
function App() {


  return (
    <>

<Header />

    
      <Home />



      {/* This for tools section */}
      <div className="container-fluid tools-section">
        <Container>
          <Box>
            <Tools style="tools col-md-6" img="/images/t-img-1.png" >
            
            </Tools>
            <Tools style="tools col-md-6" img="/images/t-img-2.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-3.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-4.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-5.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-6.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-7.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-8.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-9.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-10.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-11.png" ></Tools>
            <Tools style="tools col-md-6" img="/images/t-img-12.png" ></Tools>

          </Box>



        </Container>

      </div>
      {/* tools section end */}

      {/* this is for about section */}

      <About />

      {/* ---------end------------ */}

      {/* This for Services section */}
      <div className='service-section'>

      <Container>

<Service>

  <Items img="/images/app-dev.png" title="Mobile Applications">
  We are experts in developing and designing both native and hybrid mobile applications.
  </Items>

  <Items img="/images/web-app.png" title="Web Applications">
  Our innovative technology-driven approach helps you implement customized integrated systems for all your business needs.
</Items>

  <Items img="/images/app-dev.png" title="Desktop Applications">
  We are specialized in desktop application develoapment using VB .NET & C# .NET
  </Items>

  <Items img="/images/custom-dev.png" title="Custom Devlopment">
  We can deliver tailored custom solutions based on your requirements
  </Items>

  <Items img="/images/web-des.jpg" title="Web Designing & Digital Marketing">
  We can create Professional and beautiful websites that can help your bussiness to grow, We are also providing digitial marketing services to help grow and get noticed by potential cutomers for your bussiness.
  </Items>

  <Items img="/images/cloud-ser.jpg" title="Cloud Services Hardware & Networking">
  We are providing Hardware,networking and cloud infrastructure serivces,we will help your compnay to maintain the necessary IT-Infra to operate your bussiness smoothly and help you move the services to cloud
  </Items>

</Service>

</Container>
</div>

      {/* ------------service end------------- */}

{/* This for why you need to choose us */}

<div className="why-us-section">
 
    <Whyus/>
 
</div>

{/* ------------end------------- */}

{/* contact section */}

<div className="contact-section bg-light container-fluid">
<Container>
 <Contact></Contact>
</Container>
</div>


{/* ----------end----------- */}
     

<Footer></Footer>



    </>
  )
}

export default App

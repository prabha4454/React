
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Survelliance from './components/Survelliance';
import Smartwatch from './components/Smartwatch';
import Home from "./components/Home";
import About  from './About';
import Login from './components/login';
import Register from './components/Register';
import Wel from './components/wel';
import Footer from './components/Footer';
import Navebar from './components/Navebar';
import Buypage from './components/Buypage';
import Bpb from './components/Bpb';
import Bpc from './components/Bpc';
import Bpd from './components/Bpd';
import Admin from './components/Admin'; 
import Adress from './components/Adress';
import Admedit from './components/Admedit';
import Edit from './components/Edit';
import Edit1 from './components/Edit1';




function App() {

  

  return (
    <>
    <link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
  crossorigin="anonymous"
/>

    <Router>

      <Routes>

      <Route exact path="/" element={<Home />}/>
      <Route exact path="/About" element={<About />}/>
    <Route exact path="/Survelliance" element={<Survelliance />}/> 
    <Route exact path="/Smartwatch" element={<Smartwatch />}/>
    <Route exact path="/Login" element={<Login />}/>
    <Route exact path="/Register" element={<Register />}/>
    <Route exact path="/Wel" element={<Wel /> } />
    <Route exact path="/Footer" elememnt={<Footer />}/>
    <Route exact path='/Navebar' element={<Navebar />}/>
    <Route exact path='/Buypage' element={<Buypage />}/>
    <Route exact path='/Bpb' element={<Bpb />}/>
    <Route exact path='/Bpc' element={<Bpc />}/>
    <Route exact path='/Bpd' element={<Bpd />}/>
    <Route exact  path='/Admin' element={<Admin />} />
    <Route exact path='/Adress' element={<Adress />}/>
    <Route exact path='/Admedit' element={<Admedit />}/>
    <Route exact path='/Edit' element={<Edit />} />
    <Route exact path='//edit/:id' element={<Edit1 />} />

 
      <Route path="*" element={<Navigate to="/" />}/>

      </Routes>
 
    </Router>
    </>
  );
}

export default App;

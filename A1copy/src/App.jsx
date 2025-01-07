
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/home"
import { Tools } from "./components/Tools"
import { About } from "./components/about"
import Header from "./partials/Header"
import {Footer} from "./partials/Footer"

import Container from "react-bootstrap/Container"
import { Box } from './components/box';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./app.css"
function App() {


  return (
    <>

    <Header>

    </Header>
      <Home />


      {/* This for tools section */}
      <div className="container-fluid tools-section">
        <Container>
          <Box>
            <Tools style="tools col-md-6" img="/images/t-img-1.png" ></Tools>
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



      {/* ------------service end------------- */}

      <Container>

      </Container>

<Footer></Footer>



    </>
  )
}

export default App

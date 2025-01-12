
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from "react-bootstrap/Container"
import Studlist from './Studlist';
import { useState } from 'react';

function App() {

const [studlist,setList]=useState([
  {
    id:1,
    name:"prabhaharan",
    reg:'2021-2025',
    status:'studing',
    dep:"CSE"
  },
  {
    id:2,
    name:"kalaimani",
    reg:'2021-2025',
    status:'studing',
    dep:"CSE"
  },
  {
    id:3,
    name:"Niyas",
    reg:'2021-2025',
    status:'studing',
    dep:"CSE"
  }
]);



  return (
    <>
      <Container>
        <Studlist  list={studlist} setList={setList}/>
        </Container>
    </>
  )
}

export default App

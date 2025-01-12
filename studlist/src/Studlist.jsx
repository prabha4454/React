
import PropTypes from "prop-types"
import Td from "./components/Td"
const Studlist = (props) => {
  
  const {list,setList}=props

  const edit=(id,e)=>{
const stetlist=list.map((li)=> li.id===id?{...li,dep:e.target.value}:li)
setList(stetlist)
localStorage.setItem("stulList",JSON.stringify(stetlist))
  }
  const del=(id)=>{

  }
  return (
    <>

<div className="table-responsive mt-5 w-100 mb-5">
        <table className="table table-striped table-sm w-75 mx-auto">

            <thead className='table-dark'>
                <tr className='align-middle text-center '>
                <th className='text-danger'>S/No</th>
                <th>Student Name</th>
                <th>Regulation</th>
                <th>Status</th>
                <th>Department</th>
                <th>Action</th>
            
                </tr>
                
            </thead>

            <tbody>
       
            {list.map((items,index)=>(
     
    <Td item={items} index={index} edit={(e)=>edit(items.id,e)} del={(e)=>del(items.id)} ></Td>



    

    
   ))}
   
     
                
            </tbody>
{list.map((li)=>(
  <li>{li.dep}</li>
))}
        </table>
    </div>
    </>
   
  )
}

/* Items.prototype={
  list:PropTypes.arrayOf(
PropTypes.shape({
      id:PropTypes.number.isRequired,
      name:PropTypes.string.isRequired,
      quant:PropTypes.number.isRequired,
      price:PropTypes.number.isRequired
      
    })
  )
}
 */
export default Studlist;
import React from 'react'
import { useState } from 'react'
import { useEffect} from 'react'

export const UserList = () => {

    const [users, setUsers] = useState([])
    



  return (
 <>

 <div className="table-responsive">
    <table className='table-dark '>
        <tr>
            <th>S/NO</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>DOB</th>
            <th>GENDER</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACTION</th>
        </tr>

    </table>
 </div>
 </>
  )
}

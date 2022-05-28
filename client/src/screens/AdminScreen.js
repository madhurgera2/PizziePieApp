import React, { useEffect } from 'react'
import './admin.css'
import { useSelector } from "react-redux";
// import {Row ,Col,Container} from 'react-bootstrap'


const AdminScreen=()=> {
    const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
    return(
        <div>
            
            <p>admin</p>
            <p>admin</p>
            {/* <h1>
                Admin Panel
            </h1> */}
            <div className='Navbar'>
                <button onClick={()=>  window.location.href = "/admin/userlist"}>USERS</button>
                <button onClick={()=>  window.location.href = "/admin/pizzalist"}>PIZZAS</button>
                <button onClick={()=>  window.location.href = "/admin/addnewpizza"}>ADD NEW PIZZA</button>
                <button onClick={()=>  window.location.href = "/admin/orderlist"}>ALL ORDERS</button>
            </div>

            
        </div>
    )
}
export default AdminScreen
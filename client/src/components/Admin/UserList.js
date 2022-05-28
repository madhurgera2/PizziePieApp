import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminScreen from '../../screens/AdminScreen';
import '../../screens/admin.css'
import { deleteUser, getAllUsers } from "../../actions/userActions";
import { Table } from "react-bootstrap";
import { Loader } from '../Loader';
import { Error } from '../Error';
const UserList=()=>{

const userState= useSelector(state=>state.getAllUsersReducer)
const {loading ,error,users}=userState

const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])
    return(
        <div>
            <AdminScreen/>
            <h1 className="inline">User List</h1>
            

            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Username</th>
      <th>Phonenumber</th>
      <th>Delete User</th>
    </tr>
  </thead>
  <tbody>
  {loading && <Loader/>}
            {error && <Error/>}

            {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.username}</td>
                <td>{user.phonenumber}</td>
                <td><div className="delete-button">
                                    <button className="upbutton" onClick={()=>{dispatch(deleteUser(user._id))} }><i className="fa fa-trash fa-2xl " aria-hidden="true"  ></i></button>
                                </div></td>
                
                </tr>
            ))}
  </tbody>
</Table>
        </div>
    )
}
export default UserList;
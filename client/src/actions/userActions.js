import axios from "axios";
export const registerUser=(user)=> async dispatch=>{

    dispatch({type:'USER_REGISTER_REQUEST'})
    
    try {
        const response=await axios.post('/api/users/register',user)
        dispatch({type:'USER_REGISTER_SUCCESS'})
        console.log(response)
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
    }

}
export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    try {
      const response = await axios.post("/api/users/login", user);
      console.log(response);
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
    } catch (error) {
      dispatch({ type: "USER_LOGIN_FAIL", payload: error });
    }
  };
  export const logoutUser =()=>dispatch=>{
      localStorage.removeItem('currentUser')
  }
export const getAllUsers=()=>async dispatch=>{
    dispatch({type:"GET_USERS_REQUEST"})

    try{
        const response = await axios.get('/api/users/getallusers')
        console.log(response)
        dispatch({type:"GET_USERS_SUCCESS", payload: response.data})
    } catch(error)
    {
        dispatch({type:"GET_USERS_FAILED", payload: error})
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    try {
      await axios.post("/api/users/deleteuser", { userId });
      alert("User Deleted Succss!", "success");
      window.location.href = "/admin/";
      // console.log(res);
    } catch (error) {
        
      alert("Error While Deleteing User");
    }
  };
  
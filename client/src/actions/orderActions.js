import axios from "axios";
export const placeOrder = (token, total)=> async(dispatch,getState)=>{
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser= getState().loginUserReducer.currentUser
    const cartItems= getState().cartReducer.cartItems
    try {
        const response = await axios.post('/api/orders/placeorder',{token,total, currentUser, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'})
        console.log(response)
    } catch (error) {
        dispatch({type: 'PLACE_ORDER_FAILED'})
        console.log(error)
    }
};
export const getUserOrders=()=>async(dispatch ,getState)=>{
    const currentUser= getState().loginUserReducer.currentUser
    dispatch({type:'USER_ORDER_REQUEST'})
    try {
        const response = await axios.post('/api/orders/getuserorder',{userid:currentUser._id})
        console.log(response);
        dispatch({type:'USER_ORDER_SUCCESS',payload:response.data})
    } catch (error) {
        dispatch({type:'USER_ORDER_FAILED',payload:error})
    }
}
export const getAllOrders=()=>async dispatch=>{
    dispatch({type:"GET_ORDERS_REQUEST"})

    try{
        const response = await axios.get('/api/orders/getallorders')
        console.log(response)
        dispatch({type:"GET_ORDERS_SUCCESS", payload: response.data})
    } catch(error)
    {
        dispatch({type:"GET_ORDERS_FAILED", payload: error})
    }
}
export const deliverOrder = (orderid) => async (dispatch, getState) => {
    // const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
      type: "GET_ALL_ORDER_REQUEST",
    });
    try {
      await axios.post("/api/orders/deliverorder", { orderid });
      alert("Deliverd Success");
      const orders = await axios.get("/api/orders/getallorders");
      dispatch({ type: "GET_ALL_ORDER_SUCCESS", payload: orders.data });
      window.location.href = "/admin/orderlist";
    } catch (error) {
      dispatch({ type: "GET_ALL_ORDER_FAIL", payload: error });
    }
  };
  
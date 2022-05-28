import axios from "axios";
export const getAllPizzas=()=>async dispatch=>{
    dispatch({type:"GET_PIZZAS_REQUEST"})

    try{
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response)
        dispatch({type:"GET_PIZZAS_SUCCESS", payload: response.data})
    } catch(error)
    {
        dispatch({type:"GET_PIZZAS_FAILED", payload: error})
    }
}
export const addPizza=(pizza)=>async dispatch=>{
    dispatch({type:"ADD_PIZZAS_REQUEST"})

    try{
        const response = await axios.post('/api/pizzas/addpizza',{pizza})
        dispatch({type:"ADD_PIZZAS_SUCCESS", payload: response.data})
    } catch(error)
    {
        dispatch({type:"ADD_PIZZAS_FAILED", payload: error})
    }
}
export const getPizzaById=(pizzaId)=>async dispatch=>{
    dispatch({type:"GET_PIZZABYID_REQUEST"})

    try{
        const response = await axios.post('/api/pizzas/getpizzabyid',{pizzaId})
        dispatch({type:"GET_PIZZABYID_SUCCESS", payload: response.data})
    } catch(error)
    {
        dispatch({type:"GET_PIZZABYID_FAILED", payload: error})
    }
}
export const updatePizza=(updatedpizza)=>async dispatch=>{
    dispatch({type:"UPDATE_PIZZABYID_REQUEST"})

    try{
        const response = await axios.post('/api/pizzas/updatepizza',{updatedpizza})
        dispatch({type:"UPDATE_PIZZABYID_SUCCESS", payload: response.data})
        window.location.href='/admin/pizzalist'
    } catch(error)
    {
        dispatch({type:"UPDATE_PIZZABYID_FAILED", payload: error})
    }
}
export const deletePizza = (pizzaId) => async (dispatch) => {
    try {
      await axios.post("/api/pizzas/deletepizza", { pizzaId });
      alert("Pizza Deleted Succss!", "success");
      window.location.href = "/admin/pizzalist";
      // console.log(res);
    } catch (error) {
        
      alert("Error While Deleteing Pizza");
    }
  };
  

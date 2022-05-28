export const getAllPizzasReducer=(state={pizzas : []},action)=>{
    switch(action.type)
    {
        case "GET_PIZZAS_REQUEST": return{
            loading:true,
            ...state
        }
        case "GET_PIZZAS_SUCCESS": return{
            loading:false,
            pizzas: action.payload
        }
        case "GET_PIZZAS_FAILED": return{
            pizzas: action.payload,
            loading:false
        }
        default: return state
    }
}
export const addPizzasReducer=(state={},action)=>{
    switch(action.type)
    {
        case "ADD_PIZZAS_REQUEST": return{
            loading:true,
            ...state
        }
        case "ADD_PIZZAS_SUCCESS": return{
            loading:false,
            pizzas: action.payload
        }
        case "ADD_PIZZAS_FAILED": return{
            pizzas: action.payload,
            loading:false
        }
        default: return state
    }
}
export const getPizzaByIdReducer=(state={},action)=>{
    switch(action.type)
    {
        case "GET_PIZZABYID_REQUEST": return{
            loading:true,
            ...state
        }
        case "GET_PIZZABYID_SUCCESS": return{
            loading:false,
            pizza: action.payload
        }
        case "GET_PIZZABYID_FAILED": return{
            error: action.payload,
            loading:false
        }
        default: return state
    }
}
export const updatePizzaReducer=(state={},action)=>{
    switch(action.type)
    {
        case "UPDATE_PIZZABYID_REQUEST": return{
            loading:true,
            ...state
        }
        case "UPDATE_PIZZABYID_SUCCESS": return{
            updateloading:false,
            updatesuccess:true
        }
        case "UPDATE_PIZZABYID_FAILED": return{
            updateerror: action.payload,
            updateloading:false
        }
        default: return state
    }
}
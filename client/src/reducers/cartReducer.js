export const cartReducer=(state={ cartItems : []}, action)=>{

    switch(action.type)
    {
        case 'ADD_TO_CART':
         const alreadypresent= state.cartItems.find(item=>item.name===action.payload.name   )   
         if(alreadypresent)
         {
            return{
                ...state,
                cartItems: state.cartItems.map(item=>item.name===action.payload.name ? action.payload :item)
            }
         }
        else{
        return {
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }}
        case "DELETE_FROM_CART" : return{
            ...state,
            cartItems:state.cartItems.filter(item=> item.name!== action.payload.name)
        }
        default: return state
    }
}
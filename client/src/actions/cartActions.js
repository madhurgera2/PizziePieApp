export const addToCart=(pizza, quantity, varient)=>(dispatch, getState)=>{

    var cartItem= {
        name:pizza.name,
        _id:pizza._id,
        image:pizza.img,
        quantity:Number(quantity),
        varient:varient,
        prices:pizza.price,
        price:pizza.price[0][varient]*quantity
    }

    if(cartItem>10)
    {
        alert('Sorry you cannot add more than 10 items')
    }
    
    else{
        if(cartItem.quantity<1)
        {
            dispatch({type:"DELETE_FROM_CART", payload:pizza})
        }
        else{
    dispatch({type:'ADD_TO_CART', payload:cartItem})}}
    const cartItems= getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))



}
export const deleteFromCart=(pizza)=>(dispatch, getState)=>{

    dispatch({type:"DELETE_FROM_CART", payload:pizza})
    const cartItems= getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
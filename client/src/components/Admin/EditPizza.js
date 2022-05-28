import React,{useEffect,useState} from "react";
import AdminScreen from '../../screens/AdminScreen';
import { useDispatch,useSelector } from "react-redux";
import { getPizzaById } from "../../actions/pizzaActions";
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader';
import { Error } from '../Error'; 
import { Success } from '../Success';
import { updatePizza } from "../../actions/pizzaActions"; 
const EditPizza=()=>{
    const [name, setname] = useState("");
    const [link, setlink] = useState("");
    const [sprice, setsprice] = useState("");
    const [mprice, setmprice] = useState("");
    const [lprice, setlprice] = useState("");
    const [category, setcategory] = useState("");


    const {pizzaId}= useParams();
    const dispatch=useDispatch(); 
const getPizzaByState=useSelector(state=>state.getPizzaByIdReducer)
const {error ,pizza}=getPizzaByState
const updatePizzaState=useSelector(state=>state.updatePizzaReducer)
const {updateloading ,updateerror ,updatesuccess}=updatePizzaState

    useEffect(()=>{
       if(pizza){ if(pizza._id===pizzaId){
            setname(pizza.name)
            setcategory(pizza.category)
            setlink(pizza.image)
            setsprice(pizza.prices[0]['Small'])
            setmprice(pizza.prices[0]['Medium'])
            setlprice(pizza.prices[0]['Large'])
        }
        else{
        dispatch(getPizzaById(pizzaId));}}
        else{
            dispatch(getPizzaById(pizzaId));
        }
    }, [pizza, dispatch,pizzaId]);
    const submitForm = (e) => {
        e.preventDefault();
        const updatedpizza = {
            _id:pizzaId,
            name, link,
            prices: {
                Small: sprice,
                Medium: mprice,
                Large: lprice
            }, category
        }
        dispatch(updatePizza(updatedpizza ))
        
    }
    return(
        <div>
            <AdminScreen/>
            <h1>Edit Pizza</h1>
            <div>

                {updateloading && <Loader></Loader>}
                {updateerror && <Error ></Error>}
                
                <div className="loginform">
                    <form method="POST" onSubmit={submitForm}>
                        <input required className="input" type="text" placeholder=" Enter Pizza Name" value={name}
                            onChange={(e) => { setname(e.target.value) }}></input>
                        <input required className="input" type="text" placeholder=" Enter Image-Link" value={link}
                            onChange={(e) => { setlink(e.target.value) }}></input>
                        <input required className="input" type="number" placeholder=" Enter Price of Small varient" value={sprice}
                            onChange={(e) => { setsprice(e.target.value) }}></input>
                        <input required className="input" type="number" placeholder=" Enter Price of Medium varient" value={mprice}
                            onChange={(e) => { setmprice(e.target.value) }}></input>
                        <input required className="input" type="number" placeholder="Enter Price of Large varient" value={lprice} onChange={(e) => { setlprice(e.target.value) }}></input>
                        <input required className="input" type="text" placeholder="category" value={category}
                            onChange={(e) => { setcategory(e.target.value) }}></input>
                        <button type="submit" className="addtocart" >Update</button>
                    </form>
                </div>




            </div>
        </div>
    )
}

export default EditPizza;
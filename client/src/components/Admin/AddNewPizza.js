import React, { useState } from "react";
import AdminScreen from '../../screens/AdminScreen';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { Success } from '../Success';
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../actions/pizzaActions";
const AddNewPizza = () => {
    const [name, setname] = useState("");
    const [link, setlink] = useState("");
    const [sprice, setsprice] = useState("");
    const [mprice, setmprice] = useState("");
    const [lprice, setlprice] = useState("");
    const [category, setcategory] = useState("");

    const dispatch = useDispatch();
    // const addnewpizzastate = useSelector(state => state.AddNewPizzaReducer);
    // const {  success } = addnewpizzastate
    const submitForm = (e) => {
        e.preventDefault();
        const pizza = {
            name, link,
            prices: {
                Small: sprice,
                Medium: mprice,
                Large: lprice
            }, category

        }
        dispatch(addPizza(pizza))
        window.location.href = '/'
    }

    return (
        <div>
            <AdminScreen />
            <h1>Add New Pizza Details</h1>
            <div>

                {/* {loading && <Loader></Loader>}
                {error && <Error ></Error>} */}
                {/* {success && <Success></Success>} */}
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
                        <button type="submit" className="addtocart" >Add</button>
                    </form>
                </div>




            </div>
        </div>
    )
}
export default AddNewPizza;
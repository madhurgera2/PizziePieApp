import React, { useEffect, useState } from "react";
import AdminScreen from '../../screens/AdminScreen';
import { deletePizza, getAllPizzas } from '../../actions/pizzaActions'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../Loader';
import { Error } from '../Error';
import './admincomp.css'
function Card(props) {
    const dispatch=useDispatch();
    return (<div className="dish up">
        <div className="imgdiv">

            <h2 className="dish-name">{props.name}</h2></div>
        <div className="details">
            <div className="imgdiv"><Avatar img={props.img} className='cenimg'/></div>
            <div className='selection'>
                <div >
                    <p className="info">Varients:</p>
                    {props.varients.map(varient => { return (<option value={varient}>{varient}</option>) })}

                </div>
                <div >
                    <p className="info">Price:</p>
                    {props.prices.map(price => { return (<div>{price["Small"]}</div>) })}
                    {props.prices.map(price => { return (<div>{price["Medium"]}</div>) })}
                    {props.prices.map(price => { return (<div>{price["Large"]}</div>) })}

                </div>
                <div>
                    <div className="delete-button1">
                    <Link to={`/admin/editpizza/${props.id}`}>
                                    <button className="upbutton"><i className="fas fa-edit fa-2xl " aria-hidden="true"  ></i></button></Link>
                                    <button className="upbutton" onClick={()=>{dispatch(deletePizza(props.id))}}><i className="fas fa-trash fa-2xl " aria-hidden="true"  ></i></button>
                                </div>
                </div>
            </div>
        </div>





    </div>);
}


// render(<Example />);
function Avatar(props) {
    return <img src={props.img} className="pizza-image" alt="#" />
}
function createcard(pizzadata) {
    return <Card
        key={pizzadata._id}
        id={pizzadata._id}
        name={pizzadata.name}
        img={pizzadata.image}
        varients={pizzadata.varients}
        prices={pizzadata.prices}
    />
}
function Homescreen() {
    const dispatch = useDispatch();

    const pizzasstate = useSelector((state) => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate


    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch])
    return (
        <div>
            <div className="pizzas">
                {loading ? (<Loader />) : error ? (<Error />) :
                    (
                        pizzas.map(createcard)
                    )
                }


            </div>

        </div>

    )
};
const PizzaList = () => {
    return (
        <div>
            <AdminScreen />
            <h1>Pizza List</h1>
            {Homescreen()}
        </div>
    )
}
export default PizzaList;
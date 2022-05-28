import React, { useEffect, useState } from 'react';
import './Homescreen.css'
import { getAllPizzas } from '../actions/pizzaActions'
import { addToCart } from '../actions/cartActions';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
// import { Success } from '../components/Success';

function Card(props) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('Small');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleshow = () => setShow(true);

  const dispatch = useDispatch()
  function Addtocart() {
    
    dispatch(addToCart(props, quantity, varient))
  }



  return (<div className="dish">
    <div onClick={handleshow}>

      <h2 className="dish-name">{props.name}</h2>

      <div className='imagecen'><Avatar img={props.img} /></div>

    </div>

    <div className='var-qty'>
      <p className="info">Varients:</p>
      <p className="info">Quantity:</p>
    </div>

    <div className='selection'>
      <select value={props.varient} onChange={(e) => { setVarient(e.target.value) }}>
        {props.varients.map(varient => { return (<option value={varient}>{varient}</option>) })}
      </select>
      <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
        {[...Array(10).keys()].map((x, i) => {
          return <option value={i + 1}>{i + 1}</option>
        })}
      </select>
    </div>


    <div className='price-add'>
      <p className="price">Price:
        {props.price[0][varient] * quantity}
      </p>
      <button className='addtocart' onClick={Addtocart}>Add +</button>
    </div>


    <Modal show={show}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title className='dish-name'>{props.name}</Modal.Title>
      </Modal.Header>
        {/* <Success success="done"/> */}
      <Modal.Body>
        <img src={props.img} className=' pizza-image imagecen' alt="#"></img>
        <p>{props.name}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className='addtocart ' onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  </div>);
}


// render(<Example />);
function Avatar(props) {
  return <img src={props.img} className="pizza-image" alt="#" />
}
function createcard(pizzadata) {
  return <Card
    key={pizzadata._id}
    name={pizzadata.name}
    img={pizzadata.image}
    varients={pizzadata.varients}
    price={pizzadata.prices}
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
      <div className='pizzas'>
        {loading ? (<Loader/>) : error ? (<Error/>) :
          (
            pizzas.map(createcard)
          )
        }

      </div>

    </div>

  )
};
export default Homescreen;

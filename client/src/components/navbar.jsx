import { React, useEffect, useState } from "react";
import './navbar.css'
import { IoMdCart } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from 'react-redux'
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import { registerUser } from '../actions/userActions'
import { loginUser } from '../actions/userActions'
import { logoutUser } from '../actions/userActions'
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { Success } from '../components/Success';
import {Pay} from '../components/pay' 
function onclickham() {
    const togglebutton = document.querySelector('.hamburger-menu');
    togglebutton.onclick = function () {
        togglebutton.classList.toggle('active')
    }
}


export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleshow = () => setShow(true);
    const [showlogin, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleshow1 = () => setShow1(true);
    const [showregister, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleshow2 = () => setShow2(true);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [address, setaddress] = useState("");
    const [username, setusername] = useState("");

    const [lemail, setlemail] = useState("");
    const [lpassword, setlpassword] = useState("");

    function register() {
        if (password !== cpassword) {
            alert("passwords not matched")
        }
        else {
            const user = {
                name,
                email,
                phonenumber,
                address,
                username,
                password,
            }
            console.log(user);
            dispatch(registerUser(user))
            window.location.href = '/'
        }
    }


    const registerState = useSelector(state => state.registerUserReducer)
    const { error, success, loading } = registerState



    const loginState = useSelector(state => state.loginUserReducer)
    const { error1, success1, loading1 } = loginState
    function login() {
        const user = { lemail, lpassword }
        console.log("logging in")
        dispatch(loginUser(user))
    }


    function logout() {
        dispatch(logoutUser())
        window.location.href = '/'
    }
    const dispatch = useDispatch();
    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems;
    var total = 0

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate

    return (<nav className="main-nav">

        <div className="hamburger-menu">

            <button className="menuicon" onClick={onclickham}> <FaAlignJustify /></button>
            <div className="drop-down">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/orders">My Orders</a></li>
                    <li><a >{currentUser ? <button type="button" className="logoutbutton" onClick={logout}>Logout</button> : <button type="button" className="logoutbutton" onClick={handleshow1}>Login/Register</button>}</a></li>
                </ul>
            </div>


        </div>
        {/* 1st logo */}
        <div className="logo">
            <img src="../Favicon.ico.png" className="logoimg" alt="5"></img>
            <h2>
                <span>P</span>izzie
                <span>P</span>ie
            </h2>
        </div>
        {/* menu links */}
        <div className="menu-link">
            <ul className="menu-desktop">
                <li> <a href="/">Home</a></li>
                <li> <a href="/about">About Us</a></li>
                <li> <a href="/contact">Contact Us</a></li>
            </ul>
        </div>
        {/* login and cart */}
        <div className="login-cart">
            <ul>
                <li><a>
                    {currentUser ? <div class="logoutdropdown">
                        <button class="logoutdropbtn loginbutton">Hi {currentUser.Name}!</button>
                        <div class="logoutdropdown-content">
                           
                            <a href="/orders"><button type="button" className="logoutdropbutton" >My Orders</button></a>
                            <a ><button type="button" className="logoutdropbutton" onClick={logout}>Logout</button></a>
                        </div>
                    </div> : <button className="loginbutton" onClick={handleshow1}>Login/Register</button>}
                </a></li>
                <li><a><button className="cartButton" onClick={handleshow}> <IoMdCart />{cartstate.cartItems.length} </button></a></li>
            </ul>

        </div>


        {/* CART */}




        <div >
            <Modal className="cart-modal" show={show}>
                <Modal.Header closeButton onClick={handleClose} >
                    <Modal.Title className="logo">Cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {cartItems.map((item) => {
                        return (
                            <div className='cart-container'>
                                <div className="item-detail">
                                    <p>{item.name}[{item.varient}]</p>


                                    <p>Price:{item.quantity}×{item.prices[0][item.varient]}={item.price}</p>
                                    <div><span>Quantity:</span>
                                    {/* <button onClick={() => {
                                        dispatch(
                                            addToCart(item, (item.quantity + 1), item.varient)
                                        )
                                    }}
                                        className="plus-minus">+</button> */}
                                    <span className="quan">{item.quantity}</span>
                                    {/* <button onClick={() => { dispatch(addToCart(item, (item.quantity - 1), item.varient)) }} className="plus-minus">-</button> */}
                                    </div>
                                </div>
                                <div className="item-image">
                                    {/* {console.log(item.image)} */}
                                    <img className="cart-image" src={item.image} alt="#"></img>
                                </div>
                                <div className="delete-button">
                                    <button><i className="fa fa-trash fa-2xl" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i></button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}


                </Modal.Body>

                <Modal.Footer className="modal-footer">
                    <p className="cart-total">
                        {cartItems.map((item) => {
                            total = total + item.quantity * item.prices[0][item.varient]
                        })}

                        Total:{total}</p>
                   <Pay total={total}/>
                </Modal.Footer>
            </Modal>




            {/* login */}






            <Modal className="" show={showlogin}>
                <Modal.Header closeButton onClick={handleClose1} >
                    <Modal.Title className="">Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                   
                    <div className="loginform">
                        <form method="get">
                        {loading1 && <Loader></Loader>}
                    {error1 && <Error error='Invalid Login Credentials Try Again'></Error>}
                    {success1 && <Success/>}
                            <input className="input" type="email" placeholder=" Enter E-mail" value={lemail}
                                onChange={(e) => { setlemail(e.target.value) }}></input>
                            <input className="input" type="password" placeholder="Enter Password" value={lpassword}
                                onChange={(e) => setlpassword(e.target.value)}></input>
                            <button type="button" className="addtocart" onClick={() => { login(); handleClose1() }}>Login</button>
                        </form>
                    </div>

                </Modal.Body>

                <Modal.Footer >
                    <div className="loginfooter">
                        Not registered yet <button className="Register-button" onClick={() => { handleClose1(); handleshow2() }}>Register Now</button></div>
                </Modal.Footer>
            </Modal>




            {/* Register */}






            <Modal className="" show={showregister}>
                <Modal.Header closeButton onClick={handleClose2} >
                    <Modal.Title className="">Register</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {loading && <Loader></Loader>}
                    {error && <Error ></Error>}
                    {success && <Success></Success>}
                    <div className="loginform">
                        <form method="POST">
                            <input required className="input" type="text" placeholder=" Enter Name" value={name}
                                onChange={(e) => { setname(e.target.value) }}></input>
                            <input required className="input" type="email" placeholder=" Enter E-mail" value={email}
                                onChange={(e) => { setemail(e.target.value) }}></input>
                            <input required className="input" type="number" placeholder=" Enter Phone Number" value={phonenumber}
                                onChange={(e) => { setphonenumber(e.target.value) }}></input>
                            <input required className="input" type="text" placeholder=" Enter Default Address" value={address}
                                onChange={(e) => { setaddress(e.target.value) }}></input>
                            <input required className="input" type="text" placeholder="Enter Username" value={username} onChange={(e) => { setusername(e.target.value) }}></input>
                            <input required className="input" type="password" placeholder="Enter Password" value={password}
                                onChange={(e) => { setpassword(e.target.value) }}></input>
                            <input required className="input" type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }}></input>
                            <button type="button" className="addtocart" onClick={register}>Register</button>
                        </form>
                    </div>

                </Modal.Body>

                <Modal.Footer >
                    <div className="loginfooter">
                        Already Registered <button className="Register-button" onClick={() => { handleClose2(); handleshow1() }}>Login</button></div>
                </Modal.Footer>
            </Modal>
        </div>
    </nav>)
}

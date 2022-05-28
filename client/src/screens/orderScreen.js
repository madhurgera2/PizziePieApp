import {React, useEffect} from "react";
import './orders.css'
import { getUserOrders } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import {Loader} from '../components/Loader'
import {Error} from '../components/Error'

export const OrderScreen=()=>
{
    const orderState= useSelector(state=>state.getUserOrderReducer);
    const { loading, error, orders } = orderState;
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
    return(
      <>
      <p>hi</p>
      <p>hi</p>
      <h1>My Orders</h1>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {orders &&
        orders.map((order) => (
          
          
            <div className="container">
              <div className="orderdetails">
              <div className="order">
                <h4>Items :</h4>
                {order.orderItems.map((item) => (
                  <h6 key={item.name}>
                    {item.name} [{item.varient}] * {item.quantity} ={" "}
                    {item.price}
                  </h6>
                ))}
              </div>
              <div className="order">
                <h4>Address :</h4>
                <h6>Street : {order.shippingAddress.street}</h6>
                <h6>City : {order.shippingAddress.city}</h6>
                <h6>PinCode : {order.shippingAddress.pincode}</h6>
                <h6>Countery : {order.shippingAddress.country}</h6>
              </div></div>
              <Col md={5}>
                <h4>Order Info :</h4>
                <h6>Order Amount : {order.orderAmount}</h6>
                <h6>Transection id : {order.transectionId}</h6>
                <h6>Order id : {order._id}</h6>
              </Col>
            </div>
          ))}
          </>
    )
}
// {/* orders.map(createorderdiv) */}



import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deliverOrder,  getAllOrders } from "./../../actions/orderActions";
import { Table, Button } from "react-bootstrap";
import { Loader } from '../Loader';
import { Error } from '../Error';
import AdminScreen from "../../screens/AdminScreen";
const OrderList = () => {
    
  const allOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { error, orders, loading } = allOrdersState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
      <div><AdminScreen/>
      {loading && <Loader />}
      {error && <Error error="Admin Order req fail" />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.shippingAddress.street},{order.shippingAddress.pincode}</td>
                <td>{order.userid}</td>
                <td>Rs {order.orderAmount}/-</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {" "}
                  {order.isDelivered ? (
                    <h6 className="text-success">Deliverd</h6>
                  ) : (
                    <>
                      <Button
                        className="btn-danger"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </Button>
                    </>
                  )}{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
 
  );
};

export default OrderList;

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderItems from '../OrderItems/OrderItems';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://stark-fortress-17749.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    
    
    return (
        <div className="container text-center">
            

            <div>
            <h4>Your Details</h4>
            <h3>Name: {loggedInUser.name}</h3>
            <img style={{height: '100px', borderRadius: "50%"}} src={loggedInUser.photoURL} alt={loggedInUser.name} />
        </div>
        <hr/>
        <h3>You ordered <span className="text-danger"> {orders.length} </span> Items</h3>
        <table className="table table-stripped">
  <thead className="fs-3">
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Order Date & Time</th>
    </tr>
  </thead>
  
            {
                orders.map(order => <OrderItems order={order} />)
            }
            
            </table>
        </div>
    );
};

export default Orders;
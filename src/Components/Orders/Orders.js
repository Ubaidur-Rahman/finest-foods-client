import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    


    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://stark-fortress-17749.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    
    
    return (
        <div className="container">
            <h1>your Remaining order: {orders.length}</h1>
            {
                orders.map(order => <li>{order.name}</li> )
            }
        </div>
    );
};

export default Orders;
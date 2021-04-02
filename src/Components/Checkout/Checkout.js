import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [products , setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const product = products.find(pd => pd?._id === _id)
    
    
    const handleOrder = () =>{
        const orderTime = new Date()
        const newOrder = {...loggedInUser, ...product, orderTime };
        delete newOrder._id

        fetch(`http://localhost:5055/addOrder`, { 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    
    return (
        <div className="container">
            <h1>{product?.name}</h1>
            <button onClick={handleOrder} className="btn btn-primary"><Link to={`/orders`}>CheckOut</Link></button>
        </div>
    );
};

export default Checkout;
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const { _id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://stark-fortress-17749.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const product = products.find(pd => pd?._id === _id)


    const handleOrder = () => {
        const orderTime = new Date().toDateString('DD-MM-YYYY')
        const newOrder = { ...loggedInUser, ...product, orderTime };
        delete newOrder._id

        fetch(`https://stark-fortress-17749.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div className="container">
            <div>
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{product?.name}</td>
                            <td>{product?.weight}</td>
                            <td>${product?.price}</td>
                        </tr>
                    </tbody>
                    
                </table>
                <div className="container d-flex justify-content-between">
                    
                    <h3>Total</h3>
                    <h5>${product?.price}</h5>
                    
                    </div>
            </div>
            <div className="container text-end">
            <button onClick={handleOrder} className="btn btn-warning text-end"><Link className="link-item-style" to={`/orders`}>CheckOut</Link></button></div>
        </div>
    );
};

export default Checkout;
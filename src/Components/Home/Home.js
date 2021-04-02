import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="container">
            <div className="justify-content-center">
            <form class="d-flex w-50">
                <input class="form-control" type="search" placeholder="Search Food" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            <div className="container">
                <div className="row mt-5">
                {
                  products.map(product => <Product product={product} />)  
                }
                </div>
            </div>
        </div>
    );
};

export default Home;
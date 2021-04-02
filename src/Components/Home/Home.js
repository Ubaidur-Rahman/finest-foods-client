import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stark-fortress-17749.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container text-center">
            <div className="text-center">
                <form className="d-flex w-50 ">
                    <input className="form-control" type="search" placeholder="Search Food" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {
                        products.length === 0 && <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">

                            </div>
                        </div>
                    }
                    {
                        products.map(product => <Product product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
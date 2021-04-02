import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = ({ product }) => {

    const { _id, name, price, weight, imageURL } = product


    return (

        <div className="single-product col col-md-6 col-lg-4 my-3 p-3">


            <img className="product-img" style={{ height: '200px' }} src={imageURL} alt={`img of ${name}`} />


            <h5>
                {`${name} - ${weight}`}
            </h5>


            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <h2>${price}</h2>
                </div>
                <div>
                    <button className="btn btn-danger"><Link className="link-item-style" to={`/checkout/${_id}`}>Buy Now</Link></button>
                </div>
            </div>
        </div>



    );
};

export default Product;
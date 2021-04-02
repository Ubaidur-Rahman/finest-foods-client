import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, price, weight, imageURL } = product


    return (

        <div className="col col-md-4 mt-3">


            <img style={{ height: '300px' }} src={imageURL} alt={`img of ${name}`} />


            <h5>
                {`${name} - ${weight}`}
            </h5>


            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h2>${price}</h2>
                </div>
                <div>
                    <button className="btn btn-success"><Link to={`/checkout/${_id}`}>Buy Now</Link></button>
                </div>
            </div>
        </div>



    );
};

export default Product;
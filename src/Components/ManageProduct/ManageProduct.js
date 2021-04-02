import React, { useEffect, useState } from 'react';
import ShowManageProducts from '../ShowManageProducts/ShowManageProducts';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://stark-fortress-17749.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="container">
        <h3 className="mt-4">Manage Product</h3>

<table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Weight</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  
            {
               products.map(product => <ShowManageProducts product={product} /> ) 
            }
            
            </table>
        </div>
    );
};

export default ManageProduct;
import React from 'react';

const OrderItems = ({order}) => {
    const {name, orderTime, price , photoURL, imageURL, } = order
    return (
        
        <tbody className="fs-4">
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{orderTime}</td>
    </tr>
    
  </tbody>
            
        
    );
};

export default OrderItems;
import React from 'react';

const ShowManageProducts = (props) => {

    const { name, price, weight } = props.product


    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{price}</td>
                <td>
                    <button>Delete</button>
                    <button>edit</button>
                </td>
            </tr>
        </tbody>
    );
};

export default ShowManageProducts;
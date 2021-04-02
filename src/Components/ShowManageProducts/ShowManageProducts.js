import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ShowManageProducts = (props) => {

    const { name, price, weight } = props.product


    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{weight}</td>
                <td>${price}</td>
                <td className="d-flex">
                    <p className="text-danger m-2"><FontAwesomeIcon icon={faTrash} size="2x" /></p>
                    <p className="text-success m-2"><FontAwesomeIcon icon={faEdit} size="2x" /></p>
                </td>
            </tr>
        </tbody>
    );
};

export default ShowManageProducts;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
            <div className=" container bg-info text-primary">
                <ul style={{ listStyleType: "none", padding: "10px"}}>
                    <li>
                        <h3 className="mb-5"><Link className="link-item-style" to="/">Finest Foods</Link></h3>
                    </li>
                    <li>
                        <Link className="link-item-style" to="/manage-product">Manage Product</Link>
                    </li>
                    <li>
                        <Link className="link-item-style" to="/add-product">Add Product</Link>
                    </li>
                    <li>
                        <Link className="link-item-style" to="/edit-product">Edit Product</Link>
                    </li>
                </ul>

                <h2>Admin Details</h2>
                <h4>Name: {loggedInUser.name}</h4>
                <img style={{height: '100px', borderRadius: "50%"}} src={loggedInUser.photoURL} alt={loggedInUser.name} />
                </div>
    );
};

export default Admin;
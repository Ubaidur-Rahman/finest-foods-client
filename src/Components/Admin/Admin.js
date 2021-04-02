import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
            <div className=" container bg-danger text-white">
                <ul style={{ listStyleType: "none", padding: "10px"}}>
                    <li>
                        <h3 className="mb-5 text-danger"><Link to="/">Finest Foods</Link></h3>
                    </li>
                    <li>
                        <Link to="/manage-product">Manage Product</Link>
                    </li>
                    <li>
                        <Link to="/add-product">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/edit-product">Edit Product</Link>
                    </li>
                </ul>

                <h2>Admin Details</h2>
                <h4>Name: {loggedInUser.name}</h4>
                <h4>Email: {loggedInUser.email}</h4>
                <img style={{height: '200px', borderRadius: "50%"}} src={loggedInUser.photoURL} alt="chobi"/>
                </div>
    );
};

export default Admin;
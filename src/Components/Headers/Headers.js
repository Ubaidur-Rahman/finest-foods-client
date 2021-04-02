import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Headers.css";

const Headers = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid text-decoration-none">
    <h2><Link className="link-item-style" to="/">Finest Foods</Link></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end p-3 " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-3">
          <Link className="link-item-style" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
        <Link className="link-item-style" to="/orders">Orders</Link>
        </li>
        <li className="nav-item mx-3">
        <Link className="link-item-style" to="/admin">Admin</Link>
        </li>
        <li className="nav-item mx-3">
        <Link className="link-item-style" to="/deals">Deals</Link>
        </li>
      </ul>
      {
        loggedInUser.name ? <img style={{height: '50px', borderRadius: "50%"}} src={loggedInUser.photoURL} alt={loggedInUser.name}/> : <button className="btn btn-success"><Link className="link-item-style" to="/login">Login</Link></button> 
      }
      
    </div>
  </div>
</nav>
    );
};

export default Headers;
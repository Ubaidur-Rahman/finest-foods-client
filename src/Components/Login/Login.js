import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import "./Login.css";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)




    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }




    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from)

            })
            .catch(error => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });

    }




    const handleFbSignIn = () => {

    }



    return (
        <div className="container">

            <div className="text-center">
                <button className="btn w-100 btn-google text-uppercase " type="submit" onClick={handleGoogleSignIn} ><FontAwesomeIcon icon={faGoogle} size="2x" /> Continue with Google</button>
                <button className="btn w-100 btn-facebook text-uppercase mt-1" disabled type="submit" onClick={handleFbSignIn}><FontAwesomeIcon icon={faFacebookF} size="2x" /> Continue with Facebook</button>
            </div>

        </div>
    );
};

export default Login;
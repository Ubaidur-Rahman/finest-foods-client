import { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import AddProduct from "./Components/AddProduct/AddProduct";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Deals from "./Components/Deals/Deals";
import EditProduct from "./Components/EditProduct/EditProduct";
import Headers from './Components/Headers/Headers';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import NoMatch from "./Components/NoMatch/NoMatch";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
    <Router>
      <Switch>
        <Route exact path="/">
          <Headers />
          <Home />
        </Route>
        <PrivateRoute path="/orders">
          <Headers />
          <Orders />
        </PrivateRoute>
        <Route path="/login">
          <Headers />
          <Login />
        </Route>
        <Route path="/deals">
          <Headers />
          <Deals />
        </Route>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
        <PrivateRoute path="/checkout/:_id">
        <Headers />
          <Checkout />
        </PrivateRoute>
        <Route path="/home">
          <Headers />
          <Home />
        </Route>
        <Route path="/manage-product">
          <div className="d-flex">
            <div className="w-25">
              <Admin /></div>
            <ManageProduct />
          </div>
        </Route>
        <Route path="/add-product">
        <div className="d-flex">
            <div className="w-25">
              <Admin />
            </div>
            <AddProduct /></div>
        </Route>

        <Route path="/edit-product">
          <div className="d-flex">
            <div className="w-25">
              <Admin /></div>
            <EditProduct />
          </div>
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

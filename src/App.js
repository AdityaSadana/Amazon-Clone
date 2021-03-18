import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider'
import { auth } from 'firebase';
import './App.css';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
           <Route path="/checkout">
            <Header />
            <Checkout />
           </Route>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/">
             <Header />
             <Home />
           </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

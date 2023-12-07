import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Product';
import Cart from './components/Cart';
import ProductContextProvider from './Global/productContext';
import CartContextProvider from './Global/cartContext';
import Footer from './components/Footer';

function App(){
  return(
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} /> 
            </Switch> 
            <Footer/>
          </Router> 
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;


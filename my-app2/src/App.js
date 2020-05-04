import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Product from './components/product';

export default function App() {
  return (
    <Router>
      <div className='main'>
        <nav>
          <ul className='menu'>
            <Link className='menu-item' to='/'>
              Home
            </Link>
            <Link className='menu-item' to='/about'>
              About
            </Link>
            <Link className='menu-item' to='/products'>
              Products
            </Link>
          </ul>
        </nav>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products'>
            <Products />
            <Route path='/products/:productId'>
              <Product />
            </Route>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <div className='main'>
      {' '}
      <h2>About</h2>
      <img
        className='logo'
        src='https://tonimarino.co.uk/wp-content/uploads/2019/09/Apple-Logo-1.png'
        alt='Apple logo'
      ></img>
      <h1>Apple</h1>
      <p>
        Apple Inc. is an American multinational technology company headquartered in Cupertino, California,
        that designs, develops, and sells consumer electronics, computer software, and online services. It is
        considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft.
      </p>
    </div>
  );
}

function Products() {
  return (
    <div className='main'>
      <h2>Products</h2>
      <ul className='products'>
        <Link className='product-item' to='/products/:iphone'>
          Iphone
        </Link>
        <Link className='product-item' to='/products/:ipad'>
          Ipad
        </Link>
        <Link className='product-item' to='/products/:macbook'>
          MacBook Pro
        </Link>
        <li className='product-item'>Iphone</li>
        <li className='product-item'>Ipad</li>
        <li className='product-item'>MacBook Pro</li>
      </ul>
    </div>
  );
}

import React from 'react';
import { getProduct } from './lib/api';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loading: false,
    };
  }
  componentDidMount() {
    this.fetchProduct().then();
  }

  async fetchProduct() {
    this.setState({ loading: true });
    const response = await getProduct(10);
    const product = response.data;
    console.log(product);
    this.setState({ product, loading: false });
  }

  render() {
    const { loading, product } = this.state;
    return (
      <div className='App'>
        {loading && <h5>Loading...</h5>}
        {!loading && product && (
          <div>
            <h4> {product.name} </h4>
            <img src={product.avatar} alt={product.name} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

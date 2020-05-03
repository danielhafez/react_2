import React from 'react';
import { getProduct, getAll, deleteProduct, createProduct } from './lib/api';
import is_url from './lib/is_url';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loading: false,
      products: [],
      formName: '',
      formAvatar: '',
    };
  }
  componentDidMount() {
    this.fetchAll().then();
  }

  async fetchProduct() {
    this.setState({ loading: true });
    const response = await getProduct(9);
    const product = response.data;
    console.log(product);
    this.setState({ product, loading: false });
  }

  async fetchAll() {
    this.setState({ loading: true });
    const response = await getAll();
    console.log(response.data);
    this.setState({ loading: false, products: response.data });
  }

  async deleteProductById(id) {
    this.setState({ loading: true });
    await deleteProduct(id);
    const response = await getAll();
    this.setState({ loading: false, products: response.data });
  }

  async handleOnSubmit(event) {
    event.preventDefault();
    const { formName, formAvatar } = this.state;
    if (formName.length < 5) {
      alert('The name must be more than five characthers');
    }
    if (is_url(formAvatar) === false) {
      alert('Please insert a valid url');
    }
    const newProduct = {
      name: formName,
      avatar: formAvatar,
    };
    await createProduct(newProduct);
    const response = await getAll();
    this.setState({ loading: false, products: response.data });
  }

  render() {
    const { loading, products, formAvatar, formName } = this.state;
    return (
      <div className='App'>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type='text'
            name='name'
            value={formName}
            id='name'
            placeholder='name'
            onChange={(event) => this.setState({ formName: event.target.value })}
          />
          <input
            type='text'
            name='avatar'
            value={formAvatar}
            id='avatar'
            placeholder='avatar'
            onChange={(event) => this.setState({ formAvatar: event.target.value })}
          />
          <button type='submit'>New user</button>
        </form>

        {loading && <h5>Loading...</h5>}
        {!loading &&
          products &&
          products.map((item) => (
            <div key={item.id}>
              <h4> {item.name} </h4>
              <img src={item.avatar} alt={item.name} />
              <button onClick={() => this.deleteProductById(item.id)}>Delete</button>
            </div>
          ))}
      </div>
    );
  }
}

export default App;

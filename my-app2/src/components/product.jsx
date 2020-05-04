import React from 'react';
import { withRouter } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    this.state.product = match.params.productId;
  }

  componentDidUpdate() {
    const { match } = this.props;
    this.state.product = match.params.productId;
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        {product === ':macbook' && (
          <h2>
            Macbook: The MacBook is a brand of Macintosh laptop computers by Apple Inc. that merged the
            PowerBook and iBook lines during Apple's transition to Intel processors{' '}
          </h2>
        )}
        {product === ':iphone' && (
          <h2>
            Iphone: The iPhone is a line of smartphones designed and marketed by Apple Inc. All generations of
            the iPhone use Apple's iOS mobile operating system software.{' '}
          </h2>
        )}
        {product === ':ipad' && (
          <h2>
            Ipad: iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run
            the iOS and iPadOS mobile operating systems{' '}
          </h2>
        )}
      </div>
    );
  }
}

export default withRouter(Product);

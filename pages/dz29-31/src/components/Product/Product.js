import './Product.scss';
import { Link } from 'react-router-dom';
import React from 'react';

class Product extends React.Component {
  constructor(props) { 
    super(props);
    this.state={ 
      isInCart: false, 
      isInLike: false 
    } 
    this.toLike=this.toLike.bind(this); 
    this.toBuy=this.toBuy.bind(this); 
  }

  toBuy() {
    this.setState({isInCart: !this.state.isInCart});
  }
    
  toLike() { 
    this.setState({isInLike: !this.state.isInLike}); 
  }

  
  render () {
    let {product}=this.props; 
    return(
      <div className="Product">
        <div className="Product__img" style={{backgroundImage: `url(${product.srcImg})`}}>
        </div>
        <div className="Product__name">{product.name}</div>
        <div className="Product__year">{product.year}</div>
        <div className="Product__price">{product.price}</div>
        <Link to={'/products/' + product.id} className="Product__button">Подробнее</Link>
        
          <button type='button' className='Product__button-buy' onClick={this.toBuy}>{this.state.isInCart ? 'В корзине': 'Купить'}</button>  
          <button type='button' className='Product__button-like' onClick={this.toLike}>{this.state.isInLike ? '\u2764' : `\u2661` }</button>  
        
      </div>
    )
  }
}

export default Product;
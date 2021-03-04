import './Product.scss';
import { Link } from 'react-router-dom'

function Product(props) {
    let {product}=props; //берем объект phone из компонента Product
    return (
        <div className="Product">
            <div className="Product__img" style={{backgroundImage: `url(${product.srcImg})`}}>
            </div>
            <div className="Product__name">{product.name}</div>
            <div className="Product__year">{product.year}</div>
            <Link to={'/products/' + product.id} className="Product__button">Подробнее</Link>
        </div>
    );
}

export default Product;
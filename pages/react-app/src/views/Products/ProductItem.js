import './Products.scss';
import { useParams } from 'react-router-dom'; 

function ProductItem() {
  let { id }=useParams(); 
  return (
    <div className="ProductItem">
      Автомобиль с Id: {id}
    </div>
  )
}

export default ProductItem;
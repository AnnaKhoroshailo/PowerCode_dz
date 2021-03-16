import './Products.scss';
import Auto from "../../components/Auto/Auto";

function Products() {
  let cars=[
    {
      id: 0,
      name: 'Tesla Model X',
      year: '2018',
      srcImg: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/2017_Tesla_Model_X_front_5.27.18.jpg',
      price: '50199$'
    },
    {
      id: 1,
      name: 'Mersedes S500',
      year: '2020',
      srcImg: 'https://narscars.com.ua/content/rent/cars/223/photos/mercedes-s500-arenda-800x436-b384.jpg',
      price: '22470$'
    },
    {
      id: 2,
      name: 'Tayota Camry 3.5',
      year: '2019',
      srcImg: 'https://autoreview.ru/images/Article/1659/Article_165958_860_575.jpg',
      price: '32960$'
    }
  ]
  let carItems=cars.map((car, index)=>{ //перебор массива
    return <Auto product={car} key={index} />
  })
  return (
    <div className="Products">
      <h1>Каталог авто</h1>
      <div className="products-container">
        {carItems}
      </div>
    </div>
  );
}

export default Products;
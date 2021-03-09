import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <h1>Укравтопром подвел итоги продаж новых легковых автомобилей в стране за первое полугодие. Самой популярной стала модель KIA Sportage, а замыкает топ-10 - MAZDA CX5.</h1>
      <h2>Всего за период с января по июнь украинцы приобрели и зарегистрировали чуть больше 37 000 новых авто, что составило на 4% меньше объема продаж за первое полугодие 2019 года.</h2>
      <h3>Топ-10 популярных легковых автомобилей выглядит так:</h3>
      <ul className="Home__List">
        <li>KIA Sportage - его выбрали 2642 покупателя;</li>
        <li>RENAULT Duster - продано 2604 авто;</li>
        <li>TOYOTA RAV-4 - 2471 авто;</li>
        <li>RENAULT Logan - 1577;</li>
        <li>RENAULT Sandero - 1434;</li>
        <li>TOYOTA Land Cruiser Prado -1064;</li>
        <li>SKODA Octavia - 1037;</li>
        <li>HYUNDAI Tucson - 926;</li>
        <li>NISSAN X-Trail - 780;</li>
        <li>MAZDA CX5 - 742.</li>
      </ul>
    </div>
  );
}

export default Home;
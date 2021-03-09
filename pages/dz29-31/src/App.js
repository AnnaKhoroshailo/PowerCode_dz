import './App.scss';
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import ProductItem from "./views/Products/ProductItem";
import NotFound404 from "./views/NotFound404/NotFound404";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/products">
                <Products/>
              </Route>
              <Route exact path="/products/:id">
                <ProductItem/>
              </Route>
              <Route path="*"> 
                <NotFound404/>
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

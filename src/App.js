import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import {Provider} from "react-redux"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Store from "./store/index"
import Details from "./components/Details"

function App() {
  return (
    <div>
      <Router>
        <Provider store={Store}>
        <Nav></Nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/details/:id" exact component={Details}></Route>

      </Provider>
      </Router>
     
    </div>
  );
}

export default App;

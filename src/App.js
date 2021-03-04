import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  ErrorPage,
  Shop,
  SingleProduct,
  Cart,
} from "./pages";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer";
import { useFilterContext } from "./contex/filter_context";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About></About>
        </Route>
        <Route exact path="/Cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/Contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/Shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route exact path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
      <hr className="mt-5" />
      <Footer />
    </Router>
  );
}

export default App;

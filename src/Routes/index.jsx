import { Switch, Route, BrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ShoppingCartContextProvider } from "./Components/Context/ShoppingCartContext";
import CartPage from "./Components/Pages/CartPage";
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LogIn";
import store from "./Redux/ReduxIndex";

function App() {
  return (
    <ReduxProvider store={store}>
      <ShoppingCartContextProvider>
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </ShoppingCartContextProvider>
    </ReduxProvider>
  );
}

export default App;

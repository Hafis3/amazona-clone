import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productscreen from "./Screens/Productscreen";
import CartScreen from "./Screens/CartScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact={true} path="/" component={Product} />
        <Route path="/product/:id" component={Productscreen} />
        <Route path="/Cart/:id?" component={CartScreen} />
      </Router>
    </div>
  );
}

export default App;

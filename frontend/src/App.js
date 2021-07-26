import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productscreen from "./Screens/Productscreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact={true} path="/">
          <Product />
        </Route>
        <Route path="/product/:id" component={Productscreen} />
      </Router>
    </div>
  );
}

export default App;

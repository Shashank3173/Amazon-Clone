import "./App.css";
import Footer from "./Compoenents/Footer";
import Header from "./Compoenents/Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductPaga from "./Pages/ProductPaga";
import Context from "./ContextApi/Context";

function App() {
  return (
    <Context>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ProductPaga/:id" element={<ProductPaga />} />
        </Routes>
        <Footer />
      </Router>
    </Context>
  );
}

export default App;

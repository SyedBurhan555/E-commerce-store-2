import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Product from './Pages/Products/Product';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Error from './Pages/Error/Error';
import './index.css';
import Header from './Component/Header';
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;

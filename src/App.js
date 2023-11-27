import './App.css';
import Homepage from '../src/Pages/jsx/Homepage';
import { Routes, Route } from 'react-router-dom';
import Navigationbar from './components/jsx/Navigationbar';
import Footer from './components/jsx/Footer';
import Products from './Pages/jsx/Products';
import ProductDetails from './Pages/jsx/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='products/:id' element={<ProductDetails/>}/>
      </Routes>
      <Footer/>     
    </div>
  );
}

export default App;

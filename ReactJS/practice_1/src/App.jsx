
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Button from './components/Button';

import Header from './components/Header';
import Ingredients from './components/Indredients';
import Navbar from './components/Navabar';
import Order from './components/Order';
import Home from './components/Home';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';


function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/hello' element={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, consequatur.</p>} ></Route>
          <Route path="/ingredient" element={<Ingredients />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/about" element={<About />}></Route>

    </Routes>
    <Footer />
    </BrowserRouter>
  )
}



export default App;



import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';


function App() {
  return (
    <div>
		<BrowserRouter>
		
      <Navbar/>
	  <Routes>
		<Route path='/' element={<Home/>}/>
		<Route path='/romance' element={<ShopCategory category='romance'/>}/>
		<Route path='/fantasy' element={<ShopCategory category='fantasy'/>}/>
		<Route path='/litFiction' element={<ShopCategory category='litFiction'/>}/>
		<Route path='/product' element={<Product/>}> 
		<Route path=':productId' element={<Product/>}/>
		</Route>
		<Route path='/card' element={<Cart/>}/>
		<Route path='/login' element={<LoginSignUp/>}/>
		 
	  </Routes>
	  </BrowserRouter>
    </div>
  );
}

export default App;

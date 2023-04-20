import './styles/App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import AddShopPage from './pages/AddShopPage';

function App() {
 

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/shop/add' element={<AddShopPage />} />
      </Routes>
    </div>
  )
}

export default App

import "./styles/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import AddShopPage from "./pages/AddShopPage";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { useAuthCtx } from "./store/AuthProvider";

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route 
          path="/shops" 
          element={isLoggedIn ?<ShopsPage
          /> : <Navigate to={'/login'} />} />
        <Route path="/shops/add" element={isLoggedIn ? <AddShopPage /> : <Navigate to={'/login'} />} />
         
      </Routes>
    </div>
  );
}

export default App;

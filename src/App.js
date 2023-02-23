import Footer from "./components/common/Footer"
import './App1.css'
import './App2.css'
import './App3.css'

import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import FigureProductPage from "./pages/FigureProductPage";
import LoginPage from "./pages/LoginPage";
import UserState from "./context/UserState";
import Info from "./components/common/Info";
import Header from "./components/common/Header";
import RegisterFormPage from "./pages/RegisterFormPage";
import Nav from "./components/common/Nav";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (  
    <UserState>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<ProductPage/>} path="/figure/:idFigure"/>
          <Route element={<FigureProductPage/>} path="/lista-funkos"/>
          <Route element={<LoginPage/>} path="/login"/> 
          <Route element={<RegisterFormPage/>} path="/register"/>
          <Route element={<LandingPage/>} path="/lista-comics" />
          {/* <Route element={<WelcomePage/>} path="/welcome" /> */}
        </Routes>
        <Info/>
        <Footer/>
      </BrowserRouter>
    </UserState>
      
  
  );
}

export default App;

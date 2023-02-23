import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineUser , } from "react-icons/ai"
import {FiLogOut , } from "react-icons/fi"



import UserContext from "../../context/UserContext";


const Nav = () => {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    // Init context
    setUser({
      id: null,
      name: null,
      surnames: null,
      email: null,
      phone: null,
      token: null,
      rol: null,
      language: "en"
    });
    // Remove local storage data
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    
    <header>
      {user.name ?
        <nav className="user-header">
          <img src="../data/img/logo/Marvel-logo.png" alt="" />
          <ul className="menu">
                        <li><a href="/#">HOME</a></li>
                        <li><a href="/#"><Link to="/lista-comics">CÓMICS</Link></a></li>
                        <li><a href="/#"><Link to="/lista-funkos">FUNKOS</Link></a></li>
                        <li><a href="#us">SOBRE NOSOTROS</a></li>
            </ul>
          <div className='profile'>
            <span> {`${user.name}  ${user.surname}` }</span> <span style={{color:"red"}}>|</span>
            <FiLogOut className="profile-exit" href="#" onClick={() => { logout() }}/>  
          </div>
        </nav>
        :
        <nav className="user-header">
          <img src="../data/img/logo/Marvel-logo.png" alt="" />
          <ul className="menu">
                        <li><a href="/#">HOME</a></li>
                        <li><a href="/#"><Link to="/lista-comics">CÓMICS</Link></a></li>
                        <li><a href="/#"><Link to="/lista-funkos">FUNKOS</Link></a></li>
                        <li><a href="#us">SOBRE NOSOTROS</a></li>
                    </ul>
          <div className="cont-users">
            <Link to="/register" style={{textDecoration:"none"}}>Register</Link> |
            <AiOutlineUser className="icon-login"/><Link to="/login">Login</Link>
          </div>
        </nav>
      }

    </header >
      
  );
};

export default Nav;

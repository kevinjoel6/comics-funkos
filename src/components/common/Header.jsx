import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="header" className="header">
      
      <div className="container">
        <div className="row1">
          <Nav/>
          {/* <div className="two columns u-pull-right">
            <ul>
              <li className="submenu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>

                <div id="num-cursos"></div>
                <div id="carrito">
                  <table id="lista-carrito" className="u-full-width">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                  <a
                    href="/#"
                    id="vaciar-carrito"
                    className="button u-full-width"
                  >
                    Vaciar Carrito
                  </a>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

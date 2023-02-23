import React from "react";
import { Link } from "react-router-dom";

const Main = ({ comics }) => {
  return (
    <main id="lista-comics" className="grid-4" >
      {
        comics.map((e) => (
        <div className="card" key={e._id}>
          <img src={e.image} alt="" className="imagen-curso u-full-width"/>
          <div className="info-card">
              <h6><Link to={"/comic/" + e._id}>{e.title}</Link></h6>
              <p className="profesor">Author: {e.author}</p>
              <p className="precio"><span className="u-pull-right ">{e.price}€</span></p>
              <a href="/#" className="u-full-width button-primary button input agregar-carrito"
                      data-id={e._id}>Agregar Al Carrito</a>
                  <div className="favorite">
                    <i className="fas fa-heart" data-id={e._id}></i>
                  </div>
          </div>
        </div>

      ))}
    </main>
  );
};

export default Main;

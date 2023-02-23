import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({ figures }) => {
  return (
    <main id="lista-funkos" className="grid-4" >
      {
        figures.map((e) => (
        <div className="card-f" key={e._id}>
          <img src={`${"../data/img/funkos/"}${e.img}`} alt="" />
          <div className="info-card-f">
              <h6><Link to={"/figure/" + e._id} className="figure-f">{e.name}</Link></h6>
              <p className="profesor">{e.type}</p>
              <p className="precio"><span className="u-pull-right ">{e.price}€</span></p>
              {/* <a href="/#" className="u-full-width button-primary button input agregar-carrito"
                      data-id={e._id}>Agregar Al Carrito</a>
                  <div className="favorite">
                    <i className="fas fa-heart" data-id={e._id}></i>
                  </div> */}
          </div>
        </div>

      ))}
    </main>
  )
}

export default Main
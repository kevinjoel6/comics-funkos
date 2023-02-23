import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductPage = () => {
    const { idFigure } = useParams();
    const [figure , setFigures] = useState(null);
    const navigate= useNavigate();

    const getFigure = async (idFigure)=>{
        try {
            const res = await fetch('http://localhost:4001/api/figures');
            const figureList = await res.json();
            const dataFigure = figureList.find(e=> e._id == idFigure);
            setFigures(dataFigure);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFigure(idFigure)
      }, []);

  return (
    <main>
      {
        figure &&
        <div className='detail'>
          <h1>{figure.name}</h1>
            <img src={`${"../data/img/funkos/"}${figure.img}`} alt="" />
            <p>{figure.description}</p>
            <p>Type: {figure.type}</p>
            <p>Size: {figure.size}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
      }
    </main>
  )
}

export default ProductPage
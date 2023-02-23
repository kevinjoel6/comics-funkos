import React, { useState, useEffect } from 'react'
import Main from '../components/funkos/Main'
import FigureService from '../services/FigureService'

const FigureProductPage = () => {
    const [figures, setFigures] = useState([])

    useEffect(()=>{
        FigureService.getFigures().then(data=>setFigures(data))
    },[])

  return (
    <section className="titulo">
        <h1>Popular figures</h1>
        <Main figures={figures}/>
    </section>
  )
}

export default FigureProductPage
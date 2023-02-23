
import React, { useEffect, useState } from "react";
import ComicService from "../services/ComicService.js";
import Main from '../components/comics/Main'


const LandingPage = () => {
  const [comics, setComics] = useState([])

    useEffect(()=>{
      ComicService.getComics().then(data=>setComics(data))
    },[])
  return (
    <section className="titulo">
        <h1>The most popular comics of MARVEL</h1>
        <Main comics={comics} />
    </section>
    
  )
}

export default LandingPage
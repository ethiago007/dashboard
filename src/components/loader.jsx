import React, { useEffect } from 'react'
// import { preLoaderAnim } from "./animation";
import '../App.css'


const Preloader = () => {
    const text = 'GREENe';

    return (

        <div className="preloader">
      <h1 className="preloader-text">
        {text.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
    </div>
    //     <div className="preloader">
    //   <p className="preloader-text">GREENe</p>
    // </div>
    // <p className="preloader-text">
    //     {text.split('').map((char, index) => (
    //       <span key={index}>{char}</span>
    //     ))}
    //     GREENe</p>
    )
}

export default Preloader

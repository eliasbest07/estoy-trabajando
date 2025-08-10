"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import './cube.css';

const sides = ['front', 'right', 'back', 'left', 'top', 'bottom'];

const Cube = () => {
  const [currentClass, setCurrentClass] = useState('front');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSide = sides[Math.floor(Math.random() * sides.length)];
      setCurrentClass(randomSide);
    }, 3000); // Change side every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once on mount


  // Manual rotation is removed
  // const changeSide = (event : any) => {
  //   console.log(event.target.value);
  //   const showClass = event.target.value;
  //   setCurrentClass(showClass);
  // };


  return (
    <div>
      <div className={`scene`}>
        <div className={`cube move-${currentClass}`}>
          <div className="front">
            <Image
              src="/main.png" 
              alt="crear"
              width={500} 
              height={300}
            />    
          </div>
          <div className="back">back</div>
          <div className="left">left</div>
          <div className="right">right</div>
          <div className="top">top</div>
          <div className="bottom">bottom</div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
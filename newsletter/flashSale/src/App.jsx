import React, { useEffect, useState } from "react";
import "./app.scss";

const App = () => {
  const [oddColor, setOddColor] = useState("#ffc100");
  const [evenColor, setEvenColor] = useState("#ff9a00");

  useEffect(() => {
    const interval = setInterval(() => {
      setOddColor((prevColor) => (prevColor === "#ffc100" ? "#ff9a00" : "#ffc100"));
      setEvenColor((prevColor) => (prevColor === "#ffc100" ? "#ff9a00" : "#ffc100"));
      //change flash and sale color every second from black to white
      const flash = document.querySelector(".f1");
      flash.style.color = flash.style.color === "black" ? "white" : "black";
      const flash2 = document.querySelector(".f2");
      flash2.style.color = flash2.style.color === "black" ? "white" : "black";
      
      

    }, 500);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
      <div className="container">
        <div className="top">
          <div className="t triangle1" style={{ borderBottomColor: oddColor }}></div>
          <div className="t triangle2" style={{ borderTopColor: evenColor }}></div>
          <div className="t triangle3" style={{ borderTopColor: oddColor }}></div>
          <div className="t triangle4" style={{ borderBottomColor: evenColor }}></div>
        </div>
        <div className="bottom">
          <div className="t triangle5" style={{ borderTopColor: evenColor }}></div>
          <div className="t triangle6" style={{ borderBottomColor: oddColor }}></div>
          <div className="t triangle7" style={{ borderBottomColor: evenColor }}></div>
          <div className="t triangle8" style={{ borderTopColor: oddColor }}></div>
        </div>
        <div className="drum">
          <h2>Drumroll, please...</h2>
        </div>
        <div className="flash">
          <h1 className="f1">
            FLASH 
          </h1>
          <h1 className="f2">  SALE</h1>
        </div>
        <div className="shop">
          <h2>shop asap</h2>
        </div>
      </div>
    </>
  );
};

export default App;


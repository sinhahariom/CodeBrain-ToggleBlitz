import React from "react";
import "./style.css";

export default function App() {
  const btnClick = id => {
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-2").style.display = "none";

    document.getElementById(id).style.display = "block";
  };

  return (
    <div className="wrapper">
      <button onClick={() => btnClick("div-1")} id="btn-1" className="btn1">
        Btn - ONE
      </button>
      <div id="div-1" className="div1" />
      <button onClick={() => btnClick("div-2")} id="btn-2" className="btn2">
        Btn - TWO
      </button>
      <div id="div-2" className="div2" />
    </div>
  );
}

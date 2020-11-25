import React from 'react';
import ReactDOM from 'react-dom';
import { Portfolio } from "./components/Portfolio";






ReactDOM.render(<Portfolio />, document.getElementById("app"))



/* const setHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", setHeight); */
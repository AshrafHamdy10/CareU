import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Cards from "./Components/Cards";
import Steps from "./Components/Steps";
import Quality from "./Components/Quality";
import MobileApp from "./Components/MobileApp";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    <Banner />
    <Services />
    <Cards />
    <Steps />
    <Quality />
    <MobileApp />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

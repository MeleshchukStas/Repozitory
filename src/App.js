import './App.css';
import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
// import Technologies from "./components/Technologies";
// import Footer from "./components/Footer";
const App = ()=> {
  return (
    <div className="app_wrapper">
        <Header></Header>
        <NavBar/>
        <Profile/>
        {/*<Technologies></Technologies>*/}
        {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;

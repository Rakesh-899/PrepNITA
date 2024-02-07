import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Quizes from "./Pages/Quizes";
import Discuss from "./Pages/Discuss";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import FooterCom from "./Components/Footer";
import AllUsers from "./Pages/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route> */
        <Route path="/faltu" element={<AllUsers />}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/quizes" element={<Quizes></Quizes>}></Route>
        <Route path="/discuss" element={<Discuss></Discuss>}></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
      </Routes>
      <FooterCom></FooterCom>
    </BrowserRouter>
  );
}

export default App;

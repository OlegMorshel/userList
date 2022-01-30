import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./scss/App.css";

const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
		{/* creating routing */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddUser />}/>
        <Route path="/edit/:id" element={<EditUser/>	}/>
      </Routes>
    </div>
  );
};

export default App;

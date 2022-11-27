import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lander from "./App/Lander";

export default function App() {
  return (
    <>
      <div className="h-full w-full min-h-screen">
        <div className={"m-4"}>
          <Navbar/>
          <div className={"mt-2"}>
            <BrowserRouter>
              <Routes>
                <Route path={"/"} element={<Lander/>}/>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

function ExampleFunc() {
  return (
    <>
      <label>func</label>
    </>
  )
}

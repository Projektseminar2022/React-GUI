import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Lander from "./App/Lander";
import {Params} from "react-router";


export default function App() {
  return (
    <>
      <div className="h-full w-full min-h-screen">
        <div className={"m-4"}>
          <Navbar user={}/>
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

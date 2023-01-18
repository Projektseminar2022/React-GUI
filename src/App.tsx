import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Lander from "./App/Lander";
import Dashboard from "./App/Dashboard";
import PageNotFound from "./components/utility/PageNotFound";


export default function App() {

  return (
    <>
      <div className="h-full w-full min-h-screen">
        <div>
          <Navbar/>
          <div className={"mt-14 px-8"}>
            <BrowserRouter>
              <Routes>
                <Route path={"/"} element={<Lander/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"*"} element={<PageNotFound/>}/>
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

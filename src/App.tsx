import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
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
                <Route path="/" element={<Lander/>}>
                  <Route index element={<Lander/>}></Route>
                  <Route path=":id" element={<User/>}/>
                  <Route path="id" element={<></>}>
                    <Route path=":ids" element={<Users/>}/>
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

function User(){
  let {id} = useParams()

  return (
    <>
      <label>{id}</label>
    </>
  )
}

function Users(){
  let {ids} = useParams()

  return (
    <>
      <label>{ids}</label>
    </>
  )
}

function ExampleFunc() {
  return (
    <>
      <label>func</label>
    </>
  )
}

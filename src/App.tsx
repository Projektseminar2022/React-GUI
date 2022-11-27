import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div className="h-full w-full min-h-screen">
          <div className={"m-4"}>
              <Navbar/>

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

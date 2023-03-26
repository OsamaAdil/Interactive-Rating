import "./App.css";
import {Main} from "./Components/Main";
import Thankyou from "./Components/Thankyou";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main  />}></Route>
            <Route path="/thankyou" element={<Thankyou />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
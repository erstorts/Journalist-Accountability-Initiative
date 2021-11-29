import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Support from './components/Support';
import GetBias from './components/GetBias';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<GetBias />} />
        </Routes>
      </main>
    </BrowserRouter>);
}

export default App;

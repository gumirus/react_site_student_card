import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;

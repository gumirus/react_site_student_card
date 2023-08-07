import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Student from "./app/pages/Student.jsx";
import Home from "./app/pages/Home.jsx";
import Contact from "./app/pages/Contact.jsx";
import Header from "./app/ui/Header.jsx";
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

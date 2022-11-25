import React from "react";
// import {  Router, Routes,Route } from 'react-router-dom'
import AddEmp from "../AddEmp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from '../Dashboard'
import New from "../New";
import SalarySlip from "../SalarySlip";

function Router2() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<New />} />
          <Route path="/AddEmp" element={<AddEmp />} />
          <Route path="/dashboard" element={<New />} />
          <Route path="/salaryslip" element={<SalarySlip />} />
          <Route path="/new" element={<New />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Router2;

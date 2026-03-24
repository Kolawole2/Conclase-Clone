import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Hiring from "./Pages/Hiring/Hiring"
import Submit_a_resume from "./Pages/Submit_a_resume/Submit_a_resume"
import CorporateTraining from "./Pages/CorporateTraining/CorporateTraining"
import Request_one from "./Pages/Hiring/Request_one/Request_one"
import Request_two from "./Pages/Hiring/Request_two/Request_two"
import Submitted from "./Pages/Submitted/Submitted"
import Submit_one from "./Pages/Submit_a_resume/Submit_one/Submit_one"
import Submit_two from "./Pages/Submit_a_resume/Submit_two/Submit_two"
import Contact from "./Pages/Contact/Contact"
import Software from "./Pages/Softwaredev/Software"
import Startproject from "./Pages/Softwaredev/StartProject/Startproject"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/submit" element={<Submit_a_resume/>} />
        <Route path="/corporatetraining"  element={<CorporateTraining/>} />
        <Route path="/request/one" element={<Request_one/>} />
        <Route path="/request/two" element={<Request_two/>} />
        <Route path="/request/submitted" element={<Submitted/>} />
        <Route path="/submit/one" element={<Submit_one/>} />
        <Route path="/submit/two" element={<Submit_two/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/software/dev" element={<Software/>} />
        <Route path="/start/project" element={<Startproject/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

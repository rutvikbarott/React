import React from "react";
import Home from "./user/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Packegs from "./user/comman/Pages/Packegs";
import Service from "./user/comman/Pages/Service";
import About from "./user/comman/Pages/About";
import Destination from "./user/comman/Pages/Destination";
import Booking from "./user/comman/Pages/Booking";
import Guides from "./user/comman/Pages/Guides";
import Testimonial from "./user/comman/Pages/Testimonial";
import Eroor from "./user/comman/Pages/Eroor";
import Contact from "./user/comman/Pages/Contact";

import Dashbord from "./Admin/comman/Apages/Dashbord";
import Aheader from "./Admin/comman/Aheader";
import Afotter from "./Admin/Afotter";
import Maneage from "./Admin/comman/Apages/Maneage";
import Addpackges from "./Admin/comman/Apages/Addpackges";
import Login from "./user/comman/Pages/Login";
import Alogin from "./Admin/comman/Apages/Alogin";
import Register from "./user/comman/Pages/Register";


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packege" element={<Packegs />} />
      <Route path="/service" element={<Service />} />
      <Route path="/About" element={<About />} />
      <Route path="/Destination" element={<Destination />} />
      <Route path="/Book" element={<Booking />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/Testimonial" element={<Testimonial />} />
      <Route path="/Error" element={<Eroor />} />
      <Route path="/contact" element={< Contact />} />
      <Route path="/login" element={< Login />} />
      <Route path="/register" element={< Register />} />


     

      




      {/* admin */}
      <Route path="/Aheader" element={< Aheader />} />
      <Route path="/Dashbord" element={< Dashbord />} />
      <Route path="/Afotter" element={< Afotter />} />
      <Route path="/manege" element={< Maneage />} />
      <Route path="/Add" element={< Addpackges />} />
      <Route path="/Alogin" element={< Alogin />} />




     












      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/HomePage";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./sections/ContactSection";
 import Clients from "./pages/Clients";

 import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
// import Services from "./pages/Services";
// import Solutions from "./pages/Solutions";
// 
// import Statistics from "./pages/Statistics";
//
// 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

          <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="/clients" element={<Clients />} />
                <Route path="/services" element={<Services />} />
                 <Route
    path="/services/:serviceId"
    element={<ServiceDetail />}
  />
        {/*
        <Route path="/solutions" element={<Solutions />} />
      
        <Route path="/statistics" element={<Statistics />} />
       
     */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
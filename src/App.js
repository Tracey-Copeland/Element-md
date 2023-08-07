import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/elementMD/Home";
import NavBar from './components/Navbar';
import AlmondDC from "./components/lux/AlmondDC"
import LHome from './components/lux/LHome';
import HaHome from './components/hash/HaHome';
import RHome from './components/ryder/RHome';
import BrandsOv from './components/elementMD/BrandsOverview';
import AboutUs from './components/elementMD/AboutUs';
import Locations from './components/elementMD/Locations';
import ContactUs from './components/elementMD/ContactUs';
import Footer from './components/Footer';
import QualAbout from './components/elementMD/qualpartner/QualAbout';
import QualApply from './components/elementMD/qualpartner/QualApply';
import SSCaramelDC from './components/lux/SSCaramelDC';
import CaramelMaccDC from './components/lux/CaramelMaccDC';




function App() {
  return (
  
    <div className="App">
      
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/brands" element={<BrandsOv/>}></Route>
        <Route path="/locations" element={<Locations/>}></Route>
        <Route path="/contact-us" element={<ContactUs/>}></Route>
        <Route path="/qualifying-partner" element={<QualAbout/>}></Route>
        <Route path="/qualifying-partner/apply" element={<QualApply/>}></Route>


        <Route path="/lux" element={<LHome/>}></Route>
        <Route path="/lux/smoked-almond-DC" element={<AlmondDC/>}></Route>
        <Route path="/lux/seasalt-caramel-DC" element={<SSCaramelDC/>}></Route>
        <Route path="/lux/caramel-macciato-DC" element={<CaramelMaccDC/>}></Route>

        <Route path="/hash" element={<HaHome/>}></Route>
        <Route path="/ryder" element={<RHome/>}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

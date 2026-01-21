
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Service from './Pages/Service';
import Testimonial from './Pages/Testimonial';
import Contact from './Pages/Contact';

import Layout from './Layout';
function App() {
  return (
 <Routes>
   <Route path="/" element={<Layout />}>

<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/menu" element={<Menu />}/>
<Route path="/services" element={<Service />}/>
<Route path="/testimonial" element={<Testimonial />}/>
<Route path="/contact" element={<Contact />}/>

</Route>
 </ Routes>
  );
}

export default App;

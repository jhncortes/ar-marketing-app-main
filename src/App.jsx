import './App.css';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ChatbotComponent from './components/ChatbotComponent'
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Info from './pages/Info';
import Booking from './pages/Booking';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ChatbotComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    
  );
}

export default App;

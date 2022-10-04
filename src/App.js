import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Gallery from './component/Gallery/Gallery';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import Offers from './component/Offers/Offers';
import Sections from './component/Sections/Sections';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Offers/>
      <AboutUs/>
      <Sections/> 
      <Gallery/>
    </div> 
  );
}

export default App;

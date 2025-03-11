import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import './main.css'

function App() {
  return (
    <div class = "container">
      <Header />
      <div className="separator"></div>
      <Navbar />
      <HeroSection />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Aboutus from './components/Aboutus/Aboutus';
import Service from './components/Service/Service';
import Apex from './components/Apex/Apex';
import Galery from './components/Galery/Galery';
import Quote from './components/Quote/Quote';
import Video from './components/Video/Video';
import Digits from './components/Digits/Digits';
import Blog from './components/Blog/Blog';
import Team from './components/Team/Team';
import Price from './components/Price/Price';
import Map from './components/Map/Map';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="WAWE">
      <Hero><Header/></Hero>
      <Aboutus/>
      <Service/>
      <Apex/>
      <Galery/>
      <Quote/>
      <Video/>
      <Digits/>
      <Blog/>
      <Team/>
      <Price/>
      <Map/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
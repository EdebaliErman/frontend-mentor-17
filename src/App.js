import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <img className='hidden z-0 absolute md:flex sm:flex' src={process.env.PUBLIC_URL + "./assets/bg-hero-mobil.svg"} alt='bg' />
      <img className='hidden absolute z-0 xl:flex 2xl:flex lg:flex w-full ' src={process.env.PUBLIC_URL + "./assets/bg-hero-desktop.svg"} alt='bg-desk' />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;

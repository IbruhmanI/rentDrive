import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx'
import Main from './components/Main.jsx';
import AboutUs from './page/about/AboutUs.jsx';
import Investors from './page/investors/Investors.jsx';
import ScrollTop from './ScrollTop.jsx';

function App() {
  return (
    <>
      <Header />
      <ScrollTop/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/investors' element={<Investors/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

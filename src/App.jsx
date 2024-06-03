import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Heros/Hero'
import Products from './components/Products/Products'
import Aos from 'aos'
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

const App = () => {
  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
  });
  return (
    <div >
      <Navbar/> 
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App

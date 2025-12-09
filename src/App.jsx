import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Slidersection from './Pages/Slidersection';
import Introsection from './Pages/Introsection';


const App = () => {
  return (
    <div>
      <Header></Header>
    <Slidersection></Slidersection>  
    <Introsection></Introsection>
      <Footer></Footer>
    </div>
  )
}

export default App

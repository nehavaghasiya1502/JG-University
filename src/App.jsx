import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Slidersection from './Pages/Slidersection';
import Introsection from './Pages/Introsection';
import Programsection from './Pages/Programsection';
import Strengthsection from './Pages/Strengthsection';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Slidersection></Slidersection>
      <Introsection></Introsection>
      <Programsection></Programsection>
      <Strengthsection></Strengthsection>
      <Footer></Footer>
    </div>
  )
}

export default App

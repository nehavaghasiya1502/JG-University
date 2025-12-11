import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Slidersection from './Pages/Slidersection';
import Introsection from './Pages/Introsection';
import Programsection from './Pages/Programsection';
import Strengthsection from './Pages/Strengthsection';
import Leadershipsection from './Pages/Leadershipsection';
import Facultysection from './Pages/Facultysection';
import Partenersection from './Pages/partenersection';
import Campussection from './Pages/Campussection';
import Salientsection from './Pages/Salientsection';
import Alumanisection from './Pages/Alumanisection';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Slidersection></Slidersection>
      <Introsection></Introsection>
      <Programsection></Programsection>
      <Strengthsection></Strengthsection>
      <Leadershipsection></Leadershipsection>
      <Facultysection></Facultysection>
      <Partenersection></Partenersection>
      <Campussection></Campussection>
      <Salientsection></Salientsection>
      <Alumanisection></Alumanisection>
      <Footer></Footer>
    </div>
  )
}

export default App

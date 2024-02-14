
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import FullHouse from './fullhouse/FullHouse';
import Students from './students/Students';
import BestProduct from './landmass/LandMass';
import Counter from './counter/Counter';
import FormData from './formdata/FormData'
import PhotoShopBild from './photoshop/PhotoShopBild';
import ImageSlider from './imageslider/ImageSlider';
import Vehicle from './autobewegen/AutoBewegen';
import NumObjList from './numobjectlist/NumObjList';
import DuplicatesArray from './duplicate/DuplicatesArray';
import StringToNummer from './stringtonummer/StringToNummer';
import InputTransform from './stringtonummer/InputTransform';
import ReversWord from './stringtonummer/ReverseWord';
import OppositeHouseCalculator from './hausnummerrechnen/OppositeHouseCalculator';
import MultiplicationTable from './displaymultiplication/MultiplicationTable';
import BlogList from './bloglist/BlogList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript



function App() {
  const nummerArray = [118,112,93,321,12,334,43,2,112,12,22]
  const my_blogs = [
    {
      id: 1,
      title: 'Erstes Blog-Objekt',
      body: 'Inhalt des ersten Blogs.',
      author: 'Autor 1'
    },
    {
      id: 2,
      title: 'Zweites Blog-Objekt',
      body: 'Inhalt des zweiten Blogs.',
      author: 'Autor 2'
    }
  ];
 

  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact my_blogs={my_blogs} />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/Students" element={<Students />} />
          <Route path="/FullHouse" element={<FullHouse />} />
          <Route path="/LandMass" element={<BestProduct />} />
          <Route path="/imageslider" element={<ImageSlider />} />
          <Route path="/numobjlist" element={<NumObjList numbers={nummerArray} />} />
          <Route path="/stringtonummer" element={<StringToNummer />} />

        </Routes>
        <br />
      </div>

      <div>
        <h1>React Counter App</h1>
        <Counter initialCount={19} step={1} />
      </div>
      <>
      <MultiplicationTable n={6} />
      <NumObjList/>
      </>
      <>
      <FormData/>
      </>
      <>
      <PhotoShopBild/>
      </>
      <Vehicle/>
      <DuplicatesArray/>
      <InputTransform/>
      <ReversWord/>
      <OppositeHouseCalculator/>
    </Router>
  );

}

export default App;
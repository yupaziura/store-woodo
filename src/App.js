import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Contacts from './components/pages/Contacts/Contacts';
import SingleCatalogPage from './components/pages/SingleCatalogPage/SingleCatalogPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';
import DialogWindow from './components/DialogWindow/DialogWindow';


import './App.css';

function App() {

  const [rootType, setRootType] = useState('armchair');
  const [rootId, setRootId] = useState('0');

  const [show, setShow] = useState(false);

  

  useEffect(()=>{
    setTimeout(()=> {
      setShow(true)
    })
  },[])


  return (
    <>
    <DialogWindow show={show} setShow={setShow}/>

    <Router>

      <div className="App">

        <Header/>


         <div className="">
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/catalog' element={<CatalogPage setRootType={setRootType}/>}/>
            <Route path='/contacts' element={<Contacts/>}/>

            <Route path='/catalog/armchairs' element={<SingleCatalogPage setRootId={setRootId} type='armchairs'/>}/>
            <Route path='/catalog/tables' element={<SingleCatalogPage setRootId={setRootId} type='tables'/>}/>
            <Route path='/catalog/accessoires' element={<SingleCatalogPage setRootId={setRootId} type='accessoires'/>}/>

            <Route path={`/catalog/${rootType}/${rootId}`} element={<SingleProductPage rootId={rootId} rootType={rootType} />}/>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;

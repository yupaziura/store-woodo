import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Contacts from './components/pages/Contacts/Contacts';
import SingleCatalogPage from './components/pages/SingleCatalogPage/SingleCatalogPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';
import DialogWindow from './components/DialogWindow/DialogWindow';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';



import './App.css';

function App() {

  const [rootType, setRootType] = useState('armchair');
  const [rootId, setRootId] = useState('0');

  const [show, setShow] = useState(false);




   

  // test commmit
  // another test commit

  // const constrPath = `${}`

  // useEffect(()=>{
  //   setTimeout(()=> {
  //     setShow(true)
  //   })
  // },[])

  return (
    <>


    <Router>
    <DialogWindow show={show} 
                  setShow={setShow} 
                  setRootId={setRootId}
                  rootId={rootId}
/>  

      <div className="App">

        <Header setShow={setShow}/>


         <div className="">
          <Routes>
            <Route path="notfound" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />

            <Route path='/' element={<MainPage setShow={setShow}/>}/>
            <Route path='/catalog' element={<CatalogPage setRootType={setRootType}/>}/>
            <Route path='/contacts' element={<Contacts/>}/>

            <Route path='/catalog/armchairs' element={<SingleCatalogPage setRootId={setRootId} type='armchairs' typeName='крісла'/>}/>
            <Route path='/catalog/tables' element={<SingleCatalogPage setRootId={setRootId} type='tables' typeName='столи'/>}/>
            <Route path='/catalog/accessoires' element={<SingleCatalogPage setRootId={setRootId} type='accessoires'typeName='аксесуари'/>}/>

            <Route path={`/catalog/:type/:id`} element={<SingleProductPage rootId={rootId} rootType={rootType} />}/>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;

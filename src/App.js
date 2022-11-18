import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import useHvojaService from './services/HvojaService';

import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Contacts from './components/pages/Contacts/Contacts';
import SingleCatalogPage from './components/pages/SingleCatalogPage/SingleCatalogPage';
import SingleProductPage from './components/pages/SingleProductPage/SingleProductPage';
import DialogWindow from './components/DialogWindow/DialogWindow';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import Promotion from './components/pages/Promotion/Promotion';



import './App.css';

function App() {

  const [rootType, setRootType] = useState('armchair');
  const [rootId, setRootId] = useState('0');

  const [show, setShow] = useState(false);

  // const handleFetchData =() =>{ // access in API call
  //   fetch(`https://awesome.api.io?api-key=${process.env.REACT_APP_SECRET_NAME}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  // }

 const getData = useHvojaService();




   

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

            <Route path='/catalog/armchairs' element={<SingleCatalogPage getItem={getData.getArmchairs} setRootId={setRootId} type='armchairs' typeName='крісла'/>}/>
            <Route path='/catalog/tables' element={<SingleCatalogPage getItem={getData.getTables} setRootId={setRootId} type='tables' typeName='столи'/>}/>
            <Route path='/catalog/accessoires' element={<SingleCatalogPage getItem={getData.getAccess} setRootId={setRootId} type='accessoires'typeName='аксесуари'/>}/>


            <Route path='/promotion' element={<Promotion setRootId={setRootId} />}/>


            <Route path={`/catalog/:type/:id`} element={<SingleProductPage rootId={rootId} rootType={rootType} />}/>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;

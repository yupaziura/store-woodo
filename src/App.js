import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState} from 'react';
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
import PromotionSpecial from './components/pages/Promotion/PromotionSpecial';



import './App.css';

function App() {

  const [rootType, setRootType] = useState('armchair');
  const [rootId, setRootId] = useState('0');

  const [show, setShow] = useState(false);


 const {getArmchairs, getTables, getAccess, loading, error, getFabricArr, getWoodArr, getAllProducts} = useHvojaService();



  return (
    <>


    <Router>
    <DialogWindow show={show} 
                  setShow={setShow} 
                  setRootId={setRootId}
                  rootId={rootId}
                  loading={loading} error={error} getItem={getArmchairs} getFabricArr={getFabricArr} getWoodArr={getWoodArr}
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

            <Route path='/catalog/armchairs' element={<SingleCatalogPage loading={loading} error={error} getItem={getArmchairs} setRootId={setRootId} type='armchairs' typeName='крісла'/>}/>
            <Route path='/catalog/tables' element={<SingleCatalogPage loading={loading} error={error} getItem={getTables} setRootId={setRootId} type='tables' typeName='столи'/>}/>
            <Route path='/catalog/accessoires' element={<SingleCatalogPage loading={loading} error={error} getItem={getAccess} setRootId={setRootId} type='accessoires'typeName='аксесуари'/>}/>


            <Route path='/discount' element={<Promotion getItem={getAccess} loading={loading} error={error} setRootId={setRootId} />}/>
            <Route path='/promotion' element={<PromotionSpecial getItem={getAllProducts} loading={loading} error={error} setRootId={setRootId} />}/>

            <Route path={`/catalog/:type/:id`} element={<SingleProductPage getArmchairs={getArmchairs} getTables={getTables} getAccess={getAccess} loading={loading} error={error} rootId={rootId} rootType={rootType} />}/>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;

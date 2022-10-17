import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Contacts from './components/pages/Contacts/Contacts';
import SingleCatalogPage from './components/pages/SingleCatalogPage/SingleCatalogPage';



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="">
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/catalog' element={<CatalogPage/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/catalog/armchairs' element={<SingleCatalogPage type='armchair'/>}/>
            <Route path='/catalog/tables' element={<SingleCatalogPage type='table'/>}/>
            <Route path='/catalog/accessoires' element={<SingleCatalogPage type='accessoire'/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

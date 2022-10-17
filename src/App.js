import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import Contacts from './components/pages/Contacts/Contacts';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

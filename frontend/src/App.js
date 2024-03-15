import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & Components
import CoordinatorHome from './pages/CoordinatorHome';
import CNavbar from './components/CNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CNavbar/>
        <div className='pages'>
          <Routes>
            <Route
            
            path='/'
            element={ <CoordinatorHome/> }
            
            />

          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

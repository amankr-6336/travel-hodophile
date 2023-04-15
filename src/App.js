
import './App.css';
import Landing from './pages/Landing';
import {Routes,Route} from 'react-router-dom'
import North from './pages/North';
import Himachal from './pages/Himachal';
import Detail from './pages/Detail';
import South from './pages/South';
import NorthEast from './pages/Northeast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/north" element={<North/>}/>
        <Route path="/South" element={<South/>}/>
        <Route path="/NorthEast" element={<NorthEast/>}/>
        
        <Route path="/north/himachal" element={<Himachal/>}/>
        <Route path="/north/himachal/manali" element={<Detail/>}/>
        


      </Routes>
    
    </>
  );
}

export default App;

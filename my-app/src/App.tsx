import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 
import { Accueil } from './screens/Accueil';
import { Boutique } from './screens/Boutique';
import { Detail1 } from './screens/Detail1';
import { Detail2 } from './screens/Detail2';
import { Detail3 } from './screens/Detail3';
import { Detail4 } from './screens/Detail4';
import { Detail5 } from './screens/Detail5';
import { Detail6 } from './screens/Detail6';
import { Detail7 } from './screens/Detail7';
import { Detail8 } from './screens/Detail8';
import { Detail9 } from './screens/Detail9';
import { Detail10 } from './screens/Detail10';

function App() {
  return (
    <div >
      <CartProvider>
          <Routes>
            <Route path='/' element={<Accueil/>}/>
            <Route path='/boutique' element={<Boutique/>}/>
            <Route path='/detail1' element={<Detail1/>}/>
            <Route path='/detail2' element={<Detail2/>}/>
            <Route path='/detail3' element={<Detail3/>}/>
            <Route path='/detail4' element={<Detail4/>}/>
            <Route path='/detail5' element={<Detail5/>}/>
            <Route path='/detail6' element={<Detail6/>}/>
            <Route path='/detail7' element={<Detail7/>}/>
            <Route path='/detail8' element={<Detail8/>}/>
            <Route path='/detail9' element={<Detail9/>}/>
            <Route path='/detail10' element={<Detail10/>}/>
          </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

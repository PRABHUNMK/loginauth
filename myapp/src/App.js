import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Registerpage from './registerpage';
import Loginpage from './loginpage';
import Maincomp from './maincomp';


export default function App()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registerpage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/home' element={<Maincomp/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}


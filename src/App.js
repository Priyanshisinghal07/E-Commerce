import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import HomePage from './Components/Home'
import Cloth from './Components/cloth'

function App() {
  return (
  <>
<BrowserRouter>
 
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/home" element={<HomePage/>}/>
  <Route path="/cloth" element={<Cloth/>}/>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;

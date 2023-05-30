import AddTransport from './Components/AddTransport';
import TransportMenu from './Components/TransportMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayTransport from './Components/DisplayTransport';
import UpdateTransport from './Components/UpdateTransport';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
    <div  data-testid="AppTest" className='App'>
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<TransportMenu/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/AddTransport" element={<AddTransport/>}/>
      <Route path="/DisplayTransport" element = {<DisplayTransport/>}/>
      <Route path="/UpdateTransport" element = {<UpdateTransport/>}/>
    </Routes>

  </BrowserRouter>
    </div>
  </>
  );
}

export default App;

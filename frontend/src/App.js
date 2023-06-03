import AddTransport from './Components/AddTransport';
import TransportMenu from './Components/TransportMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayTransport from './Components/DisplayTransport';
import UpdateTransport from './Components/UpdateTransport';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {useEffect} from 'react';
let token = localStorage.getItem('token');

function App() {

  useEffect(()=>{
    token = localStorage.getItem('token');
  },[]);

  return (
    <>
    <div data-testid="AppTest" className='App'>
  <BrowserRouter>
    <Routes>
      {token ? (
        <>
          <Route path="/" element={<TransportMenu />} />
          <Route path="/AddTransport" element={<AddTransport />} />
          <Route path="/DisplayTransport" element={<DisplayTransport />} />
          <Route path="/UpdateTransport" element={<UpdateTransport />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<TransportMenu />} />
    </Routes>
  </BrowserRouter>
  </div>
  </>
  );
}

export default App;

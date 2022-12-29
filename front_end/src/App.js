import { Route, Routes } from 'react-router-dom'
import './App.css';

import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstPage/>} />
      <Route path='/second' element={<SecondPage/>} />

   
    </Routes>

  );
}

export default App;

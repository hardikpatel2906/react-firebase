import Create from './components/Create';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="bg-red-50 min-h-screen">
      <h1 className='text-5xl p-6 flex justify-center font-lato'>React Auth with Firebase</h1>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

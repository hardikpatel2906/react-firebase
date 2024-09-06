import Create from './components/Create';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-50 min-h-screen">
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-5xl p-6 font-lato'>Auth with Firebase and React</h1>
          <img src='./firebase.png' alt='Firebase' className='w-40' />
        </div>
        
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

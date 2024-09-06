import Create from './components/Create';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const secretKey = process.env.REACT_APP_API_KEY;
  console.log(secretKey);

//   FB_API_KEY=AIzaSyD7q2YMWaSF1l-SngaUbXk4tK12XoEzloE
// FB_AUTH_DOMAIN=react-auth-c5127.firebaseapp.com
// FB_PROJECT_ID=react-auth-c5127
// FB_STORAGE_BUCKET=react-auth-c5127.appspot.com
// FB_MESSAGING_SENDER_ID=150562783230
// FB_APP_ID=1:150562783230:web:8e16669fc8a08878ad4aaf
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

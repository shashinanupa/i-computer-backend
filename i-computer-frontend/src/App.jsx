import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homePage.jsx';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import AdminPage from './pages/adminPage.jsx';
import Testpage from './pages/test.jsx';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
     <div className='w-full h-screen '>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/test' element={<Testpage />} />

      </Routes>
     </div>
  );
}

export default App;
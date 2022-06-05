import { Login } from './components/views/Login/Login';
import { Register } from './components/Register/Register'
import { Error404 } from './components/views/Error404/Error404';
import { Tasks } from './components/views/Tasks/Tasks';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';

const RequireAuth = ({children}) => {
  if (!localStorage.getItem("logged")){
    return <Navigate to="/login" replace />
  }
  return children
}

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<RequireAuth><Tasks /></RequireAuth>} />
      <Route path='*' element={<Error404/>} />
    </Routes>
  );
}

export default App;

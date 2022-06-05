import { Login } from './components/views/Login/Login';
import { Register } from './components/Register/Register'
import { Error404 } from './components/views/Error404/Error404';
import { Tasks } from './components/views/Tasks/Tasks';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';

const RequireAuth = ({children}) => {
  if (!localStorage.getItem("logged")){
    console.log("denied access?");
    return <Navigate to="/login" replace />
  }
  return children
}

const pageTransitions = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

const MotionElement = ({children}) => {
  return (
    <motion.div 
      className='page' 
      initial="out" 
      animate="in" 
      exit="out" 
      variants={pageTransitions}
    >
      {children}
    </motion.div>
  )
}

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/login' element={<MotionElement><Login/></MotionElement>} />
        <Route path='/register' element={<MotionElement><Register/></MotionElement>} />
        <Route path='/' element={<RequireAuth><MotionElement><Tasks /></MotionElement></RequireAuth>} />
        <Route path='*' element={<Error404/>} />
      </Routes>      
    </AnimatePresence>

  );
}

export default App;

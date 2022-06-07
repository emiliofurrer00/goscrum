import { lazy, Suspense } from 'react';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';

const Error404 = lazy(() => import('./components/views/Error404/Error404'));
const Tasks = lazy(() => import('./components/views/Tasks/Tasks'));

const RequireAuth = ({children}) => {
  if (!localStorage.getItem("logged")){
    console.log("denied access?");
    return <Navigate to="/login" replace />
  }
  return children
}

const pageTransitions = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.3,      
      delay: 0.3,
      ease: 'easeIn',
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    }
  }
}

const MotionElement = ({children}) => {
  return (
    <motion.div 
      className='page' 
      initial="initial" 
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
      {/* Temporary navbar for dev env */}
      {/* <nav style={{
        width: '100vw',
        height: 60,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'fixed'
      }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Tasks</Link>
      </nav> */}

      <Routes location={location} key={location.pathname}>
        <Route path='/login' element={<MotionElement><Login/></MotionElement>} />
        <Route path='/register' element={<MotionElement><Register/></MotionElement>} />
        <Route path='/' element={
          <RequireAuth>
            <Suspense>
              <MotionElement>
                <Tasks />
              </MotionElement>            
            </Suspense>
          </RequireAuth>} 
        />
        <Route path='*' element={
          <Suspense fallback={<h1>...</h1>}>
            <Error404/>
          </Suspense>
          } 
        />
      </Routes>      
    </AnimatePresence>

  );
}

export default App;

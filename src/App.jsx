

import './App.css'
import HomePage from './Pages/HomePage'
import { Routes,Route} from 'react-router-dom'
import {PageSingIn} from './Pages/PageSingIn'
import { PageSingUp } from './Pages/PageSingUp'
import { AppRoutes } from './Rutas/AppRoutes'
import { AuthContext } from './Context/AuthContext'
// import Routes from './Rutas/AppRoutes'


function App() {
  
  
  return (
    <>
      <AuthContext>
        <AppRoutes/>
    
      </AuthContext>
    
      
      
    </>
    
  )
}


export default App

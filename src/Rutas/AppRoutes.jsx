import { Routes,Route} from 'react-router-dom'
import {PageSingIn} from '../Pages/PageSingIn'
import { PageSingUp } from '../Pages/PageSingUp'
import HomePage from '../Pages/HomePage'
import HomeProfile from '../Pages/HomeProfile'
import { ProtectUser } from '../Components/ProtectUser'

export  function AppRoutes() {
  return (
    
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/singin" element={<PageSingIn/>} />
      <Route path='/singup' element={<PageSingUp/>}/>
      
      <Route path='/homeprofile' element={<ProtectUser><HomeProfile/></ProtectUser>}/>
      <Route path="*" element={<h2 style={{color: "white"}}>Error 404 : Esta Página no existe</h2>} />
    </Routes>
   
    
  )
}

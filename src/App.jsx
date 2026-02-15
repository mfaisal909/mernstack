import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SingIn from './pages/SignIn'
import SignUp from './pages/Signup'
import About from './pages/About'
import Profolio from './pages/Profolio'
function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<SingIn/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profolio' element={<Profolio/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App

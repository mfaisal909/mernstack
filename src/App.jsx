import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profolio from './pages/Profolio'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profolio' element={<Profolio/>}></Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App

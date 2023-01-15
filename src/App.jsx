import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Show from './components/Show'
import  Edit from './components/Edit'
import Create from './components/Create'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {


  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element= { <Show/>}></Route>
              <Route path='/create' element= { <Create/>}></Route>
              <Route path='/edit/:id' element= { <Edit/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

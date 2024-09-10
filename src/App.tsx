
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
       <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App

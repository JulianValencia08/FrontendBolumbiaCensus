import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/auth/LoginPage'
import { PreFormPage } from './pages/form/PreFormPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/preform' element={<PreFormPage />} />
      </Routes>
    </Router>
  )
}

export default App

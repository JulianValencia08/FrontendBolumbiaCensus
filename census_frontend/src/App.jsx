import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/auth/LoginPage'
import { PreForm } from './pages/form/PreForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/preform' element={<PreForm />} />
      </Routes>
    </Router>
  )
}

export default App

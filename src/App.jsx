import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router.jsx';
import { AuthProvider } from './auth/AuthContext.jsx';

const API_URL = 'http://localhost:3000/api';

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}
1
export default App
export { API_URL }
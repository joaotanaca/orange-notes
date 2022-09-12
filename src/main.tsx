import { AuthProvider } from 'context/auth'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import '@djthoms/pretty-checkbox'
import './styles/index.css'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Router>
            <AuthProvider>
                <App />
                <ToastContainer
                    position="top-right"
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                />
            </AuthProvider>
        </Router>
    </StrictMode>
)

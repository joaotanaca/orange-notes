import { AuthProvider } from 'context/auth'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
)

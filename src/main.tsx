import { ModalProvider } from '@context/modal'
import { AuthProvider } from 'context/auth'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import '@djthoms/pretty-checkbox'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
        <AuthProvider>
            <ModalProvider>
                <App />
                <ToastContainer
                    position="top-right"
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                />
            </ModalProvider>
        </AuthProvider>
    </Router>
)

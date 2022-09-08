import { Suspense, useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router'
import { useAuth } from '@context/auth'
import Navbar from '@molecules/Navbar'
import routes from '~react-pages'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-circular-progressbar/dist/styles.css'
import Modal from '@molecules/Modal'
import DetailsTask from 'pages/dashboard/details-task/[id]'
import { useModal } from '@context/modal'

function App() {
    const { authLoading, user } = useAuth()
    const { showModal } = useModal()
    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (
            pathname.match(/login|signup/g)?.length &&
            Object.keys(user).length &&
            !authLoading
        ) {
            navigate('/dashboard')
        }
    }, [user, authLoading, pathname])
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {authLoading ? (
                <div className="w-screen h-screen flex items-center justify-center">
                    Autenticando
                </div>
            ) : (
                <>
                    <Navbar />
                    {useRoutes(routes)}
                    {showModal && (
                        <Modal>
                            <DetailsTask />
                        </Modal>
                    )}
                </>
            )}
        </Suspense>
    )
}

export default App

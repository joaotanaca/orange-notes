import { Suspense } from 'react'
import { useRoutes } from 'react-router'
import routes from '~react-pages'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
    return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

export default App

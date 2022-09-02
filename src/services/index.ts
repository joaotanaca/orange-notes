import axios from 'axios'
import { toast } from 'react-toastify'

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { api_key: import.meta.env.VITE_API_KEY },
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 400) {
            toast(error.response.data.message, { type: 'error' })
        } else if (
            error.response.status === 401 &&
            window.location.href.match(/dashboard/g)
        ) {
            window.location.replace('/login')
        }

        return Promise.reject(error)
    }
)

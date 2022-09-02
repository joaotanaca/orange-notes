import { AxiosResponse } from 'axios'
import {
    createContext,
    useContext,
    useState,
    FunctionComponent,
    PropsWithChildren,
    useEffect,
} from 'react'
import { useNavigate } from 'react-router'
import { api } from 'services'
import getUser from 'services/getUser'

export type LoginData = { email: string; password: string }

export type SignupData = LoginData & { name: string }

export type User = { id: string; email: string; password: string }

const AuthContext = createContext(
    {} as {
        AuthLogin: (arg0: LoginData) => Promise<void>
        AuthSignUp: (arg0: SignupData) => Promise<void>
        loading: boolean
        user: User
        initialize: () => Promise<void>
    }
)

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    const [user, setUser] = useState({} as User)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function AuthLogin(data: LoginData) {
        setLoading(prev => !prev)

        try {
            const { data: response } = await api.post('/auth/login', {
                ...data,
            })
            localStorage.setItem('token', response)

            const user = await getUser(response)

            setUser(user)
            navigate('/dashboard')
        } catch (error) {}
        setLoading(prev => !prev)
    }

    async function AuthSignUp(data: SignupData) {
        setLoading(prev => !prev)

        try {
            const { data: response } = await api.post('/auth/signup', {
                ...data,
            })
            localStorage.setItem('token', response)

            const user = await getUser(response)

            setUser(user)
            navigate('/dashboard')
        } catch (error) {}
        setLoading(prev => !prev)
    }

    async function initialize() {
        const token = localStorage.getItem('token')
        if (token) {
            const user = await getUser(token)

            setUser(user)
        } else {
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <AuthContext.Provider
            value={{ AuthLogin, AuthSignUp, initialize, loading, user }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

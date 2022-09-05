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

type AuthFunction = (
    arg0: LoginData | SignupData,
    endpoint?: 'login' | 'signup'
) => Promise<void>

const AuthContext = createContext(
    {} as {
        Auth: AuthFunction
        authLoading: boolean
        loading: boolean
        user: User
        initialize: () => Promise<void>
    }
)

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
    children,
}) => {
    const [user, setUser] = useState({} as User)
    const [authLoading, setAuthLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const Auth: AuthFunction = async (data, endpoint = 'login') => {
        setLoading(prev => !prev)

        try {
            const { data: response } = await api.post(`/auth/${endpoint}`, {
                ...data,
            })
            localStorage.setItem('token', response)

            const user = await getUser(response)

            setUser(user)
            navigate('/dashboard')
        } catch (error) {}
        setLoading(prev => !prev)
    }

    async function Logout(data: SignupData) {}

    async function initialize() {
        const token = localStorage.getItem('token')
        if (token) {
            setAuthLoading(true)
            try {
                const user = await getUser(token)

                setUser(user)
            } catch (err) {}
            setAuthLoading(false)
        } else {
            return navigate('/login')
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                Auth,
                initialize,
                authLoading,
                loading,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

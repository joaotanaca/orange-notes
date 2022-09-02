import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { api } from 'services'

export type LoginData = { email: string; password: string }

const AuthContext = createContext({} as any)

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    async function AuthLogin(data: LoginData) {
        setLoading(prev => !prev)

        try {
            const { data: response } = await api.post('/auth/login', {
                ...data,
            })
            api.defaults.headers.common['authorization'] = response
            localStorage.setItem('token', response)

            const { data: user } = await api.get('/user')

            console.log(user)

            setUser(user)
        } catch (error) {}
        setLoading(prev => !prev)
    }

    return (
        <AuthContext.Provider value={{ AuthLogin, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

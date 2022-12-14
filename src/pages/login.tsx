import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsCaretLeftFill } from 'react-icons/bs'
import Button from '@atoms/Button'
import Input from '@atoms/Input'
import Link from '@atoms/Link'
import { LoginData, useAuth } from 'context/auth'

const fields = {
    email: 'translate-x-0',
    password: '-translate-x-[67%]',
}

const messages = {
    email: () => 'Qual é seu email?',
    password: (email = '') => (
        <>
            Acessando com <b>{email}</b>
        </>
    ),
}

const labelButton = {
    email: 'Continue',
    password: 'Entrar',
}

const Login = () => {
    const { Auth, loading } = useAuth()
    const [type, setType] = useState<keyof typeof fields>('email')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setFocus,
    } = useForm<LoginData>()
    const { email } = watch()

    const focusInput = useCallback((typeParam: keyof typeof fields) => {
        setType(typeParam)
        setTimeout(() => {
            setFocus(typeParam)
        }, 500)
    }, [])

    const toogleType = useCallback(() => {
        if (type === 'email') {
            focusInput('password')
        } else {
            focusInput('email')
        }
    }, [focusInput])

    const onSubmit = (data: LoginData) => {
        if (type === 'email') toogleType()
        else {
            Auth(data)
        }
    }

    return (
        <div className="relative h-screen flex justify-center p-10">
            {type === 'password' && (
                <Button
                    onClick={toogleType}
                    className="absolute top-8 left-10 text-base text-white rounded-full cursor-pointer px-3 py-3"
                >
                    <BsCaretLeftFill />
                </Button>
            )}

            <Link className="absolute top-10 right-10 underline " to="/signup">
                Criar uma conta
            </Link>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full overflow-hidden flex flex-col justify-center gap-10"
            >
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-medium">Entrar</h1>
                    <h2 className="text-sm text-black text-opacity-70">
                        {messages[type](email)}
                    </h2>
                </div>
                <div
                    className={`flex justify-between w-[300%] mt-3 transition-all duration-500 ${fields[type]}`}
                >
                    <Input
                        className="w-[33%]"
                        type="email"
                        placeholder="Email"
                        inputMode="email"
                        {...register('email')}
                    />
                    <Input
                        className="w-[33%]"
                        type="password"
                        placeholder="Senha"
                        {...register('password')}
                    />
                </div>

                <Button disabled={loading} type="submit" className="w-full">
                    {loading ? 'Entrando' : labelButton[type]}
                </Button>
            </form>
        </div>
    )
}

export default Login

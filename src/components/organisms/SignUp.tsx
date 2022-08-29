import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsCaretLeftFill } from 'react-icons/bs'
import Button from '@atoms/Button'
import Link from '@atoms/Link'
import Input from '@atoms/Input'
import { useNavigate } from 'react-router'

const fields = {
    email: 'translate-x-0',
    personInfo: '-translate-x-2/3',
}

const labelButton = {
    email: 'Continue',
    personInfo: 'Cadastro',
}

const SignUp = () => {
    const navigate = useNavigate()
    const [type, setType] = useState<keyof typeof fields>('email')
    const { register, handleSubmit, setFocus } = useForm()

    const toogleType = () => {
        if (type === 'email') {
            setType('personInfo')
            setTimeout(() => {
                setFocus('firstName')
            }, 500)
        } else {
            setType('email')
            setTimeout(() => {
                setFocus('email')
            }, 500)
        }
    }

    const onSubmit = useCallback((data: any) => {
        if (type === 'email') {
            toogleType()
        } else {
            console.log(data)
        }
    }, [])

    return (
        <div className="relative h-screen p-10">
            <Button
                onClick={() => {
                    if (type === 'email') {
                        navigate('/')
                    } else {
                        toogleType()
                    }
                }}
                className="absolute top-8 left-10 text-base text-white rounded-full cursor-pointer px-3 py-3"
            >
                <BsCaretLeftFill />
            </Button>
            <Link className="absolute top-10 right-10 underline text-xs" to="/">
                Tem uma conta? Acesse
            </Link>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full overflow-hidden flex flex-col justify-center gap-10"
            >
                <h1 className="text-3xl font-medium">Cadastro</h1>
                <div
                    className={`grid grid-cols-3 justify-between w-[300%] mt-3 transition-all duration-500 ${fields[type]}`}
                >
                    <div className="flex flex-col gap-4 col-span-1">
                        <Input
                            className="w-full"
                            type="email"
                            placeholder="Email"
                            inputMode="email"
                            {...register('email')}
                        />
                        <Input
                            className="w-full"
                            type="password"
                            placeholder="Senha"
                            {...register('password')}
                        />
                        <Input
                            className="w-full"
                            type="password"
                            placeholder="Confirmação de senha"
                            {...register('confirmPassword')}
                        />
                    </div>
                    <div className="flex flex-col gap-8 justify-center  col-span-1 col-start-3">
                        <Input
                            className="w-full"
                            type="text"
                            placeholder="Nome"
                            {...register('firstName')}
                        />
                        <Input
                            className="w-full"
                            type="text"
                            placeholder="Sobrenome"
                            {...register('lastName')}
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full">
                    {labelButton[type]}
                </Button>
            </form>
        </div>
    )
}

export default SignUp

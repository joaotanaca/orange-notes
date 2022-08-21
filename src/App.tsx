import { useState } from 'react'
import Button from './components/atoms/Button'
import Input from './components/atoms/Input'

function App() {
    const [email, setEmail] = useState('')
    const [type, setType] = useState<keyof typeof types>('email')
    const types = {
        email: 'translate-x-0',
        password: '-translate-x-[67%]',
    }
    return (
        <div className="relative h-screen flex justify-center p-10">
            {type === 'password' && (
                <a
                    onClick={() => {
                        setType('email')
                    }}
                    className="absolute top-10 left-10 text-[14px] text-link cursor-pointer"
                >
                    Voltar
                </a>
            )}

            <a
                className="absolute top-10 right-10 underline text-[14px] text-link"
                href="/"
            >
                Create a Account
            </a>
            <form
                onSubmit={event => {
                    event.preventDefault()
                    event.stopPropagation()
                }}
                className="w-full overflow-hidden flex flex-col justify-center gap-10"
            >
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl font-semibold tracking-[0.05rem]">
                        Log In
                    </h1>
                    <h2 className="text-sm text-black text-opacity-70 tracking-wide">
                        {type === 'password' && email ? (
                            <>
                                Useing <b>{email}</b> to log in
                            </>
                        ) : (
                            "What's your email?"
                        )}
                    </h2>
                </div>
                <div
                    className={`flex justify-between w-[300%] mt-3 transition-all duration-500 ${types[type]}`}
                >
                    <Input
                        className="w-[33%]"
                        type="email"
                        placeholder="YOUR EMAIL"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        className="w-[33%]"
                        type="password"
                        placeholder="YOUR PASSWORD"
                    />
                </div>

                <Button
                    type="submit"
                    onClick={() => {
                        if (type === 'email') setType('password')
                    }}
                    className="w-full"
                >
                    Continue
                </Button>
            </form>
        </div>
    )
}

export default App

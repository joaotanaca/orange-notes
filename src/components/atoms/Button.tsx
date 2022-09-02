import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>

const Button = ({ children, className, ...props }: Props) => {
    return (
        <button
            className={`transition-all flex justify-center items-center gap-1 px-8 py-4 rounded-xl text-white text-base font-medium bg-brand hover:bg-brandHover active:bg-brandActive disabled:opacity-60 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button

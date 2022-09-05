import { PropsWithChildren, useMemo } from 'react'

type Props = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>

const Button = ({ children, className, ...props }: Props) => {
    const padding = useMemo(
        () => (!className?.match(/p-|px-|py-/g) ? 'px-8 py-4' : ''),
        [className]
    )

    const rounded = useMemo(
        () => (!className?.match(/rounded-/g) ? 'rounded-xl' : ''),
        [className]
    )

    return (
        <button
            className={`transition-all flex justify-center items-center gap-1 text-white text-base font-medium bg-brand hover:bg-brandHover active:bg-brandActive disabled:opacity-60 ${padding} ${rounded} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button

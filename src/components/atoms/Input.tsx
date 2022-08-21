import { createRef, useState } from 'react'

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

const Input = ({ className, onChange, ...props }: Props) => {
    const [text, setText] = useState('')
    return (
        <div className={`relative ${className}`}>
            <label
                className={`-z-[1] absolute transition-all text-black left-4 outline-0 ${
                    text
                        ? 'bottom-14 text-opacity-60 text-xs'
                        : 'bottom-4 text-opacity-30 text-sm'
                }`}
                htmlFor={props.name}
            >
                {props.placeholder}
            </label>
            <input
                {...props}
                className="p-4 z-10 bg-transparent border-b-[1px] border-b-[rgba(17, 17, 17, 0.32)] focus:outline-none placeholder:text-transparent w-full"
                onChange={event => {
                    event.preventDefault()
                    event.stopPropagation()
                    setText(event.currentTarget.value)
                    onChange?.(event)
                }}
            />
        </div>
    )
}

export default Input

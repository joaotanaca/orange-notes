import { forwardRef, useMemo, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

const Input = forwardRef<HTMLInputElement, Props>(
    ({ className, onChange, type, ...props }, ref) => {
        const [text, setText] = useState('')
        const [showPassword, setShowPassword] = useState(false)

        const handleChangeText = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            event.preventDefault()
            event.stopPropagation()
            setText(event.target.value)
            onChange?.(event)
        }

        const RenderIconPassword = useMemo(
            () => (showPassword ? AiFillEye : AiFillEyeInvisible),
            [showPassword]
        )

        const handleToogleShowPassword = () => setShowPassword(prev => !prev)

        return (
            <div className={`relative ${className}`}>
                <label
                    className={`-z-[1] absolute transition-all text-black left-4 outline-0 ${
                        text
                            ? 'bottom-14 text-opacity-60 text-xs'
                            : 'bottom-5 text-opacity-30 text-sm'
                    }`}
                    htmlFor={props.name}
                >
                    {props.placeholder}
                </label>
                <input
                    ref={ref}
                    className="p-4 z-10 bg-transparent border-b-[1px] border-b-[rgba(17, 17, 17, 0.32)] focus:outline-none placeholder:text-transparent w-full"
                    onChange={handleChangeText}
                    type={type === 'password' && showPassword ? 'text' : type}
                    {...props}
                />
                {type === 'password' && (
                    <div
                        className="absolute right-0 bottom-[1.27rem]"
                        onClick={handleToogleShowPassword}
                    >
                        <RenderIconPassword size={20} />
                    </div>
                )}
            </div>
        )
    }
)

export default Input

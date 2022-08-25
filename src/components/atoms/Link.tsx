import { PropsWithChildren } from 'react'
import { Link as Anchor, LinkProps } from 'react-router-dom'

const Link = ({
    children,
    className,
    ...props
}: PropsWithChildren<LinkProps>) => {
    return (
        <Anchor className={`text-[14px] text-link ${className}`} {...props}>
            {children}
        </Anchor>
    )
}

export default Link

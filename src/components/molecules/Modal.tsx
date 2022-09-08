import { memo, PropsWithChildren } from 'react'

const Modal = ({ children }: PropsWithChildren) => {
    return (
        <div className="fixed top-0 left-0 bg-black z-50 bg-opacity-70 w-full h-full p-8 flex items-center justify-center">
            <div className="modal bg-white mx-auto w-full max-h-full rounded-3xl overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default memo(Modal)

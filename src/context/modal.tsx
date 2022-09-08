import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useState,
} from 'react'

const ModalContext = createContext(
    {} as { showModal: boolean; toogleShowModal: () => void }
)

export const ModalProvider = ({ children }: PropsWithChildren) => {
    const [showModal, setShowModal] = useState(false)
    const toogleShowModal = useCallback(
        () => setShowModal(prev => !prev),
        [setShowModal]
    )

    return (
        <ModalContext.Provider value={{ showModal, toogleShowModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

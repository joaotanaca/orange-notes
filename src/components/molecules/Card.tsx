import { memo, PropsWithChildren, useCallback } from 'react'
import CircleProgress from '@atoms/CircleProgress'
import { useModal } from '@context/modal'

export type CardProps = {
    id?: string
    title: string
    description: string
    percentage: number
}

const Card = ({
    id,
    title,
    description,
    percentage,
}: PropsWithChildren<CardProps>) => {
    const { toogleShowModal } = useModal()

    const handleOnClick = useCallback(() => {
        window.history.replaceState(null, '', `/dashboard/details-task/${id}`)
        toogleShowModal()
    }, [id])

    return (
        <div
            onClick={handleOnClick}
            className="grid grid-cols-12 bg-lightBlue-100 rounded-2xl p-4"
        >
            <div className="col-span-10">
                <h2 className="text-xl">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <div className="col-span-2">
                <CircleProgress percentage={percentage} />
            </div>
        </div>
    )
}

export default memo(Card)

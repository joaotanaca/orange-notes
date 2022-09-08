import React, { memo, useMemo } from 'react'
import Card from '@molecules/Card'
import type { CardProps } from '@molecules/Card'

const Cards: React.FC<{ items: CardProps[] }> = ({ items: cards }) => {
    const renderCards = useMemo(
        () =>
            cards.map((card, index) => (
                <Card key={card?.id || index} {...card} />
            )),
        [cards]
    )
    return <div className="flex flex-col gap-4">{renderCards}</div>
}

export default memo(Cards)

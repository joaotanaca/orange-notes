import Cards from '@organisms/Cards'
import React from 'react'

const Dashboard: React.FC = () => {
    return (
        <div className="w-full px-6 py-8">
            <Cards
                items={[
                    {
                        title: 'Teste titulo',
                        description: 'Teste description',
                        percentage: 50,
                    },
                    {
                        title: 'Teste titulo',
                        description: 'Teste description',
                        percentage: 50,
                    },
                    {
                        title: 'Teste titulo',
                        description: 'Teste description',
                        percentage: 50,
                    },
                    {
                        title: 'Teste titulo',
                        description: 'Teste description',
                        percentage: 50,
                    },
                ]}
            />
        </div>
    )
}

export default Dashboard

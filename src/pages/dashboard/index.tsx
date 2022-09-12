import Cards from '@organisms/Cards'
import { api } from '@services/index'
import React, { useEffect, useState } from 'react'

const Dashboard: React.FC = () => {
    const [tasks, setTasks] = useState<any>([])
    useEffect(() => {
        api.get('/task').then(({ data }) => {
            setTasks(data)
        })
    }, [])

    return (
        <div className="w-full px-6 py-8">
            <Cards items={tasks} />
        </div>
    )
}

export default Dashboard

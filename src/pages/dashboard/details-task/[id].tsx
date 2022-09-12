import Button from '@atoms/Button'
import { api } from '@services/index'
import { useEffect, useState } from 'react'
import { BsCaretLeftFill } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router'

const DetailsTask = () => {
    const [task, setTask] = useState(
        {} as {
            title: string
            subtitle: string
            description: string
            subtasks: { title: string; checked: boolean }[]
        }
    )
    const { id } = useParams()
    const navigate = useNavigate()

    const handleGetTask = async () => {
        const { data } = await api.get(`/task/${id}`)
        setTask(data)
    }

    useEffect(() => {
        handleGetTask()
    }, [])

    return (
        <div className="flex flex-col gap-4 p-6">
            <nav className="relative w-full flex justify-center items-center">
                <Button
                    onClick={() => {
                        navigate(-1)
                    }}
                    className="absolute left-0 text-base text-white rounded-full cursor-pointer px-3 py-3"
                >
                    <BsCaretLeftFill />
                </Button>
                <h2 className="font-semibold text-lg">Detalhes da tarefa</h2>
            </nav>
            <div className="mt-2">
                <h1 className="text-[2rem] font-semibold">{task?.title}</h1>
                <p className="text-base">{task?.subtitle}</p>
            </div>
            <div>
                <p className="text-lg font-semibold">Description</p>
                <p className="text-sm text-gray-600">{task?.description}</p>
            </div>
        </div>
    )
}

export default DetailsTask

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@atoms/Button'
import Input from '@atoms/Input'
import { useAuth } from '@context/auth'
import { api } from '@services/index'
import { useNavigate } from 'react-router-dom'

type Fields = {
    title: string
    subtitle: string
    description: string
}

type Subtasks = { title: string; checked: boolean }[]

const AddTask: React.FC = () => {
    const { user } = useAuth()
    const [subtasks, setSubtasks] = useState<Subtasks>([])
    const navigate = useNavigate()
    // const [activeSubtask, setActiveSubtask] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Fields>()

    const onSubmit = async (data: Fields) => {
        try {
            const response = await api.post<{ id: string }>('/task', {
                ...data,
                subtasks,
                userId: user.id,
            })
            navigate(`/dashboard/details-task/${response.data.id}`)
        } catch (err) {}
    }

    // const handleCaptureEnter = useCallback(
    //     (event: KeyboardEvent<HTMLInputElement>) => {
    //         if (event.key === 'Enter') {
    //             event.preventDefault()
    //             event.stopPropagation()

    //             setSubtasks(prev => [
    //                 ...prev,
    //                 { title: activeSubtask, checked: false },
    //             ])
    //             setActiveSubtask('')
    //         }
    //     },
    //     [activeSubtask]
    // )

    // const handleChangeSubtask = useCallback(
    //     (event: ChangeEvent<HTMLInputElement>) => {
    //         event.preventDefault()
    //         event.stopPropagation()
    //         setActiveSubtask(event?.currentTarget?.value)
    //     },
    //     []
    // )

    // const renderSubtasks = useMemo(
    //     () =>
    //         subtasks.map((subtask, index) => (
    //             <li key={`${subtask.title}-${index}`}>{subtask.title}</li>
    //         )),
    //     [subtasks]
    // )

    return (
        <form
            className="flex flex-col justify-between gap-4 pb-[80px] min-h-screen p-8 pt-12"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-12">
                <Input placeholder="Titulo" {...register('title')} />
                <Input placeholder="Subtitulo" {...register('subtitle')} />
                <Input placeholder="Descrição" {...register('description')} />
                {/* <Input
                    placeholder="Subtarefas"
                    value={activeSubtask}
                    onChange={handleChangeSubtask}
                    onKeyDown={handleCaptureEnter}
                />

                <ul className="flex flex-col gap-4">{renderSubtasks}</ul> */}
            </div>
            <Button type="submit">Criar task</Button>
        </form>
    )
}

export default AddTask

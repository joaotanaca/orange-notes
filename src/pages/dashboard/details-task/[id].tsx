import Button from '@atoms/Button'
import { useModal } from '@context/modal'
import SubTask from '@molecules/SubTask'
import SubTasks from '@organisms/SubTasks'
import { BsCaretLeftFill, BsThreeDots } from 'react-icons/bs'
import { useNavigate } from 'react-router'

const DetailsTask = () => {
    const { showModal, toogleShowModal } = useModal()
    const navigate = useNavigate()

    return (
        <div className="p-8 flex flex-col gap-4">
            <nav className="relative w-full flex justify-center items-center">
                <Button
                    onClick={() => {
                        if (showModal) {
                            window.history.replaceState(null, '', '/dashboard')
                            toogleShowModal()
                        } else {
                            navigate(-1)
                        }
                    }}
                    className="absolute left-0 text-base text-white rounded-full cursor-pointer px-3 py-3"
                >
                    <BsCaretLeftFill />
                </Button>
                <h2 className="font-semibold text-lg">Detalhes da tarefa</h2>
            </nav>
            <div className="mt-2">
                <h1 className="text-[2rem] font-semibold">Titulo</h1>
                <p className="text-base">Subtitulo</p>
            </div>
            <div>
                <p className="text-lg font-semibold">Description</p>
                <p className="text-sm text-gray-600">texto descritivo</p>
            </div>
            <div>
                <p className="text-lg font-semibold mb-4">Subtarefas</p>
                <div className="">
                    <SubTasks
                        items={[
                            { title: 'Subtarefa', checked: true },
                            { title: 'Subtarefa' },
                            { title: 'Subtarefa' },
                            { title: 'Subtarefa', checked: true },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsTask

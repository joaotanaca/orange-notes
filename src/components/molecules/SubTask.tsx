import { Checkbox, useCheckboxState } from 'pretty-checkbox-react'
import { MdOutlineCheck } from 'react-icons/md'

export type SubTaskProps = {
    id?: string
    title: string
    checked?: boolean
}

const SubTask = ({ title, checked = false }: SubTaskProps) => {
    const checkbox = useCheckboxState({ state: checked })
    return (
        <div
            className={`flex gap-3 p-4 rounded-md ${
                checkbox.state && 'border-[#5cb85c] border-[1px]'
            }`}
        >
            <Checkbox
                shape="curve"
                color="success"
                className="w-full"
                animation="jelly"
                style={{ fontSize: 18 }}
                icon={<MdOutlineCheck className="svg" data-type="svg" />}
                {...(checkbox as any)}
            >
                {title}
            </Checkbox>
        </div>
    )
}

export default SubTask

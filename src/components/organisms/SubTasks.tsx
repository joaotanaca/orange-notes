import React, { memo, useMemo } from 'react'
import type { SubTaskProps } from '@molecules/SubTask'
import SubTask from '@molecules/SubTask'

const SubTasks: React.FC<{ items: SubTaskProps[] }> = ({ items: subtasks }) => {
    const renderSubtasks = useMemo(
        () =>
            subtasks.map((subtask, index) => (
                <SubTask key={subtask?.id || index} {...subtask} />
            )),
        [subtasks]
    )
    return <div className="flex flex-col gap-4">{renderSubtasks}</div>
}

export default memo(SubTasks)

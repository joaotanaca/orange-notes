import React, { memo, useMemo } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

const CircleProgress: React.FC<{ percentage?: number }> = ({
    percentage = 50,
}) => {
    return (
        <CircularProgressbar
            className="font-medium"
            styles={buildStyles({
                pathColor: '#526eff',
                textColor: '#526eff',
                textSize: '24px',
            })}
            value={percentage}
            text={`${percentage}%`}
        />
    )
}

export default memo(CircleProgress)

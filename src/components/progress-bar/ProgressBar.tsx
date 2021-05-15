import React from 'react'
import ChildrenImpl from '../../props/ChildrenImpl'

interface ProgressBarImpl extends ChildrenImpl {
    percent: number
}

const ProgressBar: React.FC<ProgressBarImpl> = ({children, percent}) => (
    <div className="progress-bar">
        <div className="progress-bar--inside" style={{width: `${percent}%`}}>
        </div>
        <div className="progress-bar--body">
            {children}
        </div>
    </div>
)

export default ProgressBar
import React from 'react';
import projectInfo from "./projectInfo.module.css"

const ProjectInfo = ({children}) => (
    <div className={projectInfo.container}>
        <p className={projectInfo.text}>{children}</p>
    </div>
)

export default ProjectInfo
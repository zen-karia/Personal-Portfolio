import React from 'react'
import { ProjectsText } from './ProjectsText'
import { SingleProject } from './SingleProject'

const Projects = () => [{
    name: '',
    align: '',
    image: '',
    link: '#',
}]
export const ProjectsMain = () => {
  return (
    <div>
        <ProjectsText />
        <div>
            <SingleProject />
        </div>
    </div>
  )
}

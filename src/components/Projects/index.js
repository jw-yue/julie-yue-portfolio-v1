import React from 'react'
import Icon1 from '../../images/task.png'
import Icon2 from '../../images/weather.png'
import Icon4 from '../../images/color.png'
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  Projectdiv,
} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard
          href="https://julzevias.github.io/weather2/"
          target="_blank"
        >
          <Projectdiv>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Weather Application</ProjectsH2>
            <ProjectsP>
              Search a location for the weather. Includes custom API calls,
              reactive icons, and BootStrap.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>

        <ProjectsCard
          href="https://julzevias.github.io/react-task-tracker/"
          target="_blank"
        >
          <Projectdiv>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Task Management</ProjectsH2>
            <ProjectsP>
              Keep track of tasks in a productivity application. Heavily
              utilizes State and the date-picker library.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>

        <ProjectsCard
          href="https://julzevias.github.io/color-generator/"
          target="_blank"
        >
          <Projectdiv>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2>Color Generator</ProjectsH2>
            <ProjectsP>
              Generates tints and shades of a color of user choice with States.
              Can copy values in hex to clipboard.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects

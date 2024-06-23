// import projects from "./projects.json" assert { type: "json" }
import { getJsonData, getProjectTemplate, getSocialsAccountTemplate } from './utils.js'

const ui = {
  showButton: () => document.querySelector('.show-all-btn'),
  showButton2: () => document.querySelector('.show-all-btn2'),
  hiddenContainer: () => document.querySelector('.varying'),

  projectsHeader: () => document.querySelector('.projects-header'),
  projectContainers: () => document.getElementById('project-containers'),

  // for socials accounts
  mediaLinks: () => document.getElementById('media-links')
}

const toggleBtnDisplay = () => {
  ui.showButton().classList.toggle('show-all-btn-display')
  ui.showButton2().classList.toggle('show-all-btn-display')
}

function renderProjectsUi (projects = []) {
  ui.projectContainers().innerHTML = ''

  projects?.forEach((project) => {
    ui.projectContainers().innerHTML += getProjectTemplate(project)
  })
}

// RENDERING PROJECTS

getJsonData('projects.json')
  .then((projects) => {
    ui.showButton().addEventListener('click', () => {
      // show more button
      toggleBtnDisplay()

      renderProjectsUi(projects)
    })

    ui.showButton2().addEventListener('click', () => {
      // show less button
      toggleBtnDisplay()

      renderProjectsUi(projects.slice(0, 6))

      ui.projectsHeader().scrollIntoView()
    })

    renderProjectsUi(projects.slice(0, 6))
  })

// RENDERING SOCIALS

getJsonData('socials.json')
  .then((socials) => {
    console.log({ socials })
    socials?.forEach((mediaLink) => {
      ui.mediaLinks().innerHTML += getSocialsAccountTemplate(mediaLink)
    })
  })

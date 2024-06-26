/**
 * Doing this because of the way github behaves with absolute paths.
 * I need to include the repo name if it's deployed online. "Portfolio" is the repository's name
*/
const getRootPath = () => {
  return window.location.hostname.toLowerCase().includes('github') ? '/Portfolio/' : '/'
}

/**
 * @argument filename which is a json file in the scripts section
*/
const getJsonData = async (filename) => {
  return fetch(`${getRootPath()}assets/json/${filename}`).then(res => res.json())
}

// TEMPLATES

/**
 * @argument project The project to render
 * @returns A single project template
*/
const getProjectTemplate = (project) => {
  return (`
    <div class="container">
      <a class="a-tag" href="${project.url}" target="_blank">
          <img src="${getRootPath()}assets/images/${project['image-name']}" alt="image of a ${project.title.toLowerCase().split(' ').join('-')} project">
          <div class="container-caption"><span>&#60;</span> ${project.title} <span>/&#62;</span></div>
      </a>
    </div>
  `)
}

/**
 * @argument socialAccount Which is the account info
 * @returns A social account template
*/
const getSocialsAccountTemplate = (socialAccount) => {
  return (`
    <div>
      <a href="${socialAccount.href}" class="media" target="_blank">
        <i class="${socialAccount['fa-icon-class']}"></i>
        ${socialAccount.text}
        </a>
    </div>
  `)
}

export {
  getJsonData,
  getProjectTemplate,
  getSocialsAccountTemplate
}

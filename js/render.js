const createElement = (element = '', className = '', childTex = '') => {

    const el = document.createElement(element)

    el.setAttribute('class', className !== '' ? className : '')
    el.textContent = childTex !== '' ? childTex : ''

    return el

}

const userInfo = (userInfo) => {

    const divContentUser = createElement('div', 'content__user', '')
    const avatar = createElement('div', 'content__avatar', '')
    const imgAvatar = createElement('img', 'content__avatar', '')
    const user = createElement('h2', 'item', userInfo.user)
    const userName = createElement('p', 'item', userInfo.userName)

    imgAvatar.setAttribute('src', userInfo.urlAvatar)
    avatar.appendChild(imgAvatar)

    divContentUser.appendChild(avatar)
    divContentUser.appendChild(user)
    divContentUser.appendChild(userName)

    return divContentUser

}

const userMoreInfo = (userInfo) => {

    const divContentMoreInfo = createElement('div', 'content__more_information', '')
    const bio = createElement('p', 'bio', `${userInfo.bio !== null ? userInfo.bio : 'No hay biografia'}`)
    const reposCount = createElement('p', 'item__more-info', `Repositorios públicos: ${userInfo.repos}`)
    const followers = createElement('p', 'item__more-info', `Seguidores: ${userInfo.followers}`)

    divContentMoreInfo.appendChild(bio)
    divContentMoreInfo.appendChild(reposCount)
    divContentMoreInfo.appendChild(followers)

    return divContentMoreInfo

}

const notFound = () => {

    const divContent = createElement('div', 'not_found', '')
    const title = createElement('h2', 'title_not_found', 'No se ha encontrado el perfil, busca de nuevo.😫')
    const divContentImg = createElement('div', 'img__not-found-content', '')
    const img = createElement('img', '', '')

    img.setAttribute('src', './images/thanos_dance.gif')

    divContentImg.appendChild(img)

    divContent.appendChild(title)
    divContent.appendChild(divContentImg)

    return divContent

}

export {
    userInfo,
    userMoreInfo,
    notFound
}
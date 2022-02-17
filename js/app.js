import { getUser } from './api.js'
import { parseData } from './parseData.js'
import {userInfo, userMoreInfo} from './render.js'
//TODO: verificar cuando la respuesta es 404
const searchBtn = document.getElementById('btn_search')

searchBtn.addEventListener('click', async (e) => {

    const root = document.getElementById('render_info')
    const userSearch = document.getElementById('search')
    const data = await getUser(userSearch.value)
    //await getUser(userSearch.value)

    if (data.status === 200) {
        
        const user = userInfo( parseData( data ) )
        const  moreInfoUser = userMoreInfo( parseData( data ) )
        
        root.innerHTML = ''
        root.appendChild(user)
        root.appendChild(moreInfoUser)

    }

    if (data.status === 404) {
        root.innerHTML = 'No se encontro el perfil'
    }

    userSearch.value = ''

})
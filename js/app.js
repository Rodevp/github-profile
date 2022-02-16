import { getUser } from './api.js'
import { parseData } from './parseData.js'
import {userInfo, userMoreInfo} from './render.js'

const searchBtn = document.getElementById('btn_search')




searchBtn.addEventListener('click', async (e) => {

    const userSearch = document.getElementById('search')
    const data = parseData( await getUser(userSearch.value) )

    const root = document.getElementById('render_info')
    const user = userInfo( data )
    const  moreInfoUser = userMoreInfo( data )

    root.innerHTML = ''

    root.appendChild(user)
    root.appendChild(moreInfoUser)
    userSearch.value = ''
    //console.log(parseData( await getUser('Rodevp') ) )

})
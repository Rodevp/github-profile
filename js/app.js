import { getUser } from './api.js'


const searchUser = async () => {
    console.log(  await  getUser('Rodevp') )
}

searchUser()
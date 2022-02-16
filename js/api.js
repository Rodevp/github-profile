const uri_get_user = (user) => `https://api.github.com/users/${user}`

const getUser = async (user) => {

    let dataResponse;

    try {
        const response = await fetch( uri_get_user(user) )
        
        if (response.status === 404) {
            dataResponse = {
                message: 'Usuario no encontrado',
                status: response.status
            }
            return dataResponse
        }

        if (response.status === 200) {
            dataResponse = await response.json()
            dataResponse.status = 200
        }

    } catch (error) {
        console.error( new Error('Ha fallado la petición'), error )
    }

    return dataResponse
}

export {
    getUser
}
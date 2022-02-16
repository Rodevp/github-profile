const parseData = (profile) => {

    let parseDataProfile;

    for (const key in profile) {
        
        parseDataProfile = {
            user: profile.login,
            urlAvatar: profile.avatar_url,
            userName: profile.name,
            bio: profile.bio,
            repos: profile.public_repos,
            followers: profile.followers
        
        }
    }

    return parseDataProfile

}

export {
    parseData
}
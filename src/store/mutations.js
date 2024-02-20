export function setUser(state, userDataFromCommit) {
    state.user.data = userDataFromCommit
}

export function setUsers(state, usersDataFromCommit) {
    state.users = usersDataFromCommit
}

export function setToken(state, tokenDataFormCommit){
    state.user.token = tokenDataFormCommit
    if(tokenDataFormCommit){
        sessionStorage.setItem('TOKEN', tokenDataFormCommit)
    } else {
        sessionStorage.removeItem('TOKEN')
    }
}

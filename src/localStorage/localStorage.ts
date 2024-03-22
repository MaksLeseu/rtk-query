export const saveToken = (token: string) => {
    if (token) {
        localStorage.setItem('token', JSON.stringify(token))
    }
}

export const checkToken = () => {
    const token = localStorage.getItem('token')
    if (token)
        return JSON.parse(token)
}

export const removeToken = () => {
    localStorage.removeItem('token')
}
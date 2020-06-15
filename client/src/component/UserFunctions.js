import axios from 'axios'

export const register = newUser => {
    return axios.post('users/register', {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        emmail: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log('Registered!')
    })
}

export const login = user => {
    return axios.post('users/login' , {
        email: user.email,
        passsword: user.password
    })
    .then(res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

export default UserFunctions;
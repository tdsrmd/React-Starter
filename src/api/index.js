import axios from 'axios'

export const BASE_URL = 'http://localhost:5001/api/v1'

const API = axios.create({ baseURL: BASE_URL })

API.interceptors.request.use((req) => {
  const user = localStorage.getItem('user')

  if (user !== null) {
    const { token } = JSON.parse(user)
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
  }
  return req
})

const requests = {
  auth: {
    login: (body) => API.post('/auth/login', body)
  }
}

export default requests

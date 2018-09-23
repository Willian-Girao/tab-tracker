import axios from 'axios'

// Points to the server to reach the endpoints.
export default () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8081'
  })
  return instance
}

import axios from 'axios'

// Points to the server to reach the endpoints.
export default () => {
  return axios.create({
    baseURL: `http://localhost/8081/`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })
}

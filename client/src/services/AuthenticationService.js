// Imports axios intance to consume api endpoints.
import Api from '@/services/Api'

// Object containing methods to interact with the endpoints.
export default {
  register (credentials) {
    return Api().post('/register', credentials)
  },
  login (credentials) {
    return Api().post('/login', credentials)
  }
}

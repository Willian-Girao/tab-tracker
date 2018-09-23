<template>
  <div>
    <h1>REGISTER</h1>
    <input 
     type="email" 
     name="email" 
     v-on:input="email = $event.target.value"
     placeholder="email@email.com"/>
    <input type="password"
     name="password"
     v-on:input="password = $event.target.value"
     placeholder="password"/>
    <button v-on:click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register()
      console.log(response)
    }
  }
}
</script>

<style>
</style>

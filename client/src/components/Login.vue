<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :append-icon="visible ? 'visibility_off' : 'visibility'"
              :type="visible ? 'text' : 'password'"
              @click:append="visible = !visible"
              label="Password"
            ></v-text-field>
          </v-form>
          <v-btn v-if="pass_check === false && email_check === false" disabled class="cyan" v-on:click="login">Login</v-btn>
          <v-btn v-else class="cyan" v-on:click="login" dark>Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      visible: false,
      email_check: false,
      pass_check: false,
      emailRules: [
        v => {
          if (/.+@.+/.test(v) === false) {
            return 'E-mail must be valid'
          }
          if (!!v === false) {
            return 'E-mail is required'
          }
          this.email_check = true
        }
      ],
      passwordRules: [
        v => {
          if (!!v === false) {
            return 'Password is required'
          }
          if (v.length < 5) {
            return 'Password must have length at least 5'
          }
          if (/^[a-zA-Z0-9]+$/.test(v) === false) {
            return 'Password must contain only letters and/or numbers' // .test() method tests for a match in a string.
          }
          this.pass_check = false
        }
      ]
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: brown;
  }
</style>
  
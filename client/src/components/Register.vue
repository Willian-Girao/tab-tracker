<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
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
          <v-btn class="cyan" v-on:click="register">Register</v-btn>
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
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid' // .test() method tests for a match in a string.
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v.length > 4) || 'Password must have length at least 5',
        v => /^[a-zA-Z0-9]+$/.test(v) || 'Password must contain only letters and/or numbers' // .test() method tests for a match in a string.
      ]
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
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

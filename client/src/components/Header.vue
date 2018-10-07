<template>
    <v-toolbar class="cyan" dark>
        <v-toolbar-items>
            <v-btn class="navButton" flat dark @click="navigateTo('root')">
                TabTracker
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn class="navButton" flat dark>
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isLoggedIn" class="navButton" flat dark @click="navigateTo('login')">
                Login
            </v-btn>
            </v-toolbar-items>
        <v-toolbar-items>
            <v-btn v-if="!$store.state.isLoggedIn" class="navButton" flat dark @click="navigateTo('register')">
                Sign Up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
            <v-btn v-if="$store.state.isLoggedIn" class="navButton" flat dark @click="navigateTo('register')">
                Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
  .navButton {
    cursor: pointer;
  }
  .navButton:hover {
    color: black;
  }
</style>
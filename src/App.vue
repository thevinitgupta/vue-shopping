<template>
  <h1>Terra Shopping</h1>
  <Signup/>
</template>

<script>
import Signup from "./components/Signup";
export default {
  name: 'App',
  components: {
    Signup
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

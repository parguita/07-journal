<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
    <button @click="goToDayBook" class="btn btn-info">info</button>
    <button @click="goToDayBook" class="btn btn-warning">warning</button>
    <button @click="goToDayBook" class="btn btn-danger">danger</button>
    <button @click="goToDayBook" class="btn btn-light">light</button>
    <button @click="goToDayBook" class="btn btn-dark">dark</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goToDayBook() {
        this.$router.push({name: 'no-entry'})
      }
    }
  }
</script>
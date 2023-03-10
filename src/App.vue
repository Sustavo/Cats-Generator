<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script>
  import TheFooter from "./components/TheFooter.vue"

export default {
  components: {
    TheFooter
  }
}
</script>
<style>
body {
  background: #C0FBF4;
  margin: 0;
}

main {
  height: 100vh;
}

</style>

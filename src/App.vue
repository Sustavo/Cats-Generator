<template>
  <div id="app">
    <header>
      <TheHeader />
    </header>
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
  import TheHeader from "./components/TheHeader.vue"

export default {
  components: {
    TheFooter,
    TheHeader
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

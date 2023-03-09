<template>
  <div class="home">
    <div class="main">
      <ButtonFrog @button-clicked="handleButton" />
      <ButtonAbout @button-clicked="goToAbout"/>
    </div>
  </div>
</template>

<script>
import ButtonAbout from '@/components/ButtonAbout.vue'
import ButtonFrog from '@/components/ButtonFrog.vue'

export default {
  name: 'HomeView',
  components: {
    ButtonAbout,
    ButtonFrog
  },
  data() {
    return {
    }
  },
  methods: {
    handleButton() {
      this.$router.push('/CatGenerator');
    },
    goToAbout() {
      this.$router.push('/about');
    }
  }
}
</script>
<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

</style>

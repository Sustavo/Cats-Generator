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

}
</script>
<style scoped>

</style>

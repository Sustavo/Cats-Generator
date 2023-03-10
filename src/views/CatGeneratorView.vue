<template>
  <div class="main">
    <ul>
      <li v-for="cat in cats" :key="cat.id">
        <img :src="cat.url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "CatGeneratorView",
  data() {
    return {
      cats: [],
    }
  },
  methods: {
    getCats() {
      axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => {
          this.cats = response.data
        })
        .catch(error => {
          console.error(error);
        });
        
    }
  },
  created() {
    this.getCats();
  }

}
</script>

<style scoped>
.main {
  display: flex;
  margin: 15vh 0;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
}

img {
  width: 382px;
  height: 260px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
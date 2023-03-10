<template>
  <div class="main">
    <img @click="handleClick" src="../assets/cat-logo.png" alt="">
  </div>
</template>

<script>
export default {
    name: "TheHeader",
    methods: {
        handleClick() {
            if(this.$route.path !== "/") {
                this.$router.push("/");
            }
        }
    }


}
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    height: 80px;
    background: #6EB5FF;
}

img {
    width: 120px;
    cursor: pointer;
    margin-bottom: 10px;
}

img:hover {
    transform: scale(1.10);
}
</style>
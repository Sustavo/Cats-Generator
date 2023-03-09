<template>
  <div class="main">
    <button @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
    name: "ButtonAbout",
    props: {
        buttonText: {
            type: String,
            default: 'about me'
        }
    },
    methods: {
        handleClick() {
            this.$emit("button-clicked")
        }
    }
}
</script>

<style scoped>
button {
    background: #D9D9D9;
    width: 171px;
    height: 55px;
    cursor: pointer;
    border: none;
    border-radius: 40px;
    font-size: 28px;
}

button:hover {
    transform: scale(1.05);
}

</style>
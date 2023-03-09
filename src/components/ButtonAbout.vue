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

</style>
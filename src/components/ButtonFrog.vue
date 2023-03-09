<template>
  <div class="main">
    <div class="frog-eyes">
        <span>
            <div class="eye"></div>
        </span>
        <span>
            <div class="eye"></div>
        </span>
    </div>
    <button @click="handleClick" >{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
    name: "ButtonFrog",
    props: {
        buttonText: {
            type: String,
            default: "tap here to see cats"
        },
    },
    methods: {
        handleClick() {
            this.$emit("button-clicked");
        }
    }
}
</script>

<style scoped>

</style>
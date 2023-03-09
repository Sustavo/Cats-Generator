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
button {
    background: #F0D3D3;
    border: none;
    width: 322px;
    height: 113px;
    border-radius: 50px;
    font-size: 34px;
    padding: 22px 65px;
    cursor: pointer;

}

span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 60px;
    border-radius: 12rem 12rem 0 0 ;
    background: #F5DEDE;
    cursor: pointer;

;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 322px;
}

.main:hover {
    transform: scale(1.05);
}

.frog-eyes {
    display: flex;
    gap: 1.6875rem;

}

.eye {
    width: 44.5px;
    height: 32px;
    border-radius: 12rem 12rem 0 0 ;
    background: #D9D9D9;
}

</style>
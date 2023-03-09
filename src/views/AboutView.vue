<template>
  <div class="about">
    <p class="animate-text typing-animation">Hi, I like cats :)</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.animate-text {
  font-size: 50px;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  max-width: 320px;
  animation: typing 2s steps(40) 1;
  position: relative;
  font-size: 50px;
}

.animate-text::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0.15em;
  border-right: 0.05em solid rgb(119, 119, 119);
  animation: blink 1s infinite;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.typing-animation {
  animation: typing 12s steps(40) both;
}

.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
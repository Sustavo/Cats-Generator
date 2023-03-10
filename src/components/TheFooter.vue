<template>
  <div class="main">
    <ul>
        <li>
            <a target="_blank" href="mailto:gust4v0309@gmail.com"><UilEnvelope size="50px" /></a>
        </li>
        <li>
            <a target="_blank" href="https://www.linkedin.com/in/gustavos-castro/"><UilLinkedin size="50px" /></a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/Sustavo"><UilGithub size="50px" /></a>
        </li>
    </ul>
  </div>
</template>

<script>
import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/vue-unicons'

export default {
    components: {
        UilEnvelope,
        UilLinkedin,
        UilGithub
    }
}
</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #6EB5FF;
    height: 80px;
}

ul {
    display: flex;
    list-style: none;
    gap: 50px;
}

li {
    cursor: pointer;
}

li:hover {
    transform: scale(1.05);
}

a {
    color: black;
}

a:hover {
    color: #F2F2F2;
}
</style>
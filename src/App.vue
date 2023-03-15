<script>
import headerSection from "./components/header.vue";

export default {
  components: { headerSection },
};
</script>

<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <headerSection />
  <router-view />
</template>

<style lang="scss">
:root {
  --color-background: #ffff;
  --color-background-nav: #d9d9d9;
  --color-text-normal: #000000;
  --color-text-highlight: #ff0000;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: var(--color-background);
}

a {
  text-decoration: none;
  transition: 0.2s opacity;
}

a:hover {
  opacity: 0.8;
}

main {
  display: flex;
  margin-top: 10px;
  background-color: var(--color-background);
}
</style>

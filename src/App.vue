<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      view: "main",
    };
  },
};
</script>

<style>
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html, body, * {
  margin: 0;
  padding: 0;
}
body{ height:100vh; margin:0; }

</style>

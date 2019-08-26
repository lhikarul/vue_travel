<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

#app {
  margin: 0 auto;
  border: 1px solid #2CE080;
  max-width: 500px;
  position: relative;
}

</style>

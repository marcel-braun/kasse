<template>
  <div id="app">
    <md-toolbar-container>
      <md-toolbar class="md-accent">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">Vue Material</h2>

        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
    </md-toolbar>
    </md-toolbar-container>
    <img src="static/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

<template>
  <div id="app">
      <md-toolbar class="md-accent">
        <md-button class="md-icon-button" v-on:click="homeOnClickHandler">
          <md-icon>view_quilt</md-icon>
        </md-button>
        <md-button class="md-icon-button" v-on:click="customersOnClickHandler">
          <md-icon>supervisor_account</md-icon>
        </md-button>
        <md-button class="md-icon-button" v-on:click="settingsOnClickHandler">
          <md-icon>settings</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1" id="title"></h2>

        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
    </md-toolbar>
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    homeOnClickHandler: () => {
      window.location.href = "#/"
    },
    customersOnClickHandler: () => {
      window.location.href = "#/customers"
    },
    settingsOnClickHandler: () => {
      window.location.href = "#/settings"
    }
  }
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

<template>
  <div id="main">
    <h1>Einstellungen</h1>
  </div>
</template>

<script>
export default {
  mounted: function() {
    // Set title
    this.$nextTick(function() {
      document.getElementById("title").innerHTML = "Einstellungen";
    });
  }
};
</script>

<style scoped>
h1, h2, h3 {
    padding: 0;
    margin: 0;
}
#main {
    padding: 25px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
}
</style>
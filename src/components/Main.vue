<template>
  <div id="main">
    <div id="left">
      <KeyPad />
    </div>
    <div id="right">
      log box
  </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    // Set title
    this.$nextTick(function() {
      document.getElementById("title").innerHTML = "Kasse";
    });
  }
};
</script>

<style scoped>
#main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
}
#left {
  flex-grow: 1;
}
#right {
  width: 350px;
}
</style>
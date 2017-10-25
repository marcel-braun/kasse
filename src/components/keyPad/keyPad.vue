<template>
    <div class="container full-height">
        <div class="button" v-for="(n, index) in 10" :key="index"><MButton :value="n"/></div>
    </div>
</template> 

<script>
import MButton from "@/components/keyPad/button";

export default {
  data() {
    return {
        msg: "test",
      keys: 5
    };
  },
  components: {
    MButton
  }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;

}
.button {
    flex-grow: 1;
    flex-basis: 25%;
}
button {
    width: 100%;
    height: 100%;
}
</style>
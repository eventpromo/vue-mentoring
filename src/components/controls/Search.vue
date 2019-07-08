<template>
  <div class="search">
    <input v-model="query" />
    <button v-on:click="search"></button>
  </div>
</template>

<script>
export default {
  name: "Search",
  model: {
    prop: "query",
    event: "search"
  },
  props: {
    query: String
  },
  methods: {
    search() {
      this.$emit("search", this.model.query);
    }
  }
};
</script>

<style lang="scss">
</style>

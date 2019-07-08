<template>
  <div class="content container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Content",
  components: {},
  data: () => ({}),
  computed: {}
};
</script>

<style lang="scss">
.content {
  padding: 20px;
  display: flex;
  flex-grow: 1;
  flex-flow: column nowrap;
}
</style>

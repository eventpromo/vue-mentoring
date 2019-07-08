<template>
  <div class="header">
    <Logo/>
  </div>
</template>

<script>
import Logo from './Logo';

export default {
  name: 'Header',
  components: {
    Logo,
  },
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ffffff;
  background-color: #4832c2;
}
</style>

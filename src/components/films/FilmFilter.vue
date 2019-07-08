<template>
  <div class="film-filter form">
    <div class="film-filter__label"></div>
    <div class="film-filter__control form-control">
      <Search />
    </div>
    <div class="film-filter__control form-control">
      <div class="form-control__label"></div>
      <div class="form-control__button"></div>
    </div>
  </div>
</template>

<script>
import Search from '../controls/Search';

export default {
  name: 'FilmFilter',
  components: {
    Search,
  },
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss">
</style>

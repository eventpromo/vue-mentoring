<template>
  <div class="film-list">
    <FilmItem v-for="film in films" v-bind:key="film.id" v-bind="film" />
  </div>
</template>

<script>
import FilmItem from './FilmItem';

export default {
  name: 'FilmList',
  components: {
    FilmItem,
  },
  data: () => ({
    films: [],
    // mini: false,
    // scrollSettings: {
    //   maxScrollbarLength: 160,
    // },
  }),
  computed: {
    // drawer: {
    //   get() {
    //     return this.$store.state.drawer;
    //   },
    //   set: () => {}
    // },
    // menu() {
    //   return menuService.getMenu(this.$store.getters.role);
    // },
    // sideToolbarColor() {
    //   return this.$vuetify.options.extra.sideNav;
    // }
  },
};
</script>

<style lang="scss">
.film-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  align-self: stretch;
}

.news-list__item {
  background-color: #ffffff;
  border: 1px #808080;
  box-sizing: border-box;
  flex-basis: calc(100% / 6);
  display: inline-flex;
  padding: 10px;
}

_:-ms-fullscreen,
:root .news-list__item {
  flex-basis: calc(100% / 6 - 20px);
}

@media screen and (max-device-width: 1600px) {
  .news-list__item {
    flex-basis: calc(100% / 5);
  }

  _:-ms-fullscreen,
  :root .news-list__item {
    flex-basis: calc(100% / 5 - 20px);
  }
}

@media only screen and (max-device-width: 1200px) {
  .news-list__item {
    flex-basis: calc(100% / 4);
  }

  _:-ms-fullscreen,
  :root .news-list__item {
    flex-basis: calc(100% / 4 - 20px);
  }
}

@media only screen and (max-device-width: 1024px) {
  .news-list__item {
    flex-basis: calc(100% / 3);
  }

  _:-ms-fullscreen,
  :root .news-list__item {
    flex-basis: calc(100% / 3 - 20px);
  }
}

@media screen and (max-device-width: 768px) {
  .news-list__item {
    flex-basis: calc(100% / 2);
  }

  _:-ms-fullscreen,
  :root .news-list__item {
    flex-basis: calc(100% / 2 - 20px);
  }
}

@media screen and (max-device-width: 480px) {
  .news-list__item {
    flex-basis: 100%;
  }
}
</style>

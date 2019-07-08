<template>
  <div class="film-list__item film-item">
    <div class="film-item__image">{{ film.image }}</div>
    <div class="film-item__title">{{ film.title }}</div>
    <div class="film-item__genre">{{ film.genre }}</div>
    <div class="film-item__year">{{ film.year }}</div>
  </div>
</template>

<script>
export default {
  name: 'FilmItem',
  components: {},
  props: ['film'],
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss">
.film-item {
  min-width: 100px;
  min-height: 400px;
  max-height: 600px;
  flex-wrap: wrap;
  flex-direction: column;
}

.film-item__title {
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.film-item__image {
  width: 100%;
  height: 250px;
}

.film-item__genre {
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.15);
  color: #000000;
  flex-grow: 1;
}

.film-item__year {
  padding: 10px 0;
  flex-grow: 1;
}
</style>

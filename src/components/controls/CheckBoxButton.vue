<template>
  <div class="checkbox-button">
    <button ref="leftButton" v-on:click="onClick('leftButton', leftValue)">{{ leftText }}</button>
    <button ref="rightButton" v-on:click="onClick('rightButton', rightValue)">{{ rightText }}</button>
  </div>
</template>

<script>
export default {
  name: "CheckBoxButton",
  props: {
    value: {
      default: null
    },
    leftValue: {
      default: true
    },
    rightValue: {
      default: false
    },
    leftText: {
      default: "Yes"
    },
    rightText: {
      default: "No"
    }
  },
  data() {
    return {
      model: this.value
    };
  },
  methods: {
    onClick: function(button, value) {},
    reRender(button, value) {
      this.$refs.forEach(element => {
        element.className = "";
      });
      this.model = value;
      if (button) {
        this.$refs[button].className = ".checkbox-button__selected";
      }
      this.$emit("input", this.model);
    }
  },
  mounted() {
    console.log(this.$el.textContent); // I'm text inside the component.
  }
};
</script>

<style lang="scss">
.checkbox-button {
  .checkbox-button__selected {
    background-color: red;
  }
}
</style>

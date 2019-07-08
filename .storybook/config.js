import { configure } from '@storybook/vue';
import Vue from 'vue';

// Import your custom components.
import CheckBoxButton from '../src/components/controls/CheckBoxButton.vue';

// Register custom components.
Vue.component('CheckBoxButton', CheckBoxButton);


function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
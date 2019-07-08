import { storiesOf } from '@storybook/vue';
import CheckBoxButton from '../src/components/controls/CheckBoxButton.vue';

storiesOf('CheckBoxButton', module)
  .add('Text', () => '<CheckBoxButton v-bind:leftText="test1" v-bind:rightText="test2"/>')
  .add('Component', () => ({
    components: { CheckBoxButton },
    template: '<CheckBoxButton v-model="true" />',
  }));

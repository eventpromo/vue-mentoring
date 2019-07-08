import { storiesOf } from '@storybook/vue';
import CheckBoxButton from '../src/components/controls/CheckBoxButton.vue';

storiesOf('CheckBoxButton', module)
  // .add('with text', () => '<CheckBoxButton leftText="test1" rightText="test2"/>')
  // .add('with emoji', () => '<my-button>😀 😎 👍 💯</my-button>')
  .add('as a component', () => ({
    components: { CheckBoxButton },
    template: '<CheckBoxButton v-model="true" />',
  }));

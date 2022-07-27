import MyButton from '@/components/MyButton/MyButton.vue';

export default {
  title: 'MyButton',
  component: MyButton,
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `<MyButton v-bind="$props" /> `,
});

export const Primary = Template.bind({});
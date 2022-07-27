import MyHeader from '@/components/MyHeader/MyHeader.vue';

export default {
  title: 'MyHeader',
  component: MyHeader,
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template: `<MyHeader v-bind="$props" /> `,
});

export const Primary = Template.bind({});
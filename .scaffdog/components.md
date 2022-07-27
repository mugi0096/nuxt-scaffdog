---
name: 'components'
root: './components'
output: '**/*'
ignore: []
questions:
  name: 'Please enter a filename.'
---

# Variables

- constant_key: value
- computed_key: `{{ inputs.name | pascal }}`

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.vue`

```typescript
<template></template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class {{ inputs.name | pascal }} extends Vue {}
</script>

<style scoped></style>

```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.js`

```javascript
import {{ inputs.name | pascal }} from '@/components/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.vue';

export default {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }},
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { {{ inputs.name | pascal }} },
  template: `<{{ inputs.name | pascal }} v-bind="$props" /> `,
});

export const Primary = Template.bind({});

```
<template>
  <p v-if="errors.length > 0" class="error">{{ errors[0] }}</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class InputError extends Vue {
  @Prop() errors!: string[]
}
</script>

<style lang="scss">
.error {
  color: red;
  margin: 0 0 10px 0;
  font-size: 12px;
}
</style>

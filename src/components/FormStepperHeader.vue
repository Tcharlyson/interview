<template>
  <div class="form-stepper-header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FormStepperHeader extends Vue {}
</script>

<style lang="scss">
.form-stepper-header {
  & {
    display: flex;
    justify-content: center;
  }
}
</style>

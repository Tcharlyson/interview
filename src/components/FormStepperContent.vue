<template>
  <div class="form-stepper-content" v-if="step == currentStep">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FormStepperContent extends Vue {
  @Prop() step!: number
  @Prop() currentStep!: number
}
</script>

<style lang="scss">
.form-stepper-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

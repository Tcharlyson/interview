<template>
  <div class="form-stepper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FormStepper extends Vue {}
</script>

<style lang="scss">
.form-stepper {
  height: 500px;
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div
    class="form-step__indicator"
    :class="{ 'form-step__indicator--completed': step == currentStep }"
  >
    <span>{{ step }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FormStep extends Vue {
  @Prop() step!: number
  @Prop() currentStep!: number
}
</script>

<style lang="scss">
.form-step {
  &__indicator {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid lightgray;
    text-align: center;
    margin: 50px 0 25px 0;

    &--completed {
      background: lightgray;
    }

    & > span {
      line-height: 40px;
      color: black;
      font: {
        size: 20px;
        weight: bold;
      }
    }

    &--completed > span {
      color: white;
    }
  }
}
</style>

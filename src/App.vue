<template>
  <div id="app">
    <div class="langage">
      <span @click="$store.commit('langage/SAVE_LANGAGE', 'fr')">FR</span>
      <span @click="$store.commit('langage/SAVE_LANGAGE', 'en')">EN</span>
    </div>
    <form-stepper>
      <form-stepper-header>
        <form-step step="1" :currentStep="currentStep"></form-step>
        <form-step step="2" :currentStep="currentStep"></form-step>
        <form-step step="3" :currentStep="currentStep"></form-step>
      </form-stepper-header>

      <ValidationObserver ref="observer">
        <form-stepper-content step="1" :currentStep="currentStep">
          <form-personnal @update-step="updateStore($event)" />
          <button @click="nextStep()">
            Next
          </button>
        </form-stepper-content>
        <form-stepper-content step="2" :currentStep="currentStep">
          <form-address @update-step="updateStore($event)" />
          <div class="actions">
            <button @click="previousStep()">
              Previous
            </button>
            <button @click="nextStep()">
              Next
            </button>
          </div>
        </form-stepper-content>
        <form-stepper-content step="3" :currentStep="currentStep">
          <form-contactability @update-step="updateStore($event)" />
          <div class="actions">
            <button @click="previousStep()">
              Previous
            </button>
            <button @click="nextStep()">
              Done
            </button>
          </div>
        </form-stepper-content>
      </ValidationObserver>
    </form-stepper>
  </div>
</template>
<script lang="ts">
import { ValidationObserver } from 'vee-validate'
import { Vue, Component } from 'vue-property-decorator'
import { UserFields } from './types'

@Component({
  components: {
    FormStepperHeader: () => import('@/components/FormStepperHeader.vue'),
    FormStepperContent: () => import('@/components/FormStepperContent.vue'),
    FormStepper: () => import('@/components/FormStepper.vue'),
    FormStep: () => import('@/components/FormStep.vue'),
    FormPersonnal: () => import('@/components/FormPersonnal.vue'),
    FormAddress: () => import('@/components/FormAddress.vue'),
    FormContactability: () => import('@/components/FormContactability.vue'),
    ValidationObserver
  }
})
export default class App extends Vue {
  currentStep = 1

  async nextStep() {
    const isFormValid = await (this.$refs.observer as InstanceType<
      typeof ValidationObserver
    >).validate()

    if (!isFormValid) return

    this.currentStep += 1
  }

  previousStep(): void {
    this.currentStep -= 1
  }

  updateStore(data: UserFields) {
    this.$store.commit('user/SAVE_INFOS', data)
  }
}
</script>
<style lang="scss">
.actions {
  margin-top: 40px;
}

.langage {
  cursor: pointer;

  & > span:first-of-type {
    margin-right: 30px;
  }
}
</style>

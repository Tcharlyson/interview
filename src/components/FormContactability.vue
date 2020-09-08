<template>
  <div class="form-address">
    <ValidationProvider rules="required|email" name="email" v-slot="{ errors }">
      <input type="email" v-model="user.email" placeholder="Email" required />
      <input-error :errors="errors"></input-error>
    </ValidationProvider>
    <ValidationProvider
      rules="phone"
      name="phone"
      :skipIfEmpty="false"
      v-slot="{ errors }"
    >
      <input type="tel" v-model="user.phone" placeholder="Phone" />
      <input-error :errors="errors"></input-error>
    </ValidationProvider>
    <div>
      <input
        type="checkbox"
        id="random"
        v-model="user.option"
        placeholder="Option"
      />
      <label for="random">A random checkbox</label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { ValidationProvider } from 'vee-validate'
import { UserFields } from '@/types'
import { mapState } from 'vuex'

@Component({
  components: {
    ValidationProvider
  },
  computed: {
    ...mapState('user', ['user'])
  }
})
export default class FormContactability extends Vue {
  public user!: UserFields

  @Watch('user')
  onChange() {
    this.$emit('update-step', this.user)
  }
}
</script>

<style lang="scss"></style>

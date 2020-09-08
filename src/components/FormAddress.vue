<template>
  <div class="form-address">
    <ValidationProvider rules="required" name="country" v-slot="{ errors }">
      <input
        type="text"
        v-model="user.country"
        placeholder="Country"
        required
      />
      <input-error :errors="errors"></input-error>
    </ValidationProvider>
    <input type="text" v-model="user.city" placeholder="City" />
    <input type="text" v-model="user.street" placeholder="Street" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { ValidationProvider } from 'vee-validate'
import { mapState } from 'vuex'
import { UserFields } from '@/types'

@Component({
  components: {
    ValidationProvider
  },
  computed: {
    ...mapState('user', ['user'])
  }
})
export default class FormAddress extends Vue {
  public user!: UserFields

  @Watch('user')
  onChange() {
    this.$emit('update-step', this.user)
  }
}
</script>

<style lang="scss">
.form-address {
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
}
</style>

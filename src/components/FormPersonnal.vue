<template>
  <div class="form-personnal">
    <ValidationProvider rules="required" name="lastname" v-slot="{ errors }">
      <input
        type="text"
        v-model="user.lastname"
        placeholder="Your lastname"
        required
      />
      <input-error :errors="errors"></input-error>
    </ValidationProvider>
    <ValidationProvider rules="required" name="firstname" v-slot="{ errors }">
      <input
        type="text"
        v-model="user.firstname"
        placeholder="Your firstname"
        required
      />
      <input-error :errors="errors"></input-error>
    </ValidationProvider>
    <input type="text" placeholder="Your title" v-model="user.title" />
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
export default class FormPersonnal extends Vue {
  public user!: UserFields

  @Watch('user')
  onChange() {
    this.$emit('update-step', this.user)
  }
}
</script>

<style lang="scss">
.form-personnal {
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
}
</style>

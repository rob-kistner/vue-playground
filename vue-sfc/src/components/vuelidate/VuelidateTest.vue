<template>
  <div class="section">

    <h1>Vuelidate testing...</h1>

    <form action="" id="form" class="form">

      <div class="field" :class="{'form-group--error': $v.name.$error}">
        
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text"
                name="name"
                id="name"
                class="input"
                placeholder="Enter your name"
                v-model="$v.name.$model"
                >
            </div>
          </div>
        </div>

        <div class="error" v-if="!$v.name.required">
          Name is required
        </div>
        <div class="error" v-if="!$v.name.minLength">
          Name must have at least {{$v.name.$params.minLength.min}} letters.
        </div>

      </div>

      <div class="field" :class="{'form-group--error': $v.email.$error}">
        
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input type="text"
                name="email"
                id="email"
                class="input"
                placeholder="Enter your email"
                v-model="$v.email.$model"
                >
            </div>
          </div>
        </div>
        
        <div class="error" v-if="!$v.email.required">Email is required</div>
      
      </div>

    </form>

  </div>
</template>

<script>
  import {required, minLength} from 'vuelidate/lib/validators'

  export default {
    name: 'VuelidateTest',
    data() {
      return {
        name: '',
        email: ''
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required
      }
    },
  }
</script>

<style scoped lang='stylus'>

  .error
    display    : block
    font-size  : 0.8rem
    // font-style : italic
    color      : #f00
    margin     : 0.25rem 0 0.25rem 0.75rem

  .field-label
    text-align    : left
    margin-bottom : 0.5rem
    & label
      font-weight : 400

</style>
<template>
    <div>
      <label>
        <input type="checkbox" v-model="isChecked" :value="value">{{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      value: String,
      checked: Boolean
    },
    data() {
      return {
        isChecked: this.checked
      }
    },
    watch: {
      isChecked(value) {
        this.$emit('update:checked', value)
      }
    }
  }
  </script>
  
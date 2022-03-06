<template>
  <label
    class="relative block p-3 border border-gray-200 rounded-lg czarna-input"
    :class="{'czarna-input-fixed': mode === 'fixed', 'border border-red-500': hasError}"
  >
    <input
      class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
      :type="type === 'password' ? (showText ? 'text' : 'password') : 'text'"
      placeholder="Name"
      :value="modelValue"
      @input="onValueChange"
    />
    <span
      class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm"
    >
      {{placeholder}}
    </span>
    <button
      v-if="type === 'password'"
      @click="showText = !showText"
      class="absolute translate-x-full -translate-y-1/2 right-10 top-1/2"
    >
      <font-awesome-icon :icon="{prefix: 'far', iconName: 'eye'}" class="show-text" v-if="!showText"/>
      <font-awesome-icon :icon="{prefix: 'far', iconName: 'eye-slash'}" class="show-text" v-if="showText"/>
    </button>
  </label>
</template>

<script>
export default {
  name: 'CzarnaSelect',
  props: {
    'placeholder': String,
    'modelValue': {
      type: String,
      default: '',
      required: true
    },
    'mode': {
      type: String,
      default: 'full'
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    }
  },
  data() {
    return {
      showText: false,
    }
  },
  methods: {
    /**
     * Listen input value change emit to parent component
     * @param {string} event Input Event
     */
    onValueChange(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
  .czarna-input {
    max-width: 100%;
  }
  .czarna-input-fixed {
    width: 286px;
  }

  .show-text {
    color: #8A8FA8;
  }
</style>
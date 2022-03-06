<template>
  <label
    class="relative block p-3 border border-gray-200 rounded-lg czarna-input"
    :class="{'czarna-input-fixed': input_mode === 'fixed', 'border border-red-500': hasError}"
  >
    <input
      class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
      type="text"
      placeholder="Name"
      :value="modelValue"
      v-mask="{mask: input_mask}"
      :allowEmpty="true"
      @input="onValueChange"
    />
    <span
      class="absolute text-xs font-medium text-gray-500 transition-all left-3 peer-focus:text-xs peer-focus:top-2 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm"
    >
      {{placeholder_text}}
    </span>
  </label>
</template>

<script>
export default {
  name: 'CzarnaMaskedInput',
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true
    },
    placeholder: String,
    mode: {
      type: String,
      default: 'full',
    },
    mask: String,
    hasError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      placeholder_text: this.placeholder,
      input_mode: this.mode,
      value: '',
      input_mask: this.mask,
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

  input {
    color: #333;
    letter-spacing: 0.25rem;
  }
</style>
<template>
  <div class="w-full">
    <Slider
      class="czarna-slider"
      showTooltip="drag"
      :format="function(value) {
        return value + '%';
      }"
      :min="min"
      :max="max"
      :lazy="true"
      v-model="modelValue"
      @change="onValueChange"
    />
  </div>
</template>

<script>
import Slider from '@vueform/slider';

export default {
  name: "CzarnaRangeInput",
  components: { Slider },
  props: {
    min: Number,
    max: Number,
    modelValue: {
      type: Number,
      default: 100,
      required: true
    }
  },
  methods: {
    /**
     * Listen Slide Change
     * @param {Event} event Range Slide Event
     */
    onValueChange(event) {
      this.$emit('update:modelValue', event);
    }
  }
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
  .czarna-slider {
    --slider-connect-bg: #CC2D42;
    --slider-tooltip-bg: white;
    --slider-tooltip-font-size: 1.125rem;
    --slider-tooltip-font-weight: 600;
    --slider-tooltip-color: #14161F;
  }

  div.slider-tooltip {
    padding: 12px 22px !important;
    box-shadow: 0px 3px 28px #525F7A29;
  }

  div.slider-touch-area {
    border: 3px solid white;
    background: #CC2D42;
    border-radius: 50%;
  }
</style>
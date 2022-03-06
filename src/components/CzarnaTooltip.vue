<template>
  <div
    class="tooltip-box"
    :class="{'relative': tooltip_position === 'relative', 'absolute': tooltip_position === 'absolute'}"
  >
    <slot/>
    <div
      class="tooltip"
    >
      <span
        :class="{'text': tooltip_size === 'base', 'text-lg': tooltip_size === 'large'}"
      >
        {{ tooltip_text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CzarnaTooltip',
  props: { 
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'base'
    },
    position: {
      type: String,
      default: 'relative'
    }
  },
  data() {
    return {
      tooltip_text: this.text,
      tooltip_size: this.size,
      tooltip_position: this.position
    }
  }
};
</script>

<style scoped>
.tooltip-box { 
  display: inline-block;
}

.tooltip-box:hover .tooltip{
  display: block;
}

.tooltip { 
  color: #ffffff;
  text-align: center;
  padding: 12px 22px;
  border-radius: 4px;

  display: none;
  transition: opacity 0.3s;

  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: calc(100% + 10px);
  z-index: 1;

  background: white;
  box-shadow: 0px 3px 28px #525F7A29;
}

.text::after,
.text-lg::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

.text {
  color: #666;
  font-size: 0.8rem;
  white-space: nowrap;
  line-height: 0.8rem;
}

.text-lg {
  color: #14161F;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 2.25rem;
  white-space: nowrap;
}
</style>
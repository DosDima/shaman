<template>
  <button
      class="btn"
      :class="color"
      :style="{ height: height + 'px' }"
      :disabled="disabled"
      @clickю.self="$emit('click-on-btn')"
  >{{ text }}
  </button>
</template>

<script setup lang="ts">
defineEmits(['click-on-btn']);
defineProps({
  text: {
    type: String,
    default: 'Ok',
  },
  color: {
    type: String,
    default: 'success',
  },
  height: {
    type: Number,
    default: 42,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped>
.success {
  color: var(--color-success);
  border-color: var(--color-success);
}

.info {
  color: var(--color-info);
  border-color: var(--color-info);
}

.btn {
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: .1em;
  font-weight: 700;
  cursor: pointer;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all 150ms ease-in-out;
  -webkit-transition: all 150ms ease-in-out;
}


@media screen and (min-width: 768px) and (orientation: landscape) {
  .btn:hover, .btn:focus {
    outline: 0;
  }

  .info:hover, .info:focus {
    outline: 0;
    box-shadow: 0 0 10px 0 var(--color-info) inset, 0 0 10px 4px var(--color-info);
  }

  .success:hover, .success:focus {
    outline: 0;
    box-shadow: 0 0 10px 0 var(--color-success) inset, 0 0 10px 4px var(--color-success);
  }

}


</style>

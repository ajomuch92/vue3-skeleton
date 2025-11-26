<template>
  <Component :is="as" :class="{'skeleton': loading}">
    <slot v-if="!loading" name="default" />
  </Component>
</template>

<script setup lang="ts">
import { defineComponent, computed } from 'vue';

defineComponent({
  name: 'Vue3Skeleton',
})

interface Props {
  as?: string;
  loading?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  toColor?: string;
  interval?: string;
}

const {
  as = 'div',
  loading,
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  backgroundColor = '#e0e0e0',
  toColor = '#f0f0f0',
  interval = '3s'
} = defineProps<Props>();


// Computed properties for each style
const widthComputed = computed(() => width);

const heightComputed = computed(() => height);

const borderRadiusComputed = computed(() => borderRadius);

const intervalComputed = computed(() => interval);

const backgroundColorComputed = computed(() => backgroundColor);

const backgroundImage = computed(() => 
  `linear-gradient(90deg, ${backgroundColorComputed.value} 25%, ${toColor} 50%, ${backgroundColorComputed.value} 75%)`
);


</script>

<style scoped>
.skeleton {
  height: v-bind(heightComputed);
  width: v-bind(widthComputed);
  background-color: v-bind(backgroundColorComputed);
  border-radius: v-bind(borderRadiusComputed);

  background-image: v-bind(backgroundImage);
  background-size: 200% 100%;
  animation: skeleton-loading v-bind(intervalComputed) infinite ease-in-out;
}

/* Animación del skeleton */
@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

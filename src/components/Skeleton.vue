<template>
  <Component :is="as" :class="{'skeleton': loading}">
    <slot v-if="!loading" name="default" />
  </Component>
</template>

<script setup>
import { defineComponent, computed } from 'vue';

defineComponent({
  name: 'Vue3Skeleton',
})

const props = defineProps({
  as: {
    type: String,
    default: 'div'
  },
  loading: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '20px',
  },
  borderRadius: {
    type: String,
    default: '4px',
  },
  backgroundColor: {
    type: String,
    default: '#e0e0e0'
  },
  toColor: {
    type: String,
    default: '#f0f0f0'
  },
  interval: {
    type: String,
    default: '3s'
  },
});


// Computed properties for each style
const width = computed(() => props.width);

const height = computed(() => props.height);

const borderRadius = computed(() => props.borderRadius);

const interval = computed(() => props.interval)

const backgroundColor = computed(() => props.backgroundColor);

const backgroundImage = computed(() => 
  `linear-gradient(90deg, ${props.backgroundColor} 25%, ${props.toColor} 50%, ${props.backgroundColor} 75%)`
);


</script>

<style scoped>
.skeleton {
  height: v-bind(height);
  width: v-bind(width);
  background-color: v-bind(backgroundColor);
  border-radius: v-bind(borderRadius);
  
  background-image: v-bind(backgroundImage);
  background-size: 200% 100%;
  animation: skeleton-loading v-bind(interval) infinite ease-in-out;
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

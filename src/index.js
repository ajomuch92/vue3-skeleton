import Vue3Skeleton from './components/Skeleton.vue';

export default function install(app) {
  app.component('skeleton', Vue3Skeleton);
}

export const Skeleton = Vue3Skeleton;

<template>
  <div>
    <button @click="loading=!loading">Toggle loader</button>
    <skeleton :loading="loading">
      This is a text
    </skeleton>
    <skeleton width="100px" height="100px" :loading="loading" style="margin-top: 5px;" border-radius="50px">
      <img src="https://placehold.co/100x100" alt="Image" />
    </skeleton>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Skeleton from './components/Skeleton.vue';

const loading = ref(false);

</script>

<style scoped>

</style>

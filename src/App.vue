<script setup lang="ts">
import CounterCompositionVue from './components/CounterComposition.vue';
// import CounterOptionsVue from './components/CounterOptions.vue';
</script>

<template>
  <div class="root">
    <h1>Simple Counter App</h1>
    <CounterCompositionVue />
  </div>
</template>


<style scoped>
  div.root {
    display: flex;
    flex-direction: column;
  }
</style>

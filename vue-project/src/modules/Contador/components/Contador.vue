<template>
  <h1>Hola mundo</h1>
  <p>{{ contador }}</p>
  <button @click="aumentar" class="bg-danger">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(0);

const aumentar=()=>{
  contador.value++;
}

const decrementar = () => {
  contador.value--;
}
</script>


<style scoped>

</style>

<script setup>
import { ref } from 'vue'
// Variables reactivas
const mensaje = ref('Hola Vue 3 con Composition API')
const contador = ref(0)
// Función que modifica el estado
function incrementar() {
contador.value++
}
</script>
<template>
<div>
<h1>{{ mensaje }}</h1>
<p>El contador vale: {{ contador }}</p>
<button @click="incrementar">Incrementar</button>
</div>
</template>
<style scoped>
/* Estilos locales para este componente */
h1 {
color: blue;
}
</style>
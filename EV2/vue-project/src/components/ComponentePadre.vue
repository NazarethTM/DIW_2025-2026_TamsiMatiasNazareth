<template>
<Hijo :titulo="titulo" :contador="contadorHijo" @incrementar="contadorHijo++" />
</template>
<script setup>
import { ref } from 'vue'
import Hijo from './ComponenteHijo.vue'
const titulo = ref('Titulo desde el padre')
const contadorHijo = ref(0)
</script>

<!--No funciona--->
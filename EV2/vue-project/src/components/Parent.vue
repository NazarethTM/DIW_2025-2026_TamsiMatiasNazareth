
<template>
<div>
<h2>Componente Padre</h2>       
<Child :mensaje="mensajeDelPadre" @respuesta="manejarRespuesta" />
<p>Respuesta recibida del hijo: {{ respuestaDelHijo }}</p>
</div>
</template>

<script lang="ts" setup>  
import { ref } from 'vue'
import Child from './Child.vue'
const mensajeDelPadre = '¡Hola desde el padre!'
const respuestaDelHijo = ref('')
function manejarRespuesta(respuesta: string) {
respuestaDelHijo.value = respuesta
}  
</script>
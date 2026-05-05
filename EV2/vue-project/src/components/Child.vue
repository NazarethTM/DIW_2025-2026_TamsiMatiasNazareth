<!--EJERCICIO 9
• Crea un componente Child.vue:
– Define una prop mensaje: string.
– Muestra esa prop en el template.
– Emite un evento "respuesta" pasando un string cuando se presione un botón.
• Crea un componente Parent.vue:
– Importa Child.vue.
– Pasa un valor de mensaje como prop al hijo.
– Escucha el evento "respuesta" y maneja la respuesta en el padre (por ejemplo,
guardando la respuesta en una variable reactiva).-->

<template>
<div>
<h2>Componente Hijo</h2>        
<p>Mensaje recibido del padre: {{ mensaje }}</p>
</div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
defineProps<{ mensaje: string }>()
const emit = defineEmits(['respuesta']) 
function enviarRespuesta() {
const respuesta = '¡Hola desde el hijo!'
emit('respuesta', respuesta)
}
</script>
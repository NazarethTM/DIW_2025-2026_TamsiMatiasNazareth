<!--EJERCICIO 8
• Crea un componente Counter.vue.
• Declara count = ref<number>(0).
• Crea una propiedad computada estadoContador que retorne:
– "Positivo" si count > 0.
– "Cero" si count === 0.
– "Negativo" si count < 0.
• Muestra count y estadoContador en el template.
• Agrega botones para incrementar y decrementar el contador.-->

<template>
<div>
<h2>Contador: {{ count }}</h2>  
<p>Estado del contador: {{ estadoContador }}</p>
<button @click="count++">Incrementar</button>
<button @click="count--">Decrementar</button>
</div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'

const count = ref<number>(0)

const estadoContador = computed<string>(() => {
  if (count.value > 0) {
    return "Positivo"
  } else if (count.value === 0) {
    return "Cero"
  } else {
    return "Negativo"
  }
})
</script>
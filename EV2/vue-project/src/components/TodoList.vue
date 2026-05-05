<!--EJERCICIO 7
• Crea un componente TodoList.vue.
• Define una lista reactiva de tareas (ej. tasks = ref<string[]>(...)).
• Crea un campo de texto ligado a una variable newTask con v-model.
• Implementa un botón “Agregar” que inserte newTask en tasks,
luego limpia newTask.
• Utiliza v-for para mostrar cada tarea en la lista.--->
<template>
<div>
<ul>
<!-- Recorremos 'tareas' y por cada elemento creamos un <li> -->
<li
v-for="(tarea, index) in tareas"
:key="index"
>
{{ tarea }}
</li>
</ul>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const tareas = ref<string[]>(['Tarea 1', 'Tarea 2', 'Tarea 3 '])
const newTask = ref<string>('')
function agregarTarea() {
if (newTask.value.trim() !== '') {
tareas.value.push(newTask.value.trim()) // Agrega la nueva tarea a la lista
newTask.value = '' // Limpia el campo de texto
}
} 
</script>

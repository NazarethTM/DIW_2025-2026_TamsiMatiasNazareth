<template>
<div>
<h3>{{ titulo }} - Contador: {{ contador }}</h3>
<button @click="emitIncrementar">Incrementar (Hijo)</button>
</div>
</template>
<script setup>
import { defineProps, defineEmits, ref } from './ComponentePadre.vue'
const props = defineProps({
titulo: String,
contador: Number
})
const emit = defineEmits(['incrementar'])
function emitIncrementar() {
emit('incrementar')
}
</script>

<!--No funciona--->
<template>
<div>
<input
type="text"
v-model="mensaje"
placeholder="Escribe algo..."
/>
<p>Tu mensaje es: {{ mensaje }}</p>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const mensaje = ref<string>('')
</script>
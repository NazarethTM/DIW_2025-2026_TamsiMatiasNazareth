<template>
<div>
<ul>
<!-- Recorremos 'frutas' y por cada elemento creamos un <li> -->
<li
v-for="(fruta, index) in frutas"
:key="index"
>
{{ fruta }}
</li>
</ul>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const frutas = ref<string[]>(['Manzana', 'Banana', 'Naranja', 'Pera', 'Platano'])
</script>
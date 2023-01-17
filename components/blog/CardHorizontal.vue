<template>
    <div>
        hola
        <h1>{{ props.title }}</h1>
        {{ props.description }}
        <NuxtLink :to="props.path">{{ props.title }}</NuxtLink>

    </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true},
  writtenAt: {type: String},
  tags: {type: Array as PropType<string[]>},
  path: {type: String}
});

props.title // string
props.description // number | undefined
</script>
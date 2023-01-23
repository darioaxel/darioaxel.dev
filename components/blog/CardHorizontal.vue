<template>
    <div class="w-full flex flex-col place-content-start ml-5 mr-5">
        <NuxtLink class=" text-themePrimary text-2xl" :to="props.path">{{ props.title }}</NuxtLink>
        {{ props.description }}  
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
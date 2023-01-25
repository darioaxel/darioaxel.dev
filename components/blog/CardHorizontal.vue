<template>
    <div class="w-full flex flex-col place-content-start ml-5 mr-5">
        <NuxtLink class=" text-themePrimary text-2xl" :to="props.path">{{ props.title }}</NuxtLink>
        <div class=" flex flex-wrap">
          <div class="">written-date</div>
          <div class="">
            <div v-for="tag in props.tags">
              <BlogTag :title="tag" tagType="orange" />
            </div>
            </div> 
        </div>
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
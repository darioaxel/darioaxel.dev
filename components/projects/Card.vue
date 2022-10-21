<template>
   <div class="max-w-2xl px-8 py-4 mx-auto bg-themeBackground300 rounded-lg shadow-md" style="cursor: auto;">
  <div class="flex items-center justify-between">
    <span class="text-sm font-light text-themeText">{{props.writtenAt}}</span> 
    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform
     bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{{props.topic}}</a>
  </div> 
  <div class="mt-2">
    <a href="https://stackdiary.com/" class="text-2xl font-bold text-themePrimary hover:text-themePrimary800 hover:underline">{{props.title}}</a> 
    <p class="mt-2 text-gray-600 dark:text-gray-300">{{props.resume}}</p>
  </div> 
  <div class="flex items-center justify-between mt-4">
    <a href="#" class=" text-themePrimary700 hover:underline">Read more ⟶</a> 
    <div class="flex items-center">
      <img src="https://stackdiary.com/140x100.png" alt="Author Photo" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"> 
      <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{{props.author}}</a>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const props = defineProps({
  writtenAt: { type: Date, required: true },
  topic: { type: String},
  title:  { type: String, required: true},
  resume:  { type: String, required: true},
  author:  { type: String, required: true},
})
</script>
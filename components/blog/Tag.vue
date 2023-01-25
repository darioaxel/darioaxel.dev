<template>
    <div class="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full" :class="font_type">
        {{ props.title }}
    </div>           
</template>
<script setup lang="ts">
import { PropType } from 'vue';
const props = defineProps({
    tagType:  { type: String, required: true },
    title: { type: String, required: true }   
});

const tagTypes = {
    'blue': 'bg-blue-200 text-blue-700',
    'green':  'bg-green-200  text-green-700',
    'red':  'bg-red-200  text-red-700',
    'orange': ' bg-orange-200 text-orange-700 ',
    'white': 'bg-white text-gray-700 border'
    };

const font_type = ref(tagTypes[props.tagType.toString()]);
//const font_type = ref(tagTypes[props.tagType.toString()]);// tagTypes[toString(props.tagType)].font_color;

</script>
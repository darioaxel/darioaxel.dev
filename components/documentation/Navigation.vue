<template>
    {{navigationTree }}
<div class=" p-2 m-4 border-l-4 border-lime-400">
    <div class=" text-xl">
        {{navigationTree[0].title}}
    </div>
    <div class="p-2">
        <DocumentationNavigationRecursive  :navigation-tree="navigationTree[0].children"/>
    </div>
    
</div>    
    
</template>
<script setup>
    defineProps({
        navigationTree: {
            type: Array,
            default:() =>[ ]
        }
    })
</script>
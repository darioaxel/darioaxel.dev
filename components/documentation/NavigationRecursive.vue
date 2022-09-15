<script setup>
    defineProps({
        navigationTree: {
            type: Array,
            default:() =>[ ]
        }
    })
</script>
<template>
    
    <ul class="navigation">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink class=" hover:bg-slate-200"  :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <DocumentationNavigationRecursive v-if="item.children" :navigation-tree="item.children" class=" p-2 sub-navigation" />
    </li>
  </ul>

</template>
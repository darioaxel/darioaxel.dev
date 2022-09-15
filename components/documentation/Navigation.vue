<script setup>
    defineProps({
        navigationTree: {
            type: Array,
            default:() =>[ ]
        }
    })
</script>
<template>
    {{navigationTree}}
    <ul class="navigation">
    <li v-for="(item, index) in navigationTree" :key="index">
      <NuxtLink :to="item._path">
        {{ item.title }}
      </NuxtLink>
      <DocumentationNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
    </li>
  </ul>
</template>
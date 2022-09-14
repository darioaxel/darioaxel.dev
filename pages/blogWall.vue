<template>
  
    <DocumentationNavigation :navigation-tree="navigation" />
</template>
<script setup>
    const { data: navigation } = await useAsyncData('navigation', () => {
        return fetchContentNavigation(queryContent("/documentation"))
    })
</script>
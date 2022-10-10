<template>
 Hola! a ve si así...
</template>
<script setup>
    const { data: navigation } = await useAsyncData('navigation', () => {
        return fetchContentNavigation(queryContent("/blog"))
    })
</script>
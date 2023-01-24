<template>
  hola hola
    {{$route.params.slug[0]}}
    <!-- ContentDoc
      :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'"
    >
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc -->
    <ContentDoc />
  </template>
<script setup lang='ts'>
  console.log("hola");
</script>
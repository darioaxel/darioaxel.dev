<template>
  <div>
 {{test}}
  
  y ahora con la prueba
  <ContentDoc
    :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'"
  >
    <!-- template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template -->
  </ContentDoc>
</div>
</template>
<script setup>
  const test = '/blog/' + this.$route;


</script>
<template>
<<<<<<< HEAD
  {{blogNav}}
</template>
<script setup>
	const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("blog"));
	});
	
</script>
=======
 {{docs}}

  y ahora con la prueba
  <ContentDoc
    :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'"
  >
    <!-- template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template -->
  </ContentDoc>
</template>
<script setup>
  const docs = await queryContent('/blog');

</script>
>>>>>>> 2fcc541d6600cfa0df3ac46cbd78c1ab286c0969

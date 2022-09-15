<template>
<<<<<<< HEAD
{{documentationNav}}
</template>
<script setup>
	const { data: documentationNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("documentation"));
	});
	
</script>
=======
Hey there!
 
 After
  <ContentDoc
    :path="$route.params.slug ? `/documentation/${$route.params.slug[0]}` : '/documentation'"
  >
  <!-- template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template -->
  </ContentDoc>
</template>
>>>>>>> 2fcc541d6600cfa0df3ac46cbd78c1ab286c0969

<template>
  {{blogNav}}
</template>
<script setup>
	const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("blog"));
	});
	
</script>

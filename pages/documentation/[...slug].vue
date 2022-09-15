<template>

{{documentationNav}}

</template>
<script setup>
	const { data: documentationNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("documentation"));
	});
	
</script>


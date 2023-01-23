<template>
    <div class=" h-full">
        <section class=" w-full h-full flex justify-center content-start text-themeText text-center lg:text-left md:pt-6 bg-themeBackground">
        <div class="w-full lg:w-9/12 flex items-start justify-center">
            <div class="invisible lg:visible absolute z-10 bottom-1 left-1 text-white md:w-1/12 ml-3 mb-2">
                <img src="~/assets/img/Space-Invaders-corner-left.svg">
            </div>
          
            <div class="w-full flex flex-wrap flex-row justify-center">
                <div class="w-full flex align-middle mb-4 mt-8 p-1 section-title text-3xl font-bold text-themeText 
       border-b-2 border-b-themePrimary">
                    <div>CFGS </div>
                    <div class=" ml-2 text-themePrimary">Desarrollo de Aplicaciones Multiplataforma</div>
                </div>
                <div class="w-full flex flex-wrap flex-row justify-evenly">
                    {{DamNav}}
                    {{DamPretty}}
                </div>
            </div>
        </div>
    </section>
    </div>
</template>
<script setup>
	const { data: DamNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("asir"));
	});
    const { data: DamPretty} = JSON.stringify(DamNav);
	
</script>
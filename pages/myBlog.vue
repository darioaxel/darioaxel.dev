<template>
 <section class="w-full flex flex-col justify-center items-center text-themeText text-center lg:text-left md:pt-6 bg-themeBackground">
    <div class="w-full lg:w-5/6 flex justify-center">
        <div class="invisible lg:visible absolute z-10 bottom-1 left-1 text-white md:w-1/12 ml-3 mb-2">
            <img src="~/assets/img/Space-Invaders-corner-left.svg">
        </div>
    <!-- main 9/12 container -->
    <div class="flex flex-wrap flex-row md:w-9/12 mt-8 border-t-2 border-t-themePrimary">
        
        <div class="w-full flex align-middle ml-6 mb-2 mt-8 p-1 section-title text-3xl font-bold text-themeText ">
                <div>Mi </div><div class=" ml-2 text-themePrimary">Blog</div>
        </div>
        <div class="w-full flex flex-wrap flex-row justify-evenly">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </div>
</div>
   
  
</section>
</template>
<script setup lang="ts">
    const { data: navigation } = await useAsyncData('navigation', () => {
        return fetchContentNavigation(queryContent("/blog"))
    })
</script>
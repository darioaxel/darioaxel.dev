<template>
    <section
        class=" min-h-max w-full flex flex-col justify-center items-center text-themeText text-center lg:text-left md:pt-6 bg-themeBackground">
        <div class="w-full lg:w-9/12 flex justify-center">
            <div class="invisible lg:visible absolute z-10 bottom-1 left-1 text-white md:w-1/12 ml-3 mb-2">
                <img src="~/assets/img/Space-Invaders-corner-left.svg">
            </div>
            <!-- main 9/12 container -->
            <div class="w-full flex flex-wrap flex-row justify-center">
                <div class="w-full flex align-middle ml-4 mr-4 mb-4 mt-8 p-1 section-title text-3xl font-bold text-themeText 
       border-b-2 border-b-themePrimary">
                    <div>Mi </div>
                    <div class=" ml-2 text-themePrimary">Blog</div>
                </div>
                <div class="w-full flex flex-wrap flex-row justify-evenly">                            
                  
                  <ContentNavigation v-slot="{ navigation }" :query="blogQuery">
                    <div v-for="post in navigation[0].children" :key="post._path" :to="post._path">
                        <BlogCardHorizontal :title='post.title' :description='post.description' :path='post._path'>a</BlogCardHorizontal>
                    </div>
                    {{ navigation }}
                    <NuxtLink v-for="post in navigation[0].children" :key="post._path" :to="post._path">
                        {{ post.title}} - {{post.description }}
                    </NuxtLink>
                  </ContentNavigation>
                  
                  
                </div>
            </div>
        </div>


    </section>
</template>
<script setup lang="ts">
 const blogQuery = queryContent().where({ _path: /^\/blog/ })
</script>
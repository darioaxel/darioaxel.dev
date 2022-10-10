<template>
    <nav class=" w-full flex justify-center bg-themeBackground">
        <div class=" w-full flex flex-col items-center md:w-11/12 md:flex-row md:justify-between">        
            <div id="page-title" class=" m-2">
                <NuxtLink to="/" ><AppDarioaxel /></NuxtLink>
            </div>
            <div id="navbar-links" class="flex w-full items-center justify-around md:w-3/12 text-themePrimary text-xl ">
                <NuxtLink to="/myBlog" class=" p-1 after:bg-themePrimary600 hover-underline-animation hover:text-themePrimary900 ">Blog</NuxtLink>
                <NuxtLink to="/docu" class=" p-1 after:bg-themePrimary600 hover-underline-animation hover:text-themePrimary900 ">Documents</NuxtLink>     
                <AppThemeSwitcher />
            </div>   
        </div>
    </nav>
</template>
<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;  
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;  
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
<template>
    <nav class=" w-full flex justify-center bg-themeBackground">
        <div class=" w-full flex flex-col items-center md:w-11/12 md:flex-row md:justify-between">        
            <div id="page-title" class=" m-2">
                <NuxtLink to="/" ><AppDarioaxel /></NuxtLink>
            </div>
            <div id="navbar-links" class="flex w-full items-center justify-around md:w-3/12 text-themeText ">
                <NuxtLink to="/blog" class=" m-1 md:m-2">Blog</NuxtLink>
                <NuxtLink to="/documentation" class=" m1 md:m-2">Documents</NuxtLink>     
                <!--AppThemeSwitcher /-->
            </div>   
        </div>
    </nav>
</template>
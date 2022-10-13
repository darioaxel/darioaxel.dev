<template>
<section class="relative bg-themeBackground">
    <div class="flex justify-center">
        <div class="invisible lg:visible absolute z-10 bottom-1 left-1 text-white md:w-1/12 ml-3 mb-2">
            <img src="~/assets/img/Space-Invaders-corner-left.svg">
        </div>
    <!-- main 9/12 container -->
    <div class="flex flex-wrap flex-row md:w-9/12 mt-8 border-t-2 border-t-themePrimary">
        
        <div class="w-full flex align-middle ml-6 mb-2 mt-8 p-1 section-title text-3xl font-bold text-themeText ">
                <div>Documentación de </div><div class=" ml-2 text-themePrimary">Ciclos Formativos</div>
        </div>
        
       
   <!-- row -->
   
        <div class="w-full flex flex-wrap justify-evenly pt-4 md:-mx-4 text-center text-themePrimary200">
            
            <NuxtLink to="/DAM" class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-themePrimary700 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-themePrimary200">DAM</h3>
                    <p>Módulos del C.F.G.S en Desarrollo de Aplicaciones Multiplataforma</p>
                </div>
                <!-- end service block -->
            </NuxtLink>
            <NuxtLink to="/ASIR" class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-themePrimary700 rounded-lg border-b transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div class="inline-block  mb-4">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold ">ASIR</h3>
                    <p >Módulos del C.F.G.S en Administración de Sistemas Informáticos y Redes.</p>
                </div>
                <!-- end service block -->
            </NuxtLink>           
        </div>
        </div>
        </div>
</section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap');

.section-title {
 font-family: 'Arimo', sans-serif;
 font-weight: 400;
}

</style>
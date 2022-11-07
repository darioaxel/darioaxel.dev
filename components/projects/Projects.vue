<template>
<div class="relative  bg-themeBackground">
       
<section class=" flex justify-center">
    <!-- main 9/12 container -->
    
    <div class="flex flex-wrap flex-row md:w-9/12 mt-8 border-t-2 border-t-themePrimary">
        
        <div class="w-full flex align-middle justify-between ml-6 mb-2 mt-8 p-1 text-themeText ">
                <div class=" flex section-title text-3xl font-bold ">
                        <div>Mis </div><div class=" ml-2 text-themePrimary">Proyectos</div>
                </div>
                <div>
                    Más proyectos ...
                </div>
        </div>
    
        <div class="flex flex-wrap w-full justify-evenly pt-4 md:-mx-4 text-center text-themePrimary200">
            <ProjectsCard topic="Hola Mundo!" title="un título" resume="Texto largo con el resumen" author="Darío Ureña" class=" ml-2 mr-2 mt-4" />
        </div>
        </div>
</section>
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap');

.section-title {
 font-family: 'Arimo', sans-serif;
 font-weight: 400;
}

</style>
<template>
  <!-- Section: Design Block -->
  <section class=" p-6 md:p-0 md:pb-14 md:pt-6 bg-themeBackground600 text-themeText text-center lg:text-left">
  
    <!-- Jumbotron -->
    <div class="container mx-auto xl:px-32 text-center lg:text-left">
      <div class="grid lg:grid-cols-2 flex items-center">
        <div class="mb-12 lg:mb-0">
          <div
            class="relative block rounded-lg bg-themeBackground400 shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
            style="backdrop-filter: blur(30px); z-index: 1"
          >
            <h2 class="text-3xl font-bold mb-4 display-5 text-gradient bg-gradient-to-r from-stone-200 to-themePrimary">Hola y bienvenid@s!👋</h2>
            <p class=" mb-12">
              Mi nombre es Darío Ureña, soy Ingeniero en Informática y,
              actualmente estoy dedicado a la enseñanza en Ciclos Formativos de Formación Profesional. 
              Me interesa todo el desarrollo web y frameworks como Vue y Nuxt, así como todo lo relacionado
              con el backend y Raspberry Pi, entre otros 💚.
            </p>    
            <p>  
              Si queréis saber más sobre mí, puedes hacer un tour por esta web o seguirme por las redes sociales que dejo aquí bajo 👇👇
            </p>           
          </div>
        </div>

        <div class="flex justify-center ">
          <img
            src="~/assets/img/darioaxel-nobackground.png"
            class=" w-72 bg-transparent shadow-lg shadow-white rounded-lg shadow-lg"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->
</template>

  <style>
      /* These are the KEY styles - you can add them directly to any object you want in your project */
      .fancy-border-radius {
        border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
      }
      .text-gradient {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    </style>
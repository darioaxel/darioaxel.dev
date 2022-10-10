<template>
<div class="">'Título' Ciclo Formativo de Grados Superior
    <p>Desarrollo de Aplicaciones Multiplataforma</p>
</div>
<div>
    Listado de módulos del Ciclo
    <div>Bases de datos</div>
    <div>Lenguajes de Marcas</div>
    <div>Programacion</div>
</div>
  <NuxtLink
    v-for="link of navigation"
    :key="link._path"
    :to="link._path"
  >
    {{ link.navTitle || link.title }}
  </NuxtLink>

</template>
<script setup>
    
    const blogQuery = queryContent('blog')
    /*
    // If you'd prefer to pass along raw `QueryBuilderParams`:
    const catsQuery = {
      where: [
        { _path: /^\/cats/ },
      ],
    }
    */
</script>
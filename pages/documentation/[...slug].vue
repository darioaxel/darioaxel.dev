<template>
Hey there!
 
 After
  <ContentDoc
    :path="$route.params.slug ? `/documentation/${$route.params.slug[0]}` : '/documentation'"
  >
  <!-- template #not-found>
      <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
    </template -->
  </ContentDoc>
</template>
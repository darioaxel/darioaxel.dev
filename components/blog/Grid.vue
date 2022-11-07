<template>

	<div class="relative  bg-themeBackground">

		<section class=" flex justify-center">
			<!-- main 9/12 container -->

			<div class="flex flex-wrap flex-row md:w-9/12 mt-8 border-t-2 border-t-themePrimary">

				<div class="w-full flex align-middle justify-between ml-6 mb-2 mt-8 p-1 text-themeText ">
					<div class=" flex  flex-col md:flex-row section-title text-3xl  ">
						<div>Mi </div>
						<div class=" ml-2 text-themePrimary">Blog</div>
					</div>
					<div>
						Entradas anteriores ...
					</div>
				</div>

				<!-- div class="flex flex-wrap justify-evenly pt-4 md:-mx-4 text-center text-themePrimary200">
                   
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<template
						v-for="(b, i) in blogNav[0].children"
						:key="`blogNavItem-${b._path}-${i}`"
					>
						<div class="px-7 py-5 rounded-lg border-2">
							<h2 class="text-lg font-semibold rainbow-text">
								{{ b.title }}
							</h2>
							
							<ul
								v-if="b.children"
								class="list-disc list-inside mt-4 pl-2 space-y-3"
							>
								<template
									v-for="(child, k) in b.children"
									:key="`childNav-${child._path}-${k}-${i}`"
								>
									<li
										class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
									>
										<NuxtLink :to="`/blog${child._path}`">
											{{ child.title }}
										</NuxtLink>
									</li>
								</template>
							</ul>
							<ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
								<li
									class="list-item text-sm text-gray-600 hover:text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
								>
									<NuxtLink :to="`/blog${b._path}`"> Get Started </NuxtLink>
								</li>
							</ul>
						</div>
					</template>
				</div  -->
			</div>
		</section>
	</div>

</template>

<script setup>
const { data: blogNav } = await useAsyncData('navigation', () => {
	return fetchContentNavigation(queryContent("/blog"))
})
</script>
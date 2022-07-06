import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/darioaxel/Trabajo/darioaxel.dev/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
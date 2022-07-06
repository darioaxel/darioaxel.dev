# MY WEB PROFILE DEVELOPMENT
- [MY WEB PROFILE DEVELOPMENT](#my-web-profile-development)
- [Install Nuxt 3 Minimal Starter](#install-nuxt-3-minimal-starter)
  - [Setup](#setup)
  - [Development Server](#development-server)
  - [Production](#production)
- [Setting up content, color-mode and Tailwindcss](#setting-up-content-color-mode-and-tailwindcss)


# Install Nuxt 3 Minimal Starter

Intalling the Nuxt 3 starter in a already created github repository.
```bash
# npx
npx nuxi init darioaxel.dev
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

# Setting up content, color-mode and Tailwindcss

Let's first install the dependencies

```bash
yarn add -d @nuxtjs/color-mode @nuxtjs/tailwindcss @nuxt/content
```

And setup them inside ***nuxt.config.ts*** file:
```javascript
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/color-mode','@nuxtjs/tailwindcss',
    '@nuxt/content'],
    colorMode: {
        classSuffix:""
    }
})
```
Create the ***tailwind.config.js*** file by running:
```bash
npx tailwindcss init
```
When running nuxt dev, this module will look for these two files:  

    ./assets/css/tailwind.css  
    ./tailwind.config.js

If they don't exist, the module will inject a basic configuration for each one so you don't have to create these files.


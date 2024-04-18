import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "darioaxel.dev",
  description: "My personal sandbox",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

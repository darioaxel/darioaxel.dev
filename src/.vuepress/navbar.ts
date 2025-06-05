import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  "/demo/",
  {
    text: "Docencia",
    icon: "lightbulb",
    prefix: "/docencia/",
    children: [
      {
        text: "CFGS DAM/DAW",
        icon: "lightbulb",
        prefix: "dam-daw/", children: [{ text: "0484 Bases de Datos", icon: "ellipsis", link: "basesdatos/" }],       
      },
       {
        text: "CFGS ASIR",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Ciclos Expecialización",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);

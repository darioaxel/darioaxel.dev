import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Docencia",
    icon: "lightbulb",
    prefix: "/docencia/",
    children: [
      {
        text: "CFGS DAM/DAW",
        icon: "lightbulb",
        prefix: "dam-daw/", 
        children: [{ text: "0484 Bases de Datos", link: "basesdatos/" }],       
      },
       {
        text: "CFGS ASIR",
        icon: "lightbulb",
        prefix: "asir/",
        children: [{ text: "0378 Gestión Bases de Datos", link: "gestionbasesdatos/" },
          { text: "0378 Admon. Sistemas Gestores BBDD", link: "admonsgbd/" }
        ],
      },
      {
        text: "Ciclos Expecialización",
        icon: "lightbulb",
        prefix: "ce/",
        children: [{ text: "Programación para IA", link: "pia/" }],
      },
    ],
  },
  "/demo/",
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);

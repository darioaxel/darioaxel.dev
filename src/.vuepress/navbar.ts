import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "Docencia",
    icon: "lightbulb",
    prefix: "/docencia/",
    children: [
      {
        text: "DAM",
        icon: "lightbulb",
        prefix: "dam/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "DAW",
        icon: "lightbulb",
        prefix: "daw/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "ASIR",
        icon: "lightbulb",
        prefix: "asir/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  }
]);

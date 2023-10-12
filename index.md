---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Urssivar"
  text: |
    Kaitag Standard
  tagline: |
    Interactive handbook & exemplar materials
    for the defiant North Caucasian tongue
  image:
    light: /hero-light.png
    dark: /hero-dark.png
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction/welcome
    - theme: alt
      text: Study the Grammar
      link: /reference/copula
    - theme: alt
      text: Read the Texts
      link: /library/phrasebook/basics/

features:
  - icon: 🚀
    title: Hands-on
    details: Minimalistic approach, aim at fast & practical usage.
  - icon: 🖱️
    title: Interactive
    details: Inline translations, parameterized contexts, audio playback.
  - icon: ⚡
    title: Charged
    details: Full-text search, offline mode, shareable URLs, source on GitHub.
---

<style>
.VPHero .VPImage {
  animation: floating 5s ease-in-out infinite;
}

@keyframes floating {
  50%  { translate: 0 -10px; }  
}
</style>

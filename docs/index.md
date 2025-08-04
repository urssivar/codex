---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Urssivar"
  text: |
    Kaitag Standard
  tagline: |
    Interactive handbook & exemplar materials for the reclaimed Caucasian tongue
  image:
    light: /hero-light.png
    dark: /hero-dark.png
  actions:
    - theme: brand
      text: Get Started
      link: /reference/copulas
    # - theme: alt
    #   text: Learn the Talk
    #   link: /library/phrasebook/basics/

features:
  - icon: 🚀
    title: Pratical
    details: Opinionated & minimalistic for swift hands-on use.
  - icon: 🖐️
    title: Interactive
    details: Inline translations, contextual examples, audio playback.
  - icon: ⚡
    title: Charged
    details: Full-text search, offline mode, shareable URLs.
---

<style>
.VPHero .VPImage {
  animation: floating 5s ease-in-out infinite;
  transform-origin: 0 0;
  scale: 0.8;
}

@keyframes floating {
  50%  { translate: 0 -10px; }  
}
</style>

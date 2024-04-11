---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Urssivar"
  text: |
    Кайтагский Стандарт
  tagline: |
    Интерактивное пособие и образцовые материалы для непокорного северокавказского языка
  image:
    light: /hero-light.png
    dark: /hero-dark.png
  actions:
    - theme: brand
      text: Начать
      link: /reference/core/copulas
    # - theme: alt
    #   text: Learn the Talk
    #   link: /library/phrasebook/basics/

features:
  - icon: 🚀
    title: Практический
    details: Выжатые правила для быстрого старта.
  - icon: 🖐️
    title: Интерактивный
    details: Подстрочные переводы, примеры с контекстом, озвучка.
  - icon: ⚡
    title: Заряженный
    details: Полнотекстный поиск, оффлайн режим <!--#TODO--> <i>(скоро)</i>, гиперссылки.
---

<style>
.VPHero .VPImage {
  animation: floating 5s ease-in-out infinite;
}

@keyframes floating {
  50%  { translate: 0 -10px; }  
}
</style>

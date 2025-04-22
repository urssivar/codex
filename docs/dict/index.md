---
pageClass: dict-page
---

# Kaitag dictionary

Lorem ipsum dolor sit a met, consectetur adipiscing elit. Phasellus purus ante, feugiat eu viverra quis, fringilla et mi. Praesent nec risus non ligula vehicula fermentum. Fusce dolor metus, aliquet tempus ipsum imperdiet, pretium pulvinar metus. Nullam malesuada pharetra ligula vel molestie. Nullam convallis ligula eget suscipit ornare. Sed in vehicula tellus, sed rutrum ex. Ut ultricies in felis id ullamcorper. Curabitur at metus elit. Proin est nisi, efficitur in lectus quis, accumsan dictum dolor.

<script setup>
const alphabet = [
    'а', 'б', 'в', 'г', 'ғ', 'д', 'е', 'ж', 'з', 'и', 'й',
    'к', 'кк', 'кь', 'ҡ', 'ҡҡ', 'ҡь', 'л', 'м', 'н',
    'о', 'п', 'пп', 'пь', 'р', 'с', 'т', 'тт', 'ть',
    'у', 'х', 'ҳ', 'ц', 'цц', 'ць', 'ч', 'чч', 'чь',
    'ш', 'ь', 'ъ', 'я'
];
const empty = ['о', 'ъ'];
</script>

---

<div class='letters'>
    <template v-for="l in alphabet">
        <a v-if="!empty.includes(l)" :href='"#_"+l'>{{ l }}</a>
        <span v-else >{{ l }}</span>
    </template>
</div>

<!--@include: ./words.md-->

---

*5,512 lexemes • database 22.05.2024* {.tw-text-center .tw-text-sm}

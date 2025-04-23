# Кайтагский словарь

*4,175 лексем, база 23.05.2025* {.tw:text-sm}

Lorem ipsum dolor sit a met, consectetur adipiscing elit. Phasellus purus ante, feugiat eu viverra quis, fringilla et mi. Praesent nec risus non ligula vehicula fermentum. Fusce dolor metus, aliquet tempus ipsum imperdiet, pretium pulvinar metus. Nullam malesuada pharetra ligula vel molestie. Nullam convallis ligula eget suscipit ornare. Sed in vehicula tellus, sed rutrum ex. Ut ultricies in felis id ullamcorper. Curabitur at metus elit. Proin est nisi, efficitur in lectus quis, accumsan dictum dolor.

## Алфавит

<script setup>
import { alphabet } from '../../../.vitepress/config/alphabet';
</script>

<div class='letters tw:flex tw:flex-wrap tw:capitalize'>
    <a v-for="l in alphabet" :href='"./"+l' class="tw:p-2">{{ l }}</a>
</div>

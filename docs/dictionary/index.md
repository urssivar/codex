# Dictionary

<!--@include: ./intro.md-->

<script setup>
import { data as dict } from './data/dictionary.data';
</script>

## Alphabet

<div class='tw-flex tw-gap-4 tw-flex-wrap tw-capitalize'>
    <a v-for="l in dict.alphabet" :href='"./"+l'>{{ l }}</a>
</div>

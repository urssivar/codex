# Dictionary

<!--@include: ./intro.md-->

<script setup>
import { data as dict } from './data/dictionary.data';
</script>

## Alphabet

<div class='tw-flex tw-gap-4 tw-flex-wrap tw-capitalize'>
    <a v-for="(_, l) in dict" :href='"./"+l'>{{ l }}</a>
</div>

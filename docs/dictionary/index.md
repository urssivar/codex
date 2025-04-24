
<!--@include: ./intro.md-->

<script setup>
import { alphabet } from '../../.vitepress/alphabet';
</script>

<div class='tw-flex tw-gap-4 tw-flex-wrap tw-capitalize'>
    <a v-for="l in alphabet" :href='"./"+l'>{{ l }}</a>
</div>

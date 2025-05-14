---
navbar: false
sidebar: false
outline: false
aside: false
next: false
prev: false
footer: false
---

<script setup>
import { data as dict } from './dictionary.data';
import { capitalize } from '~/composables/text';
import DIndex from '~/components/Dictionary/DIndex.vue';
import DWord from '~/components/Dictionary/DWord.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.querySelector('.VPLocalNav')?.remove();
})
</script>

<!--@include: ./intro.md-->

<div class='tw-columns-2 tw-break-before-page'>
    <template v-for="(words, letter) in dict">
        <h2 :id="letter">
            {{ capitalize(letter) }}
        </h2>
        <DWord v-for="word in words" :key="word.id" :word="word"/>
    </template>
</div>

<style>
.VPDoc {
    @apply !tw-pb-0 !tw-pt-0;
}

h1, h2 {
    @apply !tw-border-none !tw-mt-10 !tw-pt-0;
}

main > div > div > h2 {
    @apply tw-break-before-page;
}
</style>

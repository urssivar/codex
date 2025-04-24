---
navbar: false
sidebar: false
outline: false
aside: false
next: false
prev: false
---

# Kaitag dictionary

<!--@include: ./intro.md-->

<script setup>
import { data as dict } from './dictionary.data';
import { capitalize } from '~/composables/text';
import DIndex from '~/components/Dictionary/DIndex.vue';
import DWord from '~/components/Dictionary/DWord.vue';
</script>

## Alphabet {.tw-break-before-page}

<DIndex :dict="dict" local/>

<template v-for="(words, letter) in dict">
    <h2 :id="letter" class="tw-break-before-page tw-mb-4">
        {{ capitalize(letter) }}
    </h2>
    <div class="tw-grid tw-grid-cols-2 tw-gap-x-8">
        <DWord v-for="word in words" :key="word.id" :word="word"/>
    </div>
</template>

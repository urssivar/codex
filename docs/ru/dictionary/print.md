---
outline: false
sidebar: false
---

# Словарь

<!--@include: ./intro.md-->

<script setup>
import { data as dict } from './dictionary.data';
import { capitalize } from '~/composables/text';
import DIndex from '~/components/Dictionary/DIndex.vue';
import DWord from '~/components/Dictionary/DWord.vue';
</script>

## Алфавит {.tw-break-before-page}

<DIndex :dict="dict" local/>

<template v-for="(words, letter) in dict">
    <h2 :id="letter" class="tw-break-before-page">
        {{ capitalize(letter) }}
    </h2>
    <DWord v-for="word in words" :key="word.id" :word="word"/>
</template>

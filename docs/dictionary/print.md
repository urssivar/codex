---
outline: false
sidebar: false
---

# Kaitag dictionary

<!--@include: ./intro.md-->

<script setup>
import Word from '~/components/Dictionary/DWord.vue';
import { data as dict } from './data/dictionary.data.ts'
</script>

## Alphabet

<div class='tw-flex tw-gap-4 tw-flex-wrap tw-capitalize'>
    <a v-for="l in dict.alphabet" :href='"#"+l'>{{ l }}</a>
</div>

<template v-for="(words, letter) in dict.words">
    <template v-if="words.length">
        <h2 :id="letter" class="tw-break-before-page">
            {{ capitalize(letter) }}
        </h2>
        <Word v-for="word in words" :key="word.id" :word="word"/>
    </template>
</template>

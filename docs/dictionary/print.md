---
outline: false
sidebar: false
---

<script setup>
import Word from '../../components/Word.vue';
import { data as dict } from '../dict.data.ts'
import { alphabet } from '../../.vitepress/alphabet';
</script>

<!--@include: ./intro.md-->

<div class='tw-flex tw-gap-4 tw-flex-wrap tw-capitalize'>
    <template v-for="l in alphabet">
        <a v-if="dict[l]" :href='"#"+l'>{{ l }}</a>
        <span v-else>{{ l }}</span>
    </template>
</div>

<template v-for="(words, letter) in dict">
    <template v-if="words.length">
        <h2 :id="letter">
            {{ letter.charAt(0).toUpperCase() + letter.slice(1) }}
        </h2>
        <Word v-for="word in words" :key="word.id" :word="word"/>
    </template>
</template>

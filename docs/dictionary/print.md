---
pageClass: dict-page
outline: deep
---

# Test

<script setup>
import Word from '../../components/Word.vue';
import { data as dict } from '../words.data.ts'

</script>

<template v-for="(words, letter) in dict">
    <template v-if="words.length">
        <h2 :id="letter" class="tw-capitalize">{{ letter }}</h2>
        <Word v-for="word in words" :key="word.id" :word="word"/>
    </template>
</template>

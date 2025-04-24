---
outline: deep
---

<script setup>
import { useData } from 'vitepress';
import { onMounted } from 'vue';
import { capitalize } from '~/composables/text.ts';

import {data as dict} from './data/dictionary.data';
import Word from '~/components/Word.vue';

const { params } = useData();
const letter = params.value.letter;

onMounted(() => {
    const title = document.title.split(' | ');
    document.title = capitalize(letter) + ' | ' + title[title.length - 1];
});
</script>

<h1>{{ capitalize(letter) }}</h1>

<Word v-for="word in dict.words[letter]" :key="word.id" :word="word"/>

---
next: false
prev: false
---

<script setup>
import { useData } from 'vitepress';
import { onMounted } from 'vue';
import { capitalize } from '~/composables/text.ts';

import {data as dict} from './dictionary.data';
import DWord from '~/components/Dictionary/DWord.vue';

const { params } = useData();
const letter = params.value.letter;

onMounted(() => {
    const title = document.title.split(' | ');
    document.title = capitalize(letter) + ' | ' + title[title.length - 1];
});
</script>

<h1 class="tw-mb-4">{{ capitalize(letter) }}</h1>

<DWord v-for="word in dict[letter]" :key="word.id" :word="word"/>

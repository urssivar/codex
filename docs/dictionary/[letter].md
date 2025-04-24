---
outline: deep
---

<script setup>
import { useData } from 'vitepress';
import { data as dict } from '../dict.data.ts';
import Word from '../../components/Word.vue';

const { params } = useData();
const letter = params.value.letter;
</script>

<h1 class="tw-capitalize">{{ letter }}</h1>

<Word v-for="word in dict[letter]" :key="word.id" :word="word"/>

<script setup>
import { useData } from 'vitepress';
import { data as dict } from '../words.data.ts';
import Word from '../../components/Word.vue';

const { params } = useData();
const letter = params.value.letter;
</script>

## {{ letter }} {.tw-capitalize}

<Word v-for="word in dict[letter]" :key="word.id" :word="word"/>

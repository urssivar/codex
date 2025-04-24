# Dictionary

<!--@include: ./intro.md-->

<script setup>
import { data as dict } from './dictionary.data';
import DIndex from '~/components/Dictionary/DIndex.vue';
</script>

## Alphabet

<DIndex :dict="dict"/>

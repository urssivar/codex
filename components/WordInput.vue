<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
    word: string,
}>();

const inputs = ref<HTMLInputElement[]>([]);

onMounted(() => {
    inputs.value[0].focus();
});

function onFinish() {
    for (let i = 0; i < props.word.length; i++) {
        if (props.word[i] != inputs.value[i].value) {
            inputs.value[i].classList.add('err');
        }
    }
}

function onInput(letter: string, index: number) {
    inputs.value[index].value = letter;
    inputs.value[index].classList.remove('err');
    if (letter) {
        if (index < props.word.length - 1) {
            index++;
        }
        else {
            onFinish();
        }
    } else if (index > 0) {
        index--;
    }
    inputs.value[index].focus();
}

</script>

<template>
    <div>
        <input v-for="(_, i) in word" :ref="(el: any) => inputs[i] = el" @input="(e: any) => onInput(e.data, i)">
    </div>
</template>

<style scoped>
.err {
    border: 1px solid red;
}
</style>

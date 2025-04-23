<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import Keyboard from './Keyboard.vue';
import player from "./audio-player";

defineProps<{
    labels: Record<string, string>
}>();

let words = [] as [string, string][];
const word = ref('');
const input = ref("");

watch(input, () => {
    input.value = input.value.toLowerCase()
});

const first = ref(true);
const passed = computed(() => {
    const passed = word.value && input.value == word.value;
    if (passed) {
        first.value = false;
    }
    return !!passed;
});

onMounted(async () => {
    window.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            refresh();
        }
    });

    const avdan = await fetch('/typing/words.json')
        .then(r => r.json());
    words = [];
    for (let i = 1; i < avdan.length; i++) {
        const cards = avdan[i].cards;
        for (const c of cards) {
            if (c.caption.main.includes(' ')) continue;
            words.push([c.caption.main, c.audioPath]);
        }
    }
    refresh();
});


let audioSrc = '';

function refresh() {
    const r = Math.floor(Math.random() * words.length);
    word.value = words[r][0];
    audioSrc = '/typing/audio/' + words[r][1];
    player.play(audioSrc);

    input.value = '';
    document.querySelector<HTMLInputElement>('.p-inputotp input')?.focus();
}

function keyboardTap(k: string | undefined) {
    if (k) {
        if (input.value.length < word.value.length) {
            input.value += k;
        }
    } else if (input.value) {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}
</script>

<template>
    <div class="tw:flex tw:gap-4 tw:justify-center">
        <Button @click="player.play(audioSrc);" :label="labels['listen']" icon="pi pi-volume-down" size="small"
            :severity="first ? 'primary' : 'secondary'" />
        <Button @click="input = word" :label="labels['reveal']" icon="pi pi-eye" size="small" :disabled="passed"
            severity="secondary" text />
        <Button @click="refresh" :label="labels['next']" icon="pi pi-arrow-right" size="small"
            :severity="passed ? 'primary' : 'secondary'" />
    </div>
    <InputOtp class="tw:my-8" v-model="input" :length="word.length">
        <template #default="{ attrs, events, index: i }">
            <input type="text" v-bind="attrs" v-on="events" :readonly="passed"
                class="tw:duration-150 tw:rounded-md tw:font-medium tw:text-xl tw:p-2 tw:bg-slate-100 tw:text-slate-800 tw:w-8 tw:text-center"
                :class="input[i - 1] ? input[i - 1] == word[i - 1] ? 'tw:bg-green-100' : 'tw:bg-red-100' : ''" />
        </template>
    </InputOtp>
    <Keyboard :onTap="keyboardTap" />
</template>

<style>
.p-inputotp {
    gap: var(--tw-gap-1) !important;
    justify-content: var(tw-justify-center) !important;
}
</style>

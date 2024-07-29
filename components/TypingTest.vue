<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

let words = [] as [string, string][];
const word = ref('');
const audio = new Audio();
const input = ref("");

const first = ref(true);
const passed = computed(() => {
    const passed = word.value && input.value == word.value;
    if (passed) {
        first.value = false;
    }
    return passed;
});

onMounted(async () => {
    const avdan = await fetch('/typing/words.json')
        .then(r => r.json());
    words = [];
    for (let i = 1; i < avdan.length; i++) {
        const cards = avdan[i].cards;
        for (const c of cards) {
            words.push([c.caption.main, c.audioPath]);
        }
    }

    refresh();
});

window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        refresh();
    }
});

function refresh() {
    const r = Math.floor(Math.random() * words.length);
    word.value = words[r][0];
    audio.src = '/typing/audio/' + words[r][1];

    audio.play();
    input.value = '';
    document.querySelector<HTMLAudioElement>('.p-inputotp input')?.focus();
}
</script>

<template>
    <div class="tw-flex tw-gap-4 tw-m-4 tw-justify-center">
        <Button @click="audio.play()" label="Listen" icon="pi pi-volume-down" size="small"
            :severity="first ? 'primary' : 'secondary'" />
        <Button @click="input = word" label="Reveal" icon="pi pi-eye" size="small" severity="secondary"
            :disabled="passed" />
        <Button @click="refresh" label="Next" icon="pi pi-arrow-right" size="small"
            :severity="passed ? 'primary' : 'secondary'" />
    </div>
    <InputOtp v-model="input" :length="word.length">
        <template #default="{ attrs, events, index: i }">
            <input type="text" v-bind="attrs" v-on="events" :readonly="passed" class="p-inputotp-input"
                :class="input[i - 1] ? input[i - 1] == word[i - 1] ? 'corr' : 'err' : ''" />
        </template>
    </InputOtp>
</template>

<style>
.p-inputotp {
    @apply !tw-gap-1 !tw-justify-center;
}

.p-inputotp-input {
    @apply tw-rounded-md tw-bg-slate-100 tw-font-medium tw-text-lg tw-p-2;

    &.corr {
        @apply tw-bg-green-200;
    }

    &.err {
        @apply tw-bg-red-200;
    }
}
</style>

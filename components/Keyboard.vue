<script setup lang="ts">
defineProps<{
    onTap: (k: string | undefined) => void
}>();

const keys = [
    'йцукенгшҡзх',
    'ҳғвапролджэ',
    'ячсмитьб'
]
</script>

<template>
    <div class="tw-flex-col">
        <div class="tw-flex tw-justify-center" v-for="(r, i) in keys">
            <Button v-for="l in r" plain text :label="l" @click="onTap(l)" />
            <Button v-if="i == keys.length - 1" plain text icon="pi pi-delete-left" @click="onTap()" />
        </div>
    </div>
</template>

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
            <Button v-for="l in r" class="tw-m-0.5" severity="secondary" :label="l" @click="onTap(l)" size="small" />
            <Button v-if="i == keys.length - 1" class="tw-m-0.5" severity="secondary" icon="pi pi-delete-left" @click="onTap()"
                size="small" />
        </div>
    </div>
</template>

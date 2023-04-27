<script setup lang="ts">
const props = defineProps<{
    word: string
    translation?: string
}>()

let showTranslation = false;
</script>

<p>{props.word}</p>

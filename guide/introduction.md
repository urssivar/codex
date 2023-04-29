<script setup>
import W from '@/Word.vue';
import P from '@/Phrase.vue';
import { sample } from './introduction';
</script>

# Copulas

<p>
    <W t="бизи" h="cat"/> <W t="дикла" h="on hands"/> <W t="кабижил" h="sat"/> <W t="би" h="is"/>
</p>

<P :flags="sample.flags" :segments="sample.segments" />

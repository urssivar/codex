import DefaultTheme from 'vitepress/theme'
import Popper from "vue3-popper";
import W from '@/Word.vue';
import P from '@/Phrase.vue';

import './styles/vars.css'
import './styles/main.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Popper", Popper);
        app.component("W", W);
        app.component("P", P);
    }
}

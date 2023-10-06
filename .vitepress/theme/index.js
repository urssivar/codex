import DefaultTheme from 'vitepress/theme'
import Popper from "vue3-popper";
import Tooltip from '@/Tooltip.vue';
import Context from '@/Context.vue';
import Voice from '@/Voice.vue';

import './styles/vars.css'
import './styles/gloss.css'
import './styles/phrase.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Popper", Popper);
        app.component("Tooltip", Tooltip);
        app.component("Context", Context);
        app.component("Voice", Voice);
    }
}

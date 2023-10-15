import DefaultTheme from 'vitepress/theme'
import FloatingVue from 'floating-vue';
import Context from '@/Context.vue';
import Voice from '@/Voice.vue';

import './styles/vars.css';
import './styles/general.css';
import './styles/phrase.css';
import 'floating-vue/dist/style.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(FloatingVue);
        app.component("Context", Context);
        app.component("Voice", Voice);
    }
}

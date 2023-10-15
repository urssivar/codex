import DefaultTheme from 'vitepress/theme'
import FloatingVue from 'floating-vue';
import Context from '@/Context.vue';
import Voice from '@/Voice.vue';

import './styles/vars.css';
import './styles/general.css';
import './styles/phrase.css';
import './styles/tooltip.css';
import 'floating-vue/dist/style.css';

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.use(FloatingVue, {
            themes: {
                'hint': {
                    $extend: 'tooltip',
                    delay: { show: 0, hide: 0 },
                    html: true,
                },
            },
        });
        app.component("Context", Context);
        app.component("Voice", Voice);
    }
}

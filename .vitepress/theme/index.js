import DefaultTheme from 'vitepress/theme'
import FloatingVue from 'floating-vue';
import Context from '@/Context.vue';
import Voice from '@/Voice.vue';

import './styles/vars.css';
import './styles/general.css';
import './styles/phrase.css';
import './styles/tooltip.css';

import { h } from 'vue'
import Theme from 'vitepress/theme'

import RegisterSW from './components/RegisterSW.vue'


export default {
    extends: DefaultTheme,
    Layout() {
        return h(Theme.Layout, null, {
            'layout-bottom': () => h(RegisterSW)
        })
    },
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

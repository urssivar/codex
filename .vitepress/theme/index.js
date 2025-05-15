import DefaultTheme from 'vitepress/theme'
import FloatingVue from 'floating-vue';
import Context from '@/Context.vue';
import Voice from '@/Voice.vue';

import './styles/vars.css';
import './styles/general.css';
import './styles/phrase.css';
import './styles/tooltip.css';
import './styles/dict.css';

// import { h } from 'vue'
// import Theme from 'vitepress/theme'

// import RegisterSW from './components/RegisterSW.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import InputOtp from 'primevue/inputotp';
import Button from 'primevue/button';
import 'primeicons/primeicons.css';

import MyLayout from './MyLayout.vue';


export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    // Layout() {
    //     return h(Theme.Layout, null, {
    //         'layout-bottom': () => h(RegisterSW)
    //     })
    // },
    enhanceApp({ app }) {
        app.component("Context", Context);
        app.component("Voice", Voice);

        app.use(FloatingVue, {
            themes: {
                'hint': {
                    $extend: 'tooltip',
                    delay: { show: 0, hide: 0 },
                    html: true,
                },
            },
        });

        app.use(PrimeVue, {
            theme: {
                preset: Aura
            }
        });

        app.component('InputOtp', InputOtp);
        app.component('Button', Button);
    }
}

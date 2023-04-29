import DefaultTheme from 'vitepress/theme'
import Popper from "vue3-popper";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Popper", Popper);
    }
}

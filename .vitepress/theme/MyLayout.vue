<script setup>
import DefaultTheme from 'vitepress/theme';
import DSidebar from './components/DSidebar.vue';
import { useRoute } from 'vitepress';
import { computed } from 'vue';

const { Layout } = DefaultTheme;

const route = useRoute();
const isDict = computed(() => {
  const paths = route.path.split('/').filter((x) => x);
  const root = 'dictionary';
  return paths[0] == root || paths[1] == root;
});
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <div class="sidebar-nav-after">
        <DSidebar v-if="isDict" />
      </div>
    </template>
  </Layout>
</template>

<style>
.VPSidebar:not(.open) .sidebar-nav-after {
  width: calc(var(--vp-sidebar-width) - 64px);
}
</style>

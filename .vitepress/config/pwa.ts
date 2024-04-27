import type { PwaOptions } from '@vite-pwa/vitepress'

export const pwa: Partial<PwaOptions> = {
  outDir: '.vitepress/dist',
  registerType: 'autoUpdate',
  includeManifestIcons: false,
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'Urssivar Kaitag Standard',
    short_name: 'Urssivar',
    theme_color: '#1b1b1f',
    icons: [
        {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
        },
        {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'  
        },
        {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
        }
    ]
  },
  experimental: {
    includeAllowlist: true,
  },
  pwaAssets: {
    config: true,
    includeHtmlHeadLinks: false,
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: '/',
  },
}

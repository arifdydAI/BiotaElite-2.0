import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// BiotaElite 2.0 - MASTER-FIX-14
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2021,
    host: true,
    strictPort: true,
    watch: {
      ignored: ['**/.tmp*/**', '**/*.tmp', '**/scripts/**'],
    },
  },
  build: {
    modulePreload: {
      // Exclude all large data chunks from eager modulepreload injection.
      // These are lazily loaded on-demand when the user navigates to the
      // relevant page, so there is no benefit to preloading them on startup.
      // Removing them from the initial HTML reduces startup bandwidth by
      // ~268 kB gzip (data-species + data-taxa alone) on every page load.
      resolveDependencies(_filename, deps) {
        return deps.filter(dep =>
          !dep.includes('data-ident-keys') &&
          !dep.includes('data-taxon-knowledge') &&
          !dep.includes('data-species') &&
          !dep.includes('data-taxa') &&
          !dep.includes('data-core-zoology')
        );
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-misc';
          }
          if (id.includes('src/data/seedIdentKeys')) {
            return 'data-ident-keys';
          }
          if (id.includes('src/data/seedTaxonKnowledge')) {
            return 'data-taxon-knowledge';
          }
          if (id.includes('src/data/seedSpecies')) {
            return 'data-species';
          }
          if (id.includes('src/data/seedTaxa')) {
            return 'data-taxa';
          }
          if (
            id.includes('src/data/zoologyPhylaData') ||
            id.includes('src/data/comparativeData') ||
            id.includes('src/data/evolutionData') ||
            id.includes('src/data/anatomyPhysiologyData') ||
            id.includes('src/data/vertebratesData')
          ) {
            return 'data-core-zoology';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
})


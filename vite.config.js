import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    theme: {
        extend: {},
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
                'resources/css/app.css',
            ],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});

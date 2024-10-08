import { sveltekit } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3000
	},
	css: {
		postcss: {
			plugins: [tailwindcss('./tailwind.config.cjs'), autoprefixer()]
		}
	}
};

export default config;

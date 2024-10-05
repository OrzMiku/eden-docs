// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '伊甸园文档',
			social: {
				github: 'https://github.com/OrzMiku/eden-docs',
			},
			sidebar: [
				{
					label: '向导',
					items: [
						{ label: '欢迎', link: '/guides/' },
						{ label: '我的世界服务器', link: '/guides/minecraft/server-list' },
					],
				},
				{
					label: '惊艳收藏',
					autogenerate: {
						directory: '/awesome',
					},
				}
			],
		}),
	],
});

<script lang="ts">
	import FacebookIcon from '$lib/icons/facebook-icon.svelte';
	import GithubIcon from '$lib/icons/github-icon.svelte';
	import InstagramIcon from '$lib/icons/instagram-icon.svelte';
	import LinkedinIcon from '$lib/icons/linkedin-icon.svelte';
	import TwitterIcon from '$lib/icons/twitter-icon.svelte';
	import YoutubeIcon from '$lib/icons/youtube-icon.svelte';
	import type { Component } from 'svelte';
	import { setupViewTransition } from 'sveltekit-view-transition';

	type SocialMedia = {
		icon: Component;
		url: string;
	};

	const socialMedias: SocialMedia[] = [
		{
			icon: GithubIcon,
			url: 'https://www.github.com/tfkhdyt'
		},
		{
			icon: FacebookIcon,
			url: 'https://www.facebook.com/tfkhdyt142'
		},
		{
			icon: LinkedinIcon,
			url: 'https://www.linkedin.com/in/tfkhdyt142'
		},
		{
			icon: InstagramIcon,
			url: 'https://www.instagram.com/_tfkhdyt_/'
		},
		{
			icon: TwitterIcon,
			url: 'https://x.com/tfkhdyt__'
		},
		{
			icon: YoutubeIcon,
			url: 'https://www.youtube.com/@tfkhdyt'
		}
	];

	const { transition } = setupViewTransition();
</script>

<footer
	class="flex flex-wrap items-center justify-center gap-y-2 py-4 text-gray-600 md:justify-between dark:text-gray-400"
	use:transition={'footer'}
>
	<div class="flex flex-wrap items-center justify-center gap-x-2 text-sm md:text-base">
		<span>Copyright © 2024 Taufik Hidayat</span>
		<span>•</span>
		<a href="/privacy-policy" class="hover:underline">Privacy Policy</a>
	</div>
	<div>
		{#each socialMedias as { icon, url }}
			<a
				href={url}
				target="_blank"
				class="inline-flex h-fit w-fit items-center justify-center rounded-full p-2 transition hover:bg-black/10 dark:hover:bg-white/5"
				aria-label={url}
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</a>
		{/each}
	</div>
</footer>

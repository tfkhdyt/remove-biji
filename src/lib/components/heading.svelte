<script lang="ts">
	import { setupViewTransition } from 'sveltekit-view-transition';

	type Props = {
		title: string;
		subtitle?: string;
	};

	let { title, subtitle }: Props = $props();

	const { transition } = setupViewTransition();
</script>

<div class="space-y-2 text-center">
	<h1 class="h1 font-bold" use:transition={'heading'}>{title}</h1>
	{#if subtitle}
		<h2 class="h5 text-gray-600 dark:text-gray-400" use:transition={'subtitle'}>{subtitle}</h2>
	{/if}
</div>

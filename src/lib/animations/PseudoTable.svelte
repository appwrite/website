<script lang="ts">
	export let title: string;
	export let columns: string[];
</script>

<div class="pseudo-table">
	<p class="title">{title}</p>
	<div class="content">
		<div class="header">
			{#each columns as column}
				<span>{column}</span>
			{/each}
		</div>
		<div class="body">
			<slot rowClass="row" />
		</div>
	</div>
</div>

<style lang="scss">
	.pseudo-table {
		--left: 16.5rem;
		--max-w: calc(100% - var(--left));

		position: absolute;
		top: 0;
		z-index: 0;
		top: 2rem;
		left: var(--left);

		@include border-gradient;
		--m-border-radius: 1rem;
		--m-border-gradient-before: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 125.11%
		);
		border-radius: var(--m-border-radius);
		background: hsl(var(--aw-color-card));
		backdrop-filter: blur(8px);

		padding: 0.5rem;
		padding-block-start: 0;

		width: 25rem;
		max-width: var(--max-w);
		text-align: left;

		.title {
			color: var(--greyscale-50, #ededf0);
			font-family: Aeonik Pro;
			font-size: 1.25rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2rem; /* 160% */
			letter-spacing: -0.0125rem;
			padding: 1rem;
			text-align: left;
		}

		.content {
			border-radius: 0.75rem;
			background: rgba(255, 255, 255, 0.04);
			backdrop-filter: blur(30px);

			.header {
				color: var(--greyscale-400, #adadb1);
				font-family: Inter;
				font-size: 0.875rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.25rem; /* 142.857% */
				text-transform: uppercase;

				border-bottom: 1px solid hsl(var(--aw-color-greyscale-700));
				padding: 1rem;
			}

			.body {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				padding: 1rem;

				> :global(*) {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}

		.content :global(.header),
		.content :global(.row) {
			display: grid;
			grid-template-columns: 10rem 1fr;
			justify-content: space-between;
			align-items: center;
			gap: 1.5rem 3rem;
		}
	}
</style>

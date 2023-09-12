<script lang="ts">
	import '$scss/hljs.css';

	import { ctx } from '$lib/animations/Products.svelte';
	import { CodeWindow, Phone, Switch } from '$lib/components';

	const { active } = ctx.get() ?? {};

	const content = `const result = account.create(\n\tID.unique(),\n\t'walterobrian@example.com',\n\t'password',\n\t"Walter O'Brian"\n);`;
</script>

<!-- {#if $active === 'auth'} -->
<div class="code-window">
	<CodeWindow {content} />
</div>

<div class="phone">
	<Phone>
		<div class="phone-auth theme-light">
			<p class="title">Create an Account</p>
			<p class="subtitle">Please enter your details</p>
			<div class="inputs">
				<fieldset>
					<label for="name">Your Name</label>
					<input
						type="name"
						id="name"
						placeholder="Enter your name"
						value="Walter O'Brian"
						disabled
					/>
				</fieldset>
				<fieldset>
					<label for="email">Your Email</label>
					<input type="email" id="email" placeholder="Enter your email" />
				</fieldset>
				<fieldset>
					<label for="password">Create Password</label>
					<input type="password" id="password" placeholder="Enter Password" />
				</fieldset>
			</div>
			<button class="sign-up">Sign Up</button>
		</div>
	</Phone>
</div>

<div class="pseudo-table">
	<p class="title">Users</p>
	<div class="content">
		<div class="header">
			<span>Name</span>
			<span>Identifiers</span>
		</div>
		<div class="body">
			<div>
				<div class="avatar is-size-small">WO</div>
				<span>Walter O'Brian</span>
			</div>
			<span>eldad@appwrite.io, +447125533</span>
		</div>
	</div>
</div>

<div class="controls">
	<div>
		<span class="aw-icon-github" />
		<span>GitHub</span>
		<Switch />
	</div>
	<div class="sep" />
	<div>
		<span class="aw-icon-github" />
		<span>GitHub</span>
		<Switch />
	</div>
	<div class="sep" />
	<div>
		<span class="aw-icon-github" />
		<span>GitHub</span>
		<Switch />
	</div>
	<div class="sep" />
	<div>
		<span class="aw-icon-github" />
		<span>GitHub</span>
		<Switch />
	</div>
</div>

<!-- {/if} -->

<style lang="scss">
	.code-window {
		position: absolute;
		z-index: 20;
		bottom: 0;
		left: 15rem;
	}

	.phone {
		position: absolute;
		z-index: 10;
		top: 1rem;
		left: 5rem;

		.phone-auth {
			padding-block: 3rem;
			padding-inline: 1rem;

			color: rgba(67, 67, 71, 1);
			text-align: left;

			.title {
				color: #434347;
				font-family: Inter;
				font-size: 16px;
				font-style: normal;
				font-weight: 600;
				line-height: 22px; /* 137.5% */
				letter-spacing: -0.224px;
			}

			.subtitle {
				color: var(--greyscale-700, var(--color-greyscale-700, #56565c));
				font-family: Inter;
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: 20px; /* 142.857% */
				letter-spacing: -0.196px;
			}

			.inputs {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
				margin-block-start: 4rem;

				fieldset {
					display: flex;
					flex-direction: column;
					gap: 0.3125rem;
					width: 100%;

					label {
						color: var(--color-greyscale-700, #56565c);
						font-family: Inter;
						font-size: 12px;
						font-style: normal;
						font-weight: 400;
						line-height: 16px; /* 133.333% */
						letter-spacing: -0.168px;
					}

					input {
						all: unset;
						display: flex;
						padding: 8px 12px;
						align-items: flex-start;
						align-self: stretch;
						border-radius: 8px;
						border: 1px solid #d8d8db;

						color: #434347;
						font-family: Inter;
						font-size: 12px;
						font-style: normal;
						font-weight: 400;
						line-height: 16px; /* 133.333% */
						letter-spacing: -0.168px;
					}
				}
			}

			.sign-up {
				padding: 0.375rem 0.75rem;
				text-align: center;
				width: 100%;
				margin-block-start: 1.25rem;

				border-radius: 0.5rem;
				background: var(--appwrite-purple, #7c67fe);
				box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);

				color: var(--color-bw-white, #fff);
				text-align: center;

				/* Responsive/SubBody-500 */
				font-family: Inter;
				font-size: 14px;
				font-style: normal;
				font-weight: 500;
				line-height: 22px; /* 157.143% */
				letter-spacing: -0.07px;
			}
		}
	}

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

			.header,
			.body {
				display: grid;
				grid-template-columns: 10rem 1fr;
				justify-content: space-between;
				gap: 3rem;
			}

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
				padding: 1rem;

				> * {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}

				:nth-child(odd) {
					display: flex;
					align-items: center;
					gap: 0.75rem;
				}
			}
		}
	}

	.controls {
		@include border-gradient;
		--m-border-radius: 1rem;
		--m-border-gradient-before: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.12) 0%,
			rgba(255, 255, 255, 0) 125.11%
		);

		position: absolute;
		top: 0;
		right: 2rem;
		z-index: 30;

		padding: 0.75rem;

		display: flex;
		flex-direction: column;

		background: rgba(255, 255, 255, 0.08);
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.06), -2px 4px 9px 0px rgba(0, 0, 0, 0.06),
			-8px 15px 17px 0px rgba(0, 0, 0, 0.05), -19px 34px 23px 0px rgba(0, 0, 0, 0.03),
			-33px 60px 27px 0px rgba(0, 0, 0, 0.01), -52px 94px 30px 0px rgba(0, 0, 0, 0);
		backdrop-filter: blur(20px);

		> div {
			display: flex;
			align-items: center;

			> :nth-child(2) {
				margin-left: 0.5rem;
				color: var(--color-bw-white, #fff);

				font-family: Inter;
				font-size: 0.875rem;
				font-style: normal;
				font-weight: 500;
				line-height: 1.375rem; /* 157.143% */
				letter-spacing: -0.00394rem;
			}

			> :global(:nth-child(3)) {
				margin-left: 3rem;
			}
		}

		.sep {
			width: 100%;
			height: 1px;
			background-color: rgba(255, 255, 255, 0.12);
			margin-block: 0.5rem;
		}
	}
</style>

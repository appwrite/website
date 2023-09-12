<script lang="ts">
	import { ctx } from '$lib/animations/Products.svelte';

	const { active, scrollInfo } = ctx.get();
</script>

{#if $active === 'auth'}
	<div class="phone-auth theme-light">
		<p class="title">Create an Account</p>
		<p class="subtitle">Please enter your details</p>
		<div class="inputs">
			<fieldset>
				<label for="name">Your Name</label>
				<input type="name" id="name" placeholder="Enter your name" />
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
{/if}

<style lang="scss">
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
</style>

<script lang="ts">
	import { Main } from '$lib/layouts';
	import MainFooter from '$lib/components/MainFooter.svelte';
	import FooterNav from '$lib/components/FooterNav.svelte';
	import { Tabs } from '$lib/UI';
	import PreFooter from '$lib/components/PreFooter.svelte';
</script>


<Main>
	<div class="aw-big-padding-section">
		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container aw-u-padding-block-end-0">
					<div class="aw-hero is-align-start aw-u-max-width-580">
						<h1 class="aw-display aw-u-color-text-primary">
							Built by a community of 700+ contributors
						</h1>
						<div class="">
							<p class="aw-description">
								Appwrite is the open-source development platform where developers can build any
								application at any scale, using the language they want.
							</p>
							<div class="u-flex u-flex-wrap u-gap-12 u-margin-block-start-32">
								<button class="aw-button is-full-width-mobile">
									<span class="text">Join our Discord</span>
								</button>
								<button class="aw-button is-secondary is-full-width-mobile">
									<span aria-hidden="true" class="aw-icon-star"></span>
									<span>Star on GitHub</span>
									<span class="aw-inline-tag aw-sub-body-400">99.9k</span>
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<ul class="aw-grid-row-4 aw-grid-row-4-mobile-2"
						style="--gap-mobile:1.5rem;">
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">32k+</div>
								<div class="aw-description">GitHub Stars</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">8k+</div>
								<div class="aw-description">Pull Requests</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">15k+</div>
								<div class="aw-description">Commits</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">2.5k+</div>
								<div class="aw-description">Issues</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">625</div>
								<div class="aw-description">Open Issues</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">1.9k+</div>
								<div class="aw-description">Closed Issues</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">4.9k+</div>
								<div class="aw-description">Forks</div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal">
								<div class="aw-title aw-u-color-text-primary">20k+</div>
								<div class="aw-description">Contributors</div>
							</div>
						</li>

					</ul>
				</section>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero is-mobile-center aw-u-gap-20 aw-u-max-width-800">
						<h1 class="aw-headline aw-u-color-text-primary">
							Appwrite is built by active contributors
						</h1>
						<div class="">
							<p class="aw-description">
								Inspire and get inspired. Join our community of maintainers and contributors and help us make Appwrite better for developers all around the world.
							</p>
							<div class="u-flex u-flex-wrap u-main-center u-gap-12 u-margin-block-start-32">
								<button class="aw-button is-secondary is-full-width-mobile">
									<span>View all contributors</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero is-align-start">
						<h2 class="aw-display aw-u-color-text-primary">
							Get Involved
						</h2>
						<div class="">
							<p class="aw-description">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices lacus. Duis pellentesque quis purus in posuere.
							</p>
						</div>
					</div>

					<div class="aw-card is-normal u-margin-block-start-32" style="--card-padding:2rem; --card-padding-mobile:1.25rem;">
						<div class="u-flex aw-u-flex-direction-column-mobile
									aw-u-gap-80 aw-u-row-gap-48">
							<div>
								<h3 class="aw-label aw-u-color-text-primary">Check our Open Issues</h3>
								<p class="aw-main-body-500 u-margin-block-start-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<button class="aw-button is-secondary u-margin-block-start-32">
									<span class="aw-icon-github" aria-hidden="true"></span>
									<span class="">View all Open Issues</span>
								</button>
							</div>
							<div class="u-stretch">
								<table class="aw-table-line">
									<thead class="aw-table-line-head">
									<tr class="aw-table-line-row">
										<th class="aw-table-line-cell aw-u-color-text-primary u-un-break-text">Issue #</th>
										<th class="aw-table-line-cell aw-u-color-text-primary">Title</th>
									</tr>
									</thead>
									<tbody class="aw-table-line-body">
										<tr class="aw-table-line-row">
											<td class="aw-table-line-cell u-un-break-text">#24</td>
											<td class="aw-table-line-cell">
												<div>
													<span class="aw-sub-body-500 aw-u-color-text-primary">Create a Helm Chart for Appwrite</span>
													<span>(appwrite/appwrite)</span>
												</div>
												<ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8">
													<li>
														<div class="aw-tag">Enhancement</div>
													</li>
													<li>
														<div class="aw-tag">Help Wanted</div>
													</li>
													<li>
														<div class="aw-tag">Discussion</div>
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-table-line-row">
											<td class="aw-table-line-cell u-un-break-text">#24</td>
											<td class="aw-table-line-cell">
												<div>
													<span class="aw-sub-body-500 aw-u-color-text-primary">Create a Helm Chart for Appwrite</span>
													<span>(appwrite/appwrite)</span>
												</div>
												<ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8">
													<li>
														<div class="aw-tag">Enhancement</div>
													</li>
													<li>
														<div class="aw-tag">Help Wanted</div>
													</li>
													<li>
														<div class="aw-tag">Discussion</div>
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-table-line-row">
											<td class="aw-table-line-cell u-un-break-text">#24</td>
											<td class="aw-table-line-cell">
												<div>
													<span class="aw-sub-body-500 aw-u-color-text-primary">Create a Helm Chart for Appwrite</span>
													<span>(appwrite/appwrite)</span>
												</div>
												<ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8">
													<li>
														<div class="aw-tag">Enhancement</div>
													</li>
													<li>
														<div class="aw-tag">Help Wanted</div>
													</li>
													<li>
														<div class="aw-tag">Discussion</div>
													</li>
												</ul>
											</td>
										</tr>
										<tr class="aw-table-line-row">
											<td class="aw-table-line-cell u-un-break-text">#24</td>
											<td class="aw-table-line-cell">
												<div>
													<span class="aw-sub-body-500 aw-u-color-text-primary">Create a Helm Chart for Appwrite</span>
													<span>(appwrite/appwrite)</span>
												</div>
												<ul class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-8">
													<li>
														<div class="aw-tag">Enhancement</div>
													</li>
													<li>
														<div class="aw-tag">Help Wanted</div>
													</li>
													<li>
														<div class="aw-tag">Discussion</div>
													</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<h4 class="aw-label aw-u-color-text-primary">Other ways to help</h4>
					<ul class="grid-box u-gap-32 aw-u-gap-20-mobile u-margin-block-start-20" style="--grid-item-size:15rem">
						<li>
							<div class="aw-card is-normal u-flex-vertical u-gap-8" style="--card-padding:1.25rem;">
								<div class="aw-sub-body-500 aw-u-color-text-primary">Blogging & Speaking</div>
								<div class="aw-sub-body-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal u-flex-vertical u-gap-8" style="--card-padding:1.25rem;">
								<div class="aw-sub-body-500 aw-u-color-text-primary">Presenting at Meetups</div>
								<div class="aw-sub-body-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal u-flex-vertical u-gap-8" style="--card-padding:1.25rem;">
								<div class="aw-sub-body-500 aw-u-color-text-primary">Reporting Bugs</div>
								<div class="aw-sub-body-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal u-flex-vertical u-gap-8" style="--card-padding:1.25rem;">
								<div class="aw-sub-body-500 aw-u-color-text-primary">Submitting New Ideas</div>
								<div class="aw-sub-body-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal u-flex-vertical u-gap-8" style="--card-padding:1.25rem;">
								<div class="aw-sub-body-500 aw-u-color-text-primary">Improving documentation</div>
								<div class="aw-sub-body-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							</div>
						</li>
						<li>
							<div class="aw-card is-normal u-flex-vertical u-gap-8" style="--card-padding:1.25rem;">
								<div class="aw-sub-body-500 aw-u-color-text-primary">Helping other contributors</div>
								<div class="aw-sub-body-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
							</div>
						</li>
					</ul>
				</section>
			</div>
			<div class="aw-big-padding-section-level-2">
				<section class="aw-container">
					<div class="u-flex u-gap-16 u-main-space-between">
						<h4 class="aw-label aw-u-color-text-primary">Upcoming Events</h4>
						<div class="u-flex u-gap-12">
							<button class="aw-icon-button" aria-label="Move carousel backward" disabled>
								<span class="aw-icon-arrow-left" aria-hidden="true"></span>
							</button>
							<button class="aw-icon-button" aria-label="Move carousel forward">
								<span class="aw-icon-arrow-right" aria-hidden="true"></span>
							</button>
						</div>
					</div>

					<div class="aw-grid-articles-scroll">
						<ul class="aw-grid-articles aw-u-gap-32 u-margin-block-start-32">
							<li>
								<a class="aw-grid-articles-item aw-u-gap-20" href="">
									<div class="aw-grid-articles-item-image">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC" class="aw-image-ratio-4/3" alt="">
									</div>
									<div class="aw-grid-articles-item-content is-no-gap">
										<ul class="u-flex u-flex-wrap aw-u-list-inline-dot-sep">
											<li class="u-flex u-cross-baseline u-gap-4">
												<span class="aw-icon-calendar aw-u-color-text-tertiary" aria-hidden="true"></span>
												<time class="">June 26, 2023</time>
											</li>
											<li class="u-flex u-cross-baseline u-gap-4">
												<span class="aw-icon-location aw-u-color-text-tertiary" aria-hidden="true"></span>
												<span class="">Appwrite Discord</span>
											</li>
										</ul>
										<h5 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
											Appwrite Office Hours
										</h5>
										<p class="aw-sub-body-500 u-margin-block-start-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
										<div class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-20">
											<button class="aw-button is-secondary">
												<span>View event</span>
											</button>
											<button class="aw-button is-text">
												<span>Add to calendar</span>
											</button>
										</div>
									</div>
								</a>
							</li>
							<li>
								<a class="aw-grid-articles-item aw-u-gap-20" href="">
									<div class="aw-grid-articles-item-image">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC" class="aw-image-ratio-4/3" alt="">
									</div>
									<div class="aw-grid-articles-item-content is-no-gap">
										<ul class="u-flex u-flex-wrap aw-u-list-inline-dot-sep">
											<li class="u-flex u-cross-baseline u-gap-4">
												<span class="aw-icon-calendar aw-u-color-text-tertiary" aria-hidden="true"></span>
												<time class="">June 26, 2023</time>
											</li>
											<li class="u-flex u-cross-baseline u-gap-4">
												<span class="aw-icon-location aw-u-color-text-tertiary" aria-hidden="true"></span>
												<span class="">Appwrite Discord</span>
											</li>
										</ul>
										<h5 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
											Appwrite Office Hours
										</h5>
										<p class="aw-sub-body-500 u-margin-block-start-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
										<div class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-20">
											<button class="aw-button is-secondary">
												<span>View event</span>
											</button>
											<button class="aw-button is-text">
												<span>Add to calendar</span>
											</button>
										</div>
									</div>
								</a>
							</li>
							<li>
								<a class="aw-grid-articles-item aw-u-gap-20" href="">
									<div class="aw-grid-articles-item-image">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC" class="aw-image-ratio-4/3" alt="">
									</div>
									<div class="aw-grid-articles-item-content is-no-gap">
										<ul class="u-flex u-flex-wrap aw-u-list-inline-dot-sep">
											<li class="u-flex u-cross-baseline u-gap-4">
												<span class="aw-icon-calendar aw-u-color-text-tertiary" aria-hidden="true"></span>
												<time class="">June 26, 2023</time>
											</li>
											<li class="u-flex u-cross-baseline u-gap-4">
												<span class="aw-icon-location aw-u-color-text-tertiary" aria-hidden="true"></span>
												<span class="">Appwrite Discord</span>
											</li>
										</ul>
										<h5 class="aw-sub-body-500 aw-u-color-text-primary u-margin-block-start-8">
											Appwrite Office Hours
										</h5>
										<p class="aw-sub-body-500 u-margin-block-start-4">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
										<div class="u-flex u-flex-wrap u-gap-8 u-margin-block-start-20">
											<button class="aw-button is-secondary">
												<span>View event</span>
											</button>
											<button class="aw-button is-text">
												<span>Add to calendar</span>
											</button>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>

				</section>
			</div>
		</div>


		<div class="aw-big-padding-section-level-1 u-position-relative aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero is-center">
						<h2 class="aw-display aw-u-color-text-primary">Inspire and get inspired</h2>
						<p class="aw-description">
							Visit our showcase website Built with Appwrite to find inspiration for your projects or to showcase what you have built. Join hundreds of developers.
						</p>
						<button class="aw-button is-secondary aw-u-cross-child-center u-margin-block-start-16">
							<span>View all projects</span>
						</button>
					</div>
				</div>
				<div class="aw-big-padding-section-level-2">
					<div class="aw-container">
						<ul class="aw-grid-3-desktop-1-mobile">
							<li>
								<a class="aw-card is-white" href="/">
									<div class="u-padding-12">
										<h3 class="aw-main-body-500">Glitch</h3>
										<p class="u-trim-2">
											Appwrite-powered Hackathon Collaboration Tool for streamlined team communication
										</p>
									</div>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC"
										 class="aw-image-ratio-9-4" alt="">
								</a>
							</li>
							<li>
								<a class="aw-card is-white" href="/">
									<div class="u-padding-12">
										<h3 class="aw-main-body-500">Glitch</h3>
										<p class="u-trim-2">
											Appwrite-powered Hackathon Collaboration Tool for streamlined team communication
										</p>
									</div>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC"
										 class="aw-image-ratio-9-4" alt="">
								</a>
							</li>
							<li>
								<a class="aw-card is-white" href="/">
									<div class="u-padding-12">
										<h3 class="aw-main-body-500">Glitch</h3>
										<p class="u-trim-2">
											Appwrite-powered Hackathon Collaboration Tool for streamlined team communication
										</p>
									</div>
									<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAGUCAYAAADd3Z2SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjRSURBVHgB7dzdcRNXGIDhswwFkA6UCgwd0ElIBQkVABXEHYRS6ACoIEoFoQPlrH8yCmM8sHtlv88z842Ebe4037w6q9Uy7vdszqs5F3MONzPOHok7nU4DtlqWZcBW9g9njmePn+Z8nvNh7pjjt/7Dt7bPYc6fc14OuIcFxB4CiD3sH77D+znv7gqhJ3f88W9zPg7xAwA8bK/mfJyx/PvXv/g6gN7MuRzXl74AAB66tWn+mBH05vyH5+fP68nP5YAf4AiaPVwCYw/7hw1ez71z1Tq32+cwri97Ofnhh1hA7CGA2MP+YYMvc16snwm6vQS2HguJHwDgMVtbZ73J6+oE6DDnrwEbeAfGHk6A2MP+YYef1hOglwMAoOPVGkDPBwBAx8UaQBcDAKDjsAbQYQAAdByeDACAmPUWDB+jZzN3YbCHu8DYw/5hDydAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgJynp9NpwFbLsgzYyv5hD/uHPZwAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkLHNOAzY6nbx82G5ZlgFb2T/s4QQIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACDn6el0GrDVsiwDtrJ/2MP+YQ8nQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAICcNYCOAwCg4+gECADIcQIEANRcnQD9PQAAOj6vAfRpAAB0fFpOp9Oz+eSfARssyzJgq7l/Bmxl/7DDz0/mC+jLfPJhAAA8fu/nHK/yeb4LO8yHj3OeDfgB3oGxhxMg9rB/2GA99Hkxbm+Dny+i43x4NwAAHq+1dY7rk/++B2hG0OUQQQDA47Q2zuXtP/73RYgzgt7Oh9fj+ogIAOChW5tmbZu35z+88wLqzWeC1j/8ZcA9XINnD58BYg/7h+/wYc6v444vfb731XMTQi/nPJ9zMedw86vDgGEBsY8AYg/7hzPHs8d1Po/ru72+eUXrXzCikBuKJ0jJAAAAAElFTkSuQmCC"
										 class="aw-image-ratio-9-4" alt="">
								</a>
							</li>

						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="aw-big-padding-section-level-1 aw-white-section theme-light">
			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-grid-15-25-desktop">
						<div class="aw-hero is-align-start">
							<div class="aw-display aw-u-color-text-primary">Visit the community</div>
							<p class="aw-description">Discover more about Appwrite by visiting our community across platforms.</p>
						</div>
						<ul class="aw-multi-columns-1">
							<li>
								<div
										class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
										style="--card-padding:2rem"
								>
									<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
											class="icon-github aw-u-font-size-40"
											aria-hidden="true"
											aria-label="GitHub"
									/>
									</div>
									<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
								</div>
							</li>
							<li>
								<div
										class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
										style="--card-padding:2rem"
								>
									<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
											class="icon-github aw-u-font-size-40"
											aria-hidden="true"
											aria-label="GitHub"
									/>
									</div>
									<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
								</div>
							</li>
							<li>
								<div
										class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
										style="--card-padding:2rem"
								>
									<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
											class="icon-github aw-u-font-size-40"
											aria-hidden="true"
											aria-label="GitHub"
									/>
									</div>
									<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
								</div>
							</li>
							<li>
								<div
										class="aw-card is-white aw-u-min-block-size-320 u-flex-vertical"
										style="--card-padding:2rem"
								>
									<div class="u-flex-vertical u-main-space-between u-gap-32">
									<span
											class="icon-github aw-u-font-size-40"
											aria-hidden="true"
											aria-label="GitHub"
									/>
									</div>
									<div class="aw-title u-margin-block-start-auto">125k+ Discord Members</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="aw-big-padding-section-level-1 u-padding-0">



			<div class="aw-big-padding-section-level-2">
				<div class="aw-container">
					<div class="aw-hero is-center aw-u-max-width-800">
						<h3 class="aw-display aw-u-color-text-primary">Appwrite insights</h3>
						<p>Sign up to our blog and get the latest insights from Appwrite. Learn more about engineering, product design, building community, and tips & tricks for using Appwrite.</p>
					</div>
					<div
							class="aw-subscribe-input aw-input-text is-reset-input-inside u-width-full-line aw-u-max-width-380 u-margin-inline-auto u-margin-block-start-32"
					>
						<input type="email" placeholder="Enter your email" />
						<button class="aw-button">Sign up</button>
					</div>
				</div>
			</div>

			<div
				class="aw-big-padding-section-level-2 is-margin-replace-padding u-position-relative"
			>
				<div class="aw-container">
					<PreFooter />
					<FooterNav />
					<MainFooter />
				</div>
			</div>
		</div>
	</div>
</Main>

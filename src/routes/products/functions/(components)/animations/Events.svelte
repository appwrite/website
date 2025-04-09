<div class="bg-greyscale-850/90 flex flex-col rounded-2xl p-2">
    <div
        class="flex h-[250px] flex-1 flex-col items-center justify-center rounded-lg bg-white/[0.02] p-2"
    >
        <ul class="flex flex-col items-center gap-4">
            <li
                class="font-aeonik-fono text-caption text-primary w-fit rounded-full bg-white/6 px-2 py-1 text-center opacity-60"
            >
                buckets.*.files.*.delete
            </li>
            <li
                class="font-aeonik-fono text-caption text-primary w-fit rounded-full bg-white/6 px-2 py-1 text-center"
            >
                databases.*.collections.*.create
            </li>
            <li
                class="font-aeonik-fono text-caption text-primary w-fit rounded-full bg-white/6 px-2 py-1 text-center opacity-60"
            >
                functions.*.executions.*.delete
            </li>
            <li
                class="font-aeonik-fono text-caption text-primary w-fit rounded-full bg-white/6 px-2 py-1 text-center opacity-40"
            >
                teams.*.memberships.*.create
            </li>
        </ul>
    </div>
    <div class="p-4">
        <span class="text-primary">Events</span>
        <p class="text-secondary">Configure Functions to be executed in response to events.</p>
    </div>
</div>

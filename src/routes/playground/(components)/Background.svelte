<script lang="ts">
    const cols = 10;

    const array = Array.from({ length: cols });
</script>

<div class="grid w-[33vw]" style:grid-template-columns="repeat({cols}, minmax(0, 1fr))">
    {#each array as _}
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" transform="matrix(1 0 0 -1 0 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 40)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 32)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 24)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 16)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 8)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 40)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 32)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 24)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 16)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 8)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 40)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 32)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 24)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 16)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 8)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 40)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 32)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 24)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 16)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 8)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 40)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 32)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 24)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 16)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 8)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 40)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 32)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 24)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 16)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 8)" fill="#E4E4E7" />
        </svg>
    {/each}
    {#each array as _}
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_125_29089)">
                <rect width="48" height="48" transform="matrix(1 0 0 -1 0 48)" fill="white" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 0 48)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 0 40)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 0 32)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 0 24)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 0 16)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 0 8)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 4 36)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 4 20)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 4 4)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 8 48)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 8 40)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 8 32)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 8 24)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 8 16)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 8 8)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 12 44)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 12 36)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 12 28)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 12 20)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 12 12)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 12 4)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 16 48)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 16 40)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 16 32)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 16 24)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 16 16)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 16 8)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 20 36)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 20 20)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 20 4)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 24 48)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 24 40)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 24 32)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 24 24)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 24 16)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 24 8)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 28 44)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 28 36)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 28 28)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 28 20)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 28 12)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 28 4)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 32 48)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 32 40)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 32 32)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 32 24)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 32 16)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 32 8)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 36 36)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 36 20)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 36 4)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 40 48)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 40 40)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 40 32)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 40 24)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 40 16)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 40 8)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 44 44)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 44 36)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 44 28)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 44 20)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 44 12)" fill="#E4E4E7" />
                <rect width="4" height="4" transform="matrix(1 0 0 -1 44 4)" fill="#E4E4E7" />
            </g>
            <defs>
                <clipPath id="clip0_125_29089">
                    <rect width="48" height="48" fill="white" transform="matrix(1 0 0 -1 0 48)" />
                </clipPath>
            </defs>
        </svg>
    {/each}
    {#each array as _}
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" transform="matrix(1 0 0 -1 0 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 32)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 16)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 32)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 16)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 32)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 16)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 8)" fill="white" />
        </svg>
    {/each}
    {#each array as _}
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="48" height="48" transform="matrix(1 0 0 -1 0 48)" fill="#E4E4E7" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 32)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 0 16)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 8 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 32)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 16 16)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 24 8)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 48)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 32)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 32 16)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 40)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 24)" fill="white" />
            <rect width="4" height="4" transform="matrix(1 0 0 -1 40 8)" fill="white" />
        </svg>
    {/each}
</div>

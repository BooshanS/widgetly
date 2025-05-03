<script lang="ts">
    import WidgetCard from "../ui/widgetCard.svelte";
    import type { Widget } from '$lib/types';

    export let widgets: (Widget & { imageUrl: string })[];
</script>

<div class="widget_cards">
    {#each widgets as widget (widget.id)}
        <WidgetCard {widget} />
    {/each}
</div>

<style>
    .widget_cards {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2.5rem 1rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import type { Widget, WidgetImage } from '$lib/types';
  import WidgetCard from './WidgetCard.svelte';

  let widgets: Widget[] = [];
  let widgetImages: Record<string, WidgetImage[]> = {};
  let loading = true;
  let error: Error | null = null;

  onMount(async () => {
    try {
      await loadWidgetsData();
    } catch (e) {
      error = e as Error;
      console.error('Error loading widgets:', e);
    } finally {
      loading = false;
    }
  });

  async function loadWidgetsData(): Promise<void> {
    try {
      // Fetch widgets
      const { data: widgetsData, error: widgetError } = await supabase
        .from('widgets')
        .select('*');

      if (widgetError) {
        console.error('Error loading widgets:', widgetError);
        throw new Error(widgetError.message);
      }

      if (!widgetsData || widgetsData.length === 0) {
        console.error('No widgets data received');
        return;
      }

      // Store widgets data
      widgets = widgetsData as Widget[];

      // Fetch widget images for all widgets
      const widgetIds = widgets.map(widget => widget.id);
      const { data: imagesData, error: imagesError } = await supabase
        .from('widget_images')
        .select('*')
        .in('widget_id', widgetIds);
      
      if (imagesError) {
        console.error('Error loading widget images:', imagesError);
        throw new Error(imagesError.message);
      }

      // Group images by widget_id
      const groupedImages: Record<string, WidgetImage[]> = {};
      
      if (imagesData && imagesData.length > 0) {
        // Process each image to include public URL
        const processedImages = imagesData.map(image => ({
          ...image,
          publicUrl: supabase.storage
            .from('widget-images')
            .getPublicUrl(image.image_path).data.publicUrl
        }));

        // Group by widget_id
        processedImages.forEach(image => {
          if (!groupedImages[image.widget_id]) {
            groupedImages[image.widget_id] = [];
          }
          groupedImages[image.widget_id].push(image);
        });
      }

      widgetImages = groupedImages;
    } catch (error) {
      console.error('Failed to load widgets:', error);
      throw error;
    }
  }
</script>

<!-- Display Widgets from Database -->
{#if loading}
  <p class="widgets-status">Loading widgets...</p>
{:else if error}
  <p class="widgets-status error">Error: {error.message}</p>
{:else if widgets.length === 0}
  <p class="widgets-status">No widgets found.</p>
{:else}
  <div class="widgets-container">
    {#each widgets as widget}
      <WidgetCard 
        {widget} 
        images={widgetImages[widget.id] || []} 
      />
    {/each}
  </div>
{/if}

<style>
  .widgets-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
    padding: 2rem;
    z-index: 10;
    position: relative;
  }
  
  .widgets-status {
    text-align: center;
    margin: 2rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    font-size: 1.2rem;
    z-index: 10;
    position: relative;
  }
  
  .widgets-status.error {
    color: #d32f2f;
    background: rgba(255, 235, 238, 0.9);
  }
</style> 
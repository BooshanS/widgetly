<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import type { Widget, WidgetImage } from '$lib/types';

  // Props
  export let widget: Widget;
  export let images: WidgetImage[] = [];

  // Helper function to get image by size
  function getImageBySize(size: 'large' | 'medium' | 'small'): string {
    return images.find(img => img.size === size)?.publicUrl || '';
  }
</script>

<div class="widget-card">
  <h3>{widget.widget_name}</h3>
  <p class="company">{widget.company_name}</p>
  
  <!-- Display widget images if available -->
  {#if images.length > 0}
    <div class="widget-images">
      <!-- Large image -->
      {#if getImageBySize('large')}
        <img 
          src={getImageBySize('large')} 
          alt="{widget.widget_name} large" 
          class="widget-image large"
        />
      {/if}
      
      <!-- Medium and small images in a flex container -->
      <div class="widget-thumbnails">
        {#if getImageBySize('medium')}
          <img 
            src={getImageBySize('medium')} 
            alt="{widget.widget_name} medium" 
            class="widget-image medium"
          />
        {/if}
        
        {#if getImageBySize('small')}
          <img 
            src={getImageBySize('small')} 
            alt="{widget.widget_name} small" 
            class="widget-image small"
          />
        {/if}
      </div>
    </div>
  {:else}
    <p class="no-images">No images available for this widget.</p>
  {/if}
</div>

<style>
  .widget-card {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .widget-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    color: #333;
  }
  
  .company {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .no-images {
    color: #999;
    font-style: italic;
  }
  
  .widget-images {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .widget-image {
    border-radius: 8px;
    object-fit: cover;
  }
  
  .widget-image.large {
    width: 100%;
    height: 200px;
  }
  
  .widget-thumbnails {
    display: flex;
    gap: 1rem;
  }
  
  .widget-image.medium {
    width: 120px;
    height: 120px;
  }
  
  .widget-image.small {
    width: 80px;
    height: 80px;
  }
</style> 
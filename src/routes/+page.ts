import type { PageLoad } from './$types';
import type { Widget, WidgetImage } from '$lib/types';

// Define the types for our page data
export interface PageData {
  profiles: any[];
  widgets?: Widget[];
  widgetImages?: Record<string, WidgetImage[]>;
}

export const load: PageLoad<PageData> = async ({ data }) => {
  return {
    ...data
  };
} 
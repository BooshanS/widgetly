export interface Widget {
    id: string;
    company_name: string;
    widget_name: string;
    created_at?: string;
}

export interface WidgetImage {
    id: string;
    widget_id: string;
    image_path: string;
    size: 'large' | 'medium' | 'small';
    created_at?: string;
    publicUrl?: string;
}
export interface Image {
  id: string;
  urls: {
    small: string;
    regular?: string;
  };
  alt_description: string;
  description?: string;
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

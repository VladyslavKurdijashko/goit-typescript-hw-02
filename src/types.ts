// src/types.ts
export interface Image {
    id: string;
    urls: {
      small: string;
      regular?: string; // Використовуйте '?' для позначення опціональної властивості
    };
    alt_description: string;
    description?: string;
  }
  
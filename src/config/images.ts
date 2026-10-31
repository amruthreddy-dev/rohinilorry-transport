/**
 * Central Image Assets Configuration for ROHINI LORRY TRANSPORT
 *
 * HOW TO UPLOAD / REPLACE IMAGES VIA VS CODE:
 * 1. Open this project in VS Code.
 * 2. Navigate to the `public/images/` folder in the explorer.
 * 3. Drag and drop or copy your actual images with these exact filenames:
 *    - `public/images/rohini-logo.png`  -> Your Telugu & English company logo
 *    - `public/images/hero-truck.jpg`   -> Your actual decorated Indian lorry photograph
 *    - `public/images/owner-photo.png`  -> Photograph of owner N. Babu Reddy
 * 4. The website automatically reads and displays these images without any code changes.
 */

export const IMAGES = {
  // Company Logo (Telugu + English)
  logo: '/images/rohini-logo.png',

  // Hero Section Lorry Photograph (Decorated commercial lorry)
  heroTruck: '/images/hero-truck.jpg',

  // All India Routes Map
  indiaRoutes: '/images/india-routes.png',

  // Owner Photograph (N. Babu Reddy)
  ownerPhoto: '/images/owner-photo.png',
} as const;

export type ImageKey = keyof typeof IMAGES;

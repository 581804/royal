# The Royal Vastra — Next.js + MongoDB

A functional premium ethnic-wear rental landing site based on the supplied 7-page PDF and the validated website visual direction.

## Included
- Next.js App Router + React + TypeScript
- MongoDB/Mongoose product and category data
- Responsive luxury editorial UI using Royal Grey `#898884`, Ivory `#F5E2BE`, Soft Ivory `#FBF7EF`, Charcoal `#252522`, Muted Gold `#B89A68`, Burgundy `#6F2025`, Forest Green `#19352A`
- Countdown removed; uses **COMING SOON · UDAIPUR** and **BY THIS SEASON**
- Featured collection cards
- Early-access form with 10% welcome message
- Admin login
- Admin product CRUD
- Product image can be **Public URL** or **Local Upload** (JPG/PNG/WebP/AVIF, max 8MB)
- Local uploads saved under `public/uploads` and image path saved in MongoDB

## Setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `MONGODB_URI` and `ADMIN_PASSWORD`.
4. Put your exact transparent logo PNG at `public/logo.png` (the included file is only a temporary generated asset; replace it with your supplied PNG).
5. Run `npm run seed` once.
6. Run `npm run dev` and open `http://localhost:3000`.
7. Admin: `http://localhost:3000/admin`.

## Production note
Local uploads work for a traditional Node server. Vercel/serverless deployments should use object storage (Cloudinary, S3, UploadThing, etc.) for persistent uploaded images; the database schema already stores an image URL so this can be swapped without changing the frontend.

## Source alignment
The supplied PDF describes Udaipur launch messaging, bridal lehengas, groom sherwanis and reception couture, five collection types, “Heritage, Without the Price Tag,” premium/cost-effective/sustainable/every-occasion benefits, Royal List early access with one-time 10% discount, and Udaipur contact information. The PDF's countdown is intentionally not implemented per the requested change.

# CLAUDE.md — Development Context for The Pines Website

## What This Is

Static website for The Pines Bar & Grill at Farmington Hills Golf Club (Farmington Hills, MI). American and Greek cuisine, golf course views, family-run feel.

## Tech Stack

- Plain HTML/CSS (no frameworks, no build tools)
- Static site — no backend needed
- Will be hosted via GitHub Pages or similar

## Design Rules

1. **Clean and straightforward** — no hand-drawn elements, no artistic flourishes
2. **Forest green color palette** — primary `#4a6741`, dark green `#2d3e2d`, light backgrounds `#f8faf8` / `#f0f4f0`
3. **System fonts** — `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
4. **Information-first** — hours, phone, address must be visible on every page in the header
5. **No marketing speak** — direct, descriptive copy only. No "elevate your experience" type language
6. **Mobile responsive** — must stack properly on phones
7. **Authentic local restaurant feel** — modeled after Golden Fleece, Clark Lake Golf Club, Pegasus Taverna. NOT a tech landing page

## Header Structure (every page)

- **Top-left:** Phone number + address
- **Center:** Logo (currently placeholder — waiting on real logo file)
- **Top-right:** Hours box
- **Below:** Green nav bar — Menu | Special Events | Reserve | Specialties | About Us

## Footer Structure (every page)

- Location, Contact, Hours (redundant with header — intentional), Quick Links
- Dark green background `#2d3e2d`

## Pages to Build

- `index.html` — Homepage with image carousel (EXISTS)
- `pages/menu.html` — Full menu display (prominent, not hidden)
- `pages/events.html` — Special events info
- `pages/reserve.html` — Reservation info / form
- `pages/specialties.html` — Signature dishes / Greek specialties
- `pages/about.html` — About the restaurant, family story

## Image Carousel Plan

1. Wide shot of golf club exterior
2. Dining room interior wide shot
3. Food photos (TBD)

Images go in `assets/images/`. Logo files go in `assets/logo/`.

## Key Principle

This should look like a website for a real local restaurant that's been around for years — not a startup, not a design portfolio, not an AI-generated template. Think: would a regular person in Farmington Hills trust this site to find hours and a menu? That's the bar.

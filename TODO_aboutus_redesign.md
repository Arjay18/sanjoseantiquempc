# AboutUs Homepage Redesign - TODO

## Goal
Replace the current AboutUs homepage section UI/UX with a clearly new layout and design.

## Current status
- Implemented image fit fix (object-contain) ✅
- Attempted multiple incremental layout tweaks in `src/components/home/AboutUs.tsx` but user reports no visible layout/design change ❌

## Next concrete redesign to implement
Create a brand-new AboutUs component layout:
1) Replace the entire JSX structure in `src/components/home/AboutUs.tsx`:
   - New top block: big heading + subheading + gradient CTA strip
   - New content block: 2-column with image in a framed card + bullet list
   - New feature cards layout: 3 cards with distinct icons/colors and hover effects
2) Ensure there is *only one* pill/header section (remove duplicates).
3) Use consistent spacing and a clearly different grid structure so the change is undeniable.
4) Run `npm run build`.

## Progress tracking
- [ ] Full JSX rewrite for standout new layout
- [ ] Build verification


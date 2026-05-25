# AboutUs Homepage Redesign - TODO

## Goal
Replace the current AboutUs homepage section UI/UX with a clearly new layout and design.

## Step plan
1. Define new AboutUs section design (desktop + mobile):
   - hero banner layout
   - image composition (frame + overlay)
   - feature cards layout
2. Update `src/components/home/AboutUs.tsx` with the new layout.
3. Ensure images use `next/image` and do not crop unexpectedly.
4. Run `npm run build` to confirm no TS/React errors.
5. (Optional) run lint/tests if your workflow requires.

## Progress
- [x] Initial investigation + identify AboutUs component file
- [x] Fix image cropping strategy (object-contain)
- [ ] Implement new AboutUs design/layout
- [ ] Validate build


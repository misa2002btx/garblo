# Implementation Tasks for appConsumer

## Total: 56 Files (40 New + 16 Modified)

---

## A. Root Level Changes (3 files)

### 1. `turbo.json` ⚠️ MODIFIED

- [ ] Add `test` pipeline configuration for future testing infrastructure
- [ ] Ensure `dev` pipeline has `persistent: true` for watch mode
- [ ] Verify `build` pipeline dependency graph includes UI package

### 2. `package.json` (root) ⚠️ MODIFIED

- [ ] Add `dev:consumer` script targeting app-consumer with Turbo filter
- [ ] Add `dev:auth` script targeting app-auth with Turbo filter
- [ ] Verify workspace package manager is locked to pnpm@9.7.0

### 3. `.idx/dev.nix` ⚠️ MODIFIED

- [ ] Add `onStart` hook to install appConsumer dependencies
- [ ] Configure web preview to run `pnpm dev --filter=app-consumer`
- [ ] Set `$PORT` variable for dynamic port assignment
- [ ] Ensure VS Code extensions include ESLint and Prettier

---

## B. Shared UI Package Updates (7 files)

### 4. `packages/ui/src/components/carousel.tsx` 🆕 NEW

- [ ] Implement Embla Carousel wrapper with React hooks
- [ ] Add props: `images`, `currentIndex`, `onSlideChange`
- [ ] Support loop mode for gallery cycling
- [ ] Add keyboard navigation (arrow keys)
- [ ] Export styled component with Tailwind classes

### 5. `packages/ui/src/components/sheet.tsx` 🆕 NEW

- [ ] Integrate Vaul drawer library
- [ ] Support positions: `bottom`, `left`, `right`
- [ ] Add backdrop with `bg-black/50` overlay
- [ ] Implement swipe-to-close gesture
- [ ] Add focus trap for accessibility

### 6. `packages/ui/src/components/switch.tsx` 🆕 NEW

- [ ] Use Radix UI Switch primitive
- [ ] Style with Tailwind: active state with `bg-primary`
- [ ] Add `aria-label` support for screen readers
- [ ] Support controlled/uncontrolled modes
- [ ] Add disabled state styling

### 7. `packages/ui/src/components/toast.tsx` 🆕 NEW

- [ ] Integrate Sonner toast library
- [ ] Create Toast component with variants: success, error, info
- [ ] Add icons from Lucide React
- [ ] Position at bottom-center on mobile
- [ ] Set auto-dismiss timeout to 3s

### 8. `packages/ui/src/components/toaster.tsx` 🆕 NEW

- [ ] Create Toaster container component
- [ ] Wrap Sonner's Toaster with theme support
- [ ] Add to root layout as singleton
- [ ] Configure max visible toasts: 3
- [ ] Style with CSS variables from globals.css

### 9. `packages/ui/src/components/drawer.tsx` 🆕 NEW

- [ ] Build custom gesture-aware drawer
- [ ] Use `@use-gesture/react` for drag detection
- [ ] Add spring animation with CSS transitions
- [ ] Support `height` prop for bottom drawers
- [ ] Support `width` prop (71vw) for side drawers

### 10. `packages/ui/package.json` ⚠️ MODIFIED

- [ ] Add dependency: `embla-carousel-react@^8.0.0`
- [ ] Add dependency: `vaul@^0.9.0`
- [ ] Add dependency: `sonner@^1.4.0`
- [ ] Add dependency: `@use-gesture/react@^10.3.1`
- [ ] Run `pnpm install` in packages/ui

### 11. `packages/ui/src/lib/utils.ts` ⚠️ MODIFIED

- [ ] Add `debounce(fn, delay)` utility function
- [ ] Add `vibrate(pattern)` wrapper for navigator.vibrate()
- [ ] Add `isMobile()` detection helper
- [ ] Add `clamp(value, min, max)` math utility
- [ ] Export all utilities with TypeScript types

---

## C. appConsumer Configuration (6 files)

### 12. `frontend/appConsumer/next.config.mjs` ⚠️ MODIFIED

- [ ] Import `@ducanh2912/next-pwa`
- [ ] Configure PWA with `dest: 'public'`
- [ ] Disable PWA in development mode
- [ ] Enable `register: true` and `skipWaiting: true`
- [ ] Add `transpilePackages: ['@garblo/ui']`

### 13. `frontend/appConsumer/package.json` ⚠️ MODIFIED

- [ ] Add dependency: `@ducanh2912/next-pwa@^10.2.8`
- [ ] Add dependency: `@use-gesture/react@^10.3.1`
- [ ] Update dev script to use port 3000 (default)
- [ ] Verify `@garblo/ui` uses `workspace:*` protocol
- [ ] Run `pnpm install`

### 14. `frontend/appConsumer/tsconfig.json` ⚠️ MODIFIED

- [ ] Add `baseUrl: "."`
- [ ] Add path alias: `"@/*": ["./src/*"]`
- [ ] Add path alias: `"@garblo/ui": ["../../packages/ui/src"]`
- [ ] Ensure `jsx: "preserve"` for Next.js
- [ ] Add `strictNullChecks: true`

### 15. `frontend/appConsumer/src/app/layout.tsx` ⚠️ MODIFIED

- [ ] Import `Metadata` and `Viewport` types from Next
- [ ] Export `viewport` config with `width: 'device-width'`
- [ ] Set `maximumScale: 1` to prevent zoom
- [ ] Add `themeColor: '#000000'` for status bar
- [ ] Import and render `<Toaster />` from @garblo/ui
- [ ] Add `manifest: '/manifest.json'` to metadata
- [ ] Configure `appleWebApp.capable: true`

### 16. `frontend/appConsumer/src/app/page.tsx` ⚠️ MODIFIED

- [ ] Remove placeholder content
- [ ] Import `FeedContainer` from `@/components/feed/FeedContainer`
- [ ] Return `<FeedContainer />` as sole child
- [ ] Remove unused Button import

### 17. `frontend/appConsumer/tailwind.config.ts` ⚠️ MODIFIED

- [ ] Extend content glob to include `../../packages/ui/src/**/*.{ts,tsx}`
- [ ] Add custom utility: `height.dvh: '100dvh'`
- [ ] Add custom utility: `width.71vw: '71vw'`
- [ ] Verify preset import from @garblo/ui
- [ ] Keep `prefix: ""` for no class prefix

### 18. `frontend/appConsumer/src/styles/globals.css` ⚠️ MODIFIED

- [ ] Import base styles from `@garblo/ui/src/styles/globals.css`
- [ ] Add `@layer utilities` block
- [ ] Define `.snap-y-mandatory` with `scroll-snap-type: y mandatory`
- [ ] Define `.snap-start` with `scroll-snap-align: start`
- [ ] Define `.h-dvh` with `height: 100dvh`
- [ ] Define `.text-shadow-md` with shadow for contrast
- [ ] Add `html { overscroll-behavior: none }` to disable pull-to-refresh

---

## D. PWA Assets (4 files)

### 19. `frontend/appConsumer/public/manifest.json` 🆕 NEW

- [ ] Set `name: "Gallery Feed"`
- [ ] Set `short_name: "Gallery"`
- [ ] Add `start_url: "/"`
- [ ] Set `display: "standalone"`
- [ ] Set `theme_color: "#000000"`
- [ ] Set `background_color: "#000000"`
- [ ] Add icons array with 192x192 and 512x512 sizes

### 20. `frontend/appConsumer/public/icons/icon-192x192.png` 🆕 NEW

- [ ] Create 192x192px PNG icon
- [ ] Use transparent or black background
- [ ] Center logo/symbol with padding
- [ ] Optimize file size with ImageOptim or similar

### 21. `frontend/appConsumer/public/icons/icon-512x512.png` 🆕 NEW

- [ ] Create 512x512px PNG icon
- [ ] Match design from 192x192 version
- [ ] Ensure sharp edges at higher resolution
- [ ] Optimize file size

### 22. `frontend/appConsumer/public/offline-placeholder.svg` 🆕 NEW

- [ ] Create SVG with "Offline" message
- [ ] Add Wi-Fi icon with slash (Lucide offline icon)
- [ ] Use neutral gray color scheme
- [ ] Set viewBox for responsive scaling
- [ ] Keep file size under 2KB

---

## E. Feed Components (7 files)

### 23. `frontend/appConsumer/src/components/feed/FeedContainer.tsx` 🆕 NEW

- [ ] Create container with `h-dvh overflow-y-scroll snap-y-mandatory`
- [ ] Fetch mock data from `@/lib/mockData`
- [ ] Apply filters using `useFilters` hook
- [ ] Map filtered data to `<GalleryCard />` components
- [ ] Add `EmptyState` component when no results
- [ ] Implement infinite scroll with IntersectionObserver (optional for V1)

### 24. `frontend/appConsumer/src/components/feed/GalleryCard.tsx` 🆕 NEW

- [ ] Wrap content in `div` with `h-dvh snap-start relative`
- [ ] Use `useIntersectionObserver` to track visibility
- [ ] Pass `isActive` prop to child components
- [ ] Reset gallery index when card exits viewport (visibility < 50%)
- [ ] Render `<GallerySlideshow />` as background
- [ ] Overlay `<GalleryHUD />` on top

---

## F. Gallery Components (6 files)

### 25. `frontend/appConsumer/src/components/gallery/GallerySlideshow.tsx` 🆕 NEW

- [ ] Use Embla Carousel from @garblo/ui
- [ ] Accept `images`, `isActive`, `currentIndex` props
- [ ] Implement `useGalleryPlayback` hook for autoplay
- [ ] Pause timer when `isActive: false`
- [ ] Add image loading with `priority` for first image
- [ ] Handle image load errors with offline placeholder
- [ ] Support loop mode (last → first)

### 26. `frontend/appConsumer/src/components/gallery/GalleryHUD.tsx` 🆕 NEW

- [ ] Create absolute positioned overlay layer
- [ ] Render `<TapHandler />` for center tap detection
- [ ] Render `<FilterDrawer />` icon at top-left
- [ ] Render `<PaginationIndicator />` at bottom-left
- [ ] Render `<MetadataLayer />` at bottom-left
- [ ] Render `<ActionBar />` at bottom-right
- [ ] Pass gallery state props to all children

### 27. `frontend/appConsumer/src/components/gallery/PaginationIndicator.tsx` 🆕 NEW

- [ ] Accept `currentIndex` and `total` props
- [ ] Render dots with `bg-white/50` for inactive, `bg-white` for active
- [ ] Alternative: Render text "1/5" format
- [ ] Position at `bottom-[100px] left-4 absolute`
- [ ] Add `z-40` to layer above image

### 28. `frontend/appConsumer/src/components/gallery/MetadataLayer.tsx` 🆕 NEW

- [ ] Accept `artist_name` and `caption` props
- [ ] Position at `bottom-6 left-4 absolute max-w-[75%]`
- [ ] Apply `text-shadow-md` class for contrast
- [ ] Render artist name in bold, caption in regular weight
- [ ] Add `z-40` layering
- [ ] Truncate long captions with `line-clamp-2`

### 29. `frontend/appConsumer/src/components/gallery/ActionBar.tsx` 🆕 NEW

- [ ] Position at `bottom-6 right-4 absolute flex-col gap-4`
- [ ] Render Heart icon (use `useLikes` hook for state)
- [ ] Render Speech Bubble icon (opens `<CommentSheet />`)
- [ ] Render Arrow/Share icon (triggers `useShare`)
- [ ] Add haptic feedback on icon tap
- [ ] Show like count below heart icon
- [ ] Show comment count below speech bubble

### 30. `frontend/appConsumer/src/components/gestures/GestureOverlay.tsx` 🆕 NEW

- [ ] Use `@use-gesture/react` useDrag and useGesture hooks
- [ ] Detect long press (>500ms) and show dimmed overlay
- [ ] Show Save icon on left, Share icon on right
- [ ] Track horizontal drag distance
- [ ] Highlight icon when drag crosses threshold (>50px)
- [ ] On release: Execute save or share action
- [ ] Add spring animation for icon appearance
- [ ] Trigger haptic feedback on action

---

## G. Gesture Handlers (2 files)

### 31. `frontend/appConsumer/src/components/gestures/TapHandler.tsx` 🆕 NEW

- [ ] Create invisible touch area (center 60% of screen)
- [ ] Use `useGestures` hook for tap detection
- [ ] Implement 300ms debounce to detect single vs double tap
- [ ] Single tap: Toggle play/pause via `useGalleryPlayback`
- [ ] Double tap: Toggle like via `useLikes`
- [ ] Show temporary icon feedback (pause/play or heart)
- [ ] Add fade-out animation after 500ms

### 32. `frontend/appConsumer/src/components/gestures/LongPressHandler.tsx` 🆕 NEW

- [ ] Detect touch hold for >500ms
- [ ] Trigger callback to show `<GestureOverlay />`
- [ ] Prevent default touch behavior during hold
- [ ] Add visual feedback (screen dim) during hold
- [ ] Cancel on touch move outside threshold

---

## H. UI Components (4 files)

### 33. `frontend/appConsumer/src/components/ui/FilterDrawer.tsx` 🆕 NEW

- [ ] Use Sheet component from @garblo/ui
- [ ] Open from left side with `width: 71vw`
- [ ] Render `<FilterSection />` for each taxonomy category
- [ ] Accept `filters` and `onFilterChange` props
- [ ] Add "Reset All" button at top
- [ ] Add backdrop with `bg-black/50`
- [ ] Persist state via `useFilters` hook on close

### 34. `frontend/appConsumer/src/components/ui/CommentSheet.tsx` 🆕 NEW

- [ ] Use Sheet component opening from bottom
- [ ] Set height to `50vh` with rounded top corners
- [ ] Accept `comments` array prop
- [ ] Render empty state: "No comments yet" when array empty
- [ ] Map comments to list items with username and text
- [ ] Add close button or swipe-to-close
- [ ] Use `z-50` to layer above HUD

### 35. `frontend/appConsumer/src/components/ui/FilterSection.tsx` 🆕 NEW

- [ ] Accept `title`, `options`, `selected`, `onChange` props
- [ ] Render section header with title
- [ ] Map options to Switch components
- [ ] Display option label next to switch
- [ ] Update `selected` array on toggle
- [ ] Style with divider between sections

### 36. `frontend/appConsumer/src/components/ui/EmptyState.tsx` 🆕 NEW

- [ ] Center content in viewport with flexbox
- [ ] Display large icon (Lucide Search or Filter)
- [ ] Show message: "No results found"
- [ ] Add subtext: "Adjust your filters"
- [ ] Render button to open FilterDrawer
- [ ] Use neutral gray color scheme

---

## I. Hooks (8 files)

### 37. `frontend/appConsumer/src/hooks/useGalleryPlayback.ts` 🆕 NEW

- [ ] Accept `isActive`, `imagesCount` props
- [ ] Create state: `currentIndex`, `isPlaying`
- [ ] Use `useEffect` to start/stop interval timer
- [ ] Interval advances index every 3000ms
- [ ] Loop index: `(current + 1) % imagesCount`
- [ ] Provide `togglePlay`, `goNext`, `goPrev` functions
- [ ] Reset to index 0 when `isActive` becomes false

### 38. `frontend/appConsumer/src/hooks/useGestures.ts` 🆕 NEW

- [ ] Track tap count and timestamp
- [ ] Detect single tap: 1 tap with 300ms timeout
- [ ] Detect double tap: 2 taps within 300ms
- [ ] Return `onTap`, `onDoubleTap` callbacks
- [ ] Clear timeout on unmount

### 39. `frontend/appConsumer/src/hooks/useLocalStorage.ts` 🆕 NEW

- [ ] Generic hook accepting `key` and `initialValue`
- [ ] Read from `localStorage.getItem(key)` on mount
- [ ] Parse JSON if value exists
- [ ] Return `[value, setValue]` tuple
- [ ] `setValue` updates both state and localStorage
- [ ] Handle storage errors with try/catch

### 40. `frontend/appConsumer/src/hooks/useIntersectionObserver.ts` 🆕 NEW

- [ ] Accept `ref` and `threshold` (default 0.5)
- [ ] Create IntersectionObserver instance
- [ ] Track `isVisible` boolean state
- [ ] Update state when intersection changes
- [ ] Return `isVisible` value
- [ ] Cleanup observer on unmount

### 41. `frontend/appConsumer/src/hooks/useLikes.ts` 🆕 NEW

- [ ] Use `useLocalStorage` with key `STORAGE_KEYS.LIKES`
- [ ] Store array of gallery IDs
- [ ] Provide `isLiked(id)` check function
- [ ] Provide `toggleLike(id)` function
- [ ] Add ID if not present, remove if present
- [ ] Trigger haptic feedback on toggle

### 42. `frontend/appConsumer/src/hooks/useBookmarks.ts` 🆕 NEW

- [ ] Use `useLocalStorage` with key `STORAGE_KEYS.BOOKMARKS`
- [ ] Store array of gallery IDs
- [ ] Provide `isBookmarked(id)` check function
- [ ] Provide `toggleBookmark(id)` function
- [ ] Show toast notification on save/unsave

### 43. `frontend/appConsumer/src/hooks/useFilters.ts` 🆕 NEW

- [ ] Use `useLocalStorage` with key `STORAGE_KEYS.FILTERS`
- [ ] Store object: `{ gender: [], type: [], style: [] }`
- [ ] Provide `updateFilter(category, values)` function
- [ ] Provide `resetFilters()` function
- [ ] Provide `getDisabledTags()` array of all disabled tags

### 44. `frontend/appConsumer/src/hooks/useShare.ts` 🆕 NEW

- [ ] Check if `navigator.share` is available
- [ ] Accept `title`, `text`, `url` props
- [ ] Provide `share()` function
- [ ] On desktop fallback: Copy URL to clipboard
- [ ] Show toast: "Link copied" on fallback
- [ ] Handle share errors silently

---

## J. Data Layer (6 files)

### 45. `frontend/appConsumer/src/lib/types.ts` 🆕 NEW

- [ ] Define `Taxonomy` interface with gender, type, style
- [ ] Define `GalleryItem` interface per PRD schema
- [ ] Define `FilterState` interface for UI state
- [ ] Define `StorageKeys` type for localStorage keys
- [ ] Export all types

### 46. `frontend/appConsumer/src/lib/mockData.ts` 🆕 NEW

- [ ] Export `mockFeed` array of GalleryItem objects
- [ ] Include at least 10 sample items
- [ ] Vary taxonomy tags across items
- [ ] Use placeholder images from `/mock/img1.webp`, etc.
- [ ] Include sample comments for some items
- [ ] Set realistic stats (likes: 50-500, comments: 0-20)

### 47. `frontend/appConsumer/src/lib/filterLogic.ts` 🆕 NEW

- [ ] Export `applyFilters(feed, filterState)` function
- [ ] Accept GalleryItem array and FilterState object
- [ ] Filter items where taxonomy matches disabled tags
- [ ] Return filtered array
- [ ] Handle empty filter state (return all items)

### 48. `frontend/appConsumer/src/lib/storageKeys.ts` 🆕 NEW

- [ ] Export `STORAGE_KEYS` constant object
- [ ] Define keys: `LIKES`, `BOOKMARKS`, `FILTERS`
- [ ] Use namespace prefix: `gallery_` for each key
- [ ] Add TypeScript `as const` assertion

### 49. `frontend/appConsumer/src/lib/constants.ts` 🆕 NEW

- [ ] Export `AUTOPLAY_INTERVAL = 3000`
- [ ] Export `TAP_TIMEOUT = 300`
- [ ] Export `LONG_PRESS_TIMEOUT = 500`
- [ ] Export `DRAG_THRESHOLD = 50`
- [ ] Export `VISIBILITY_THRESHOLD = 0.5`
- [ ] Add JSDoc comments for each constant

### 50. `frontend/appConsumer/src/lib/taxonomy.ts` 🆕 NEW

- [ ] Export `TAXONOMY_OPTIONS` object
- [ ] Define `gender` array per PRD Section 8
- [ ] Define `type` array per PRD Section 8
- [ ] Define `style` array per PRD Section 8
- [ ] Use for FilterDrawer option lists

---

## K. Mock Assets (3 files)

### 51. `frontend/appConsumer/public/mock/img1.webp` 🆕 NEW

- [ ] Add placeholder image (600x800px portrait)
- [ ] Use stock photo or generate via placeholder service
- [ ] Optimize with WebP format
- [ ] Keep file size under 100KB

### 52. `frontend/appConsumer/public/mock/img2.webp` 🆕 NEW

- [ ] Add second placeholder image (600x800px portrait)
- [ ] Use different subject from img1
- [ ] Match file size and format constraints

### 53. `frontend/appConsumer/public/mock/data.json` 🆕 NEW

- [ ] Structure JSON per `mockData.ts` schema
- [ ] Include 10+ gallery items
- [ ] Reference `/mock/img1.webp` and `/mock/img2.webp`
- [ ] Vary image counts (1-5 images per gallery)
- [ ] Optional: Use for future API simulation

---

## Summary

- **Root**: 3 config updates
- **Shared UI**: 6 new components + 2 modified files
- **appConsumer Config**: 6 modified files
- **PWA**: 4 new asset files
- **Components**: 14 new React components
- **Hooks**: 8 new custom hooks
- **Data/Utils**: 6 new TypeScript modules
- **Mock Assets**: 3 new files

**Total Tasks**: 56 files spanning 200+ individual subtasks

# Customise Outfits

## How to Run
- Open the Snack link and run on **Web**:  
  [https://snack.expo.dev/@sakshi_3503/customise-outfits](https://snack.expo.dev/@sakshi_3503/customise-outfits)
- Or clone locally:
  - `git clone https://github.com/<your-username>/<repo-name>.git`
  - `cd <repo-name>`
  - `npm install`
  - `npm start` (press **w** to launch web)

## What I Replicated from the Reference Video
- Saved tab with three sub-sections: **Collections**, **Outfits**, **Items**.
- Category filter chips for collections and tag chips for outfits, updating the item grid client-side.
- Smooth scrolling grids and carousels for items/outfits, matching the buttery feel shown in the reference.
- Overall navigation and visual hierarchy closely mirror the provided video.

## Component Structure & State Management
- **Chip** – Reusable filter chip with selected state styling.
- **ItemCard** – Single inventory item card with category, color, and style badges.
- **OutfitCard** – Grid card displaying outfit pieces and tags.
- **CollectionsScreen** – Item grid with category filter chips.
- **OutfitsScreen** – Outfit grid with tag filter chips.
- **SavedScreen** – Tabs switching between the above screens.
- **App** – Root with bottom tab navigator.

- State is managed with:
  - `useState` and `useMemo` hooks
  - `selectedCategory` (Collections filter)
  - `tag` (Outfits filter)
  - `activeTab` (switching screens)

## Assumptions & Limitations
- Hard-coded JSON inventory (10–30 items) and local images.
- No backend or authentication; all filtering is client-side.
- Tested on Expo Web and modern mobile browsers.

## Animations & Interactions Implemented
- Filter chip highlight: background/text color changes smoothly on press.
- FlatList/ScrollView: buttery vertical and horizontal scrolling with no layout jumps.
- Rounded image corners & subtle shadows for a polished card look.
- Tab transitions: smooth switching between Collections, Outfits, and Items.

## Tech Stack
- Expo Snack + React Native Web
- TypeScript
- React Navigation (Bottom Tabs)
- React Hooks (`useState`, `useMemo`)
- StyleSheet for styling

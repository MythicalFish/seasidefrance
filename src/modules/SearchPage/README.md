# SearchPage Module

This module handles the display of property search results with support for two different display modes, each with its own optimized layout.

## Components

### SearchPage (`index.tsx`)

Main container component that manages search state and coordinates between search controls and results display.

### SearchResults (`SearchResults.tsx`)

Main results component that routes to the appropriate layout based on display mode:

- Routes to `MultiplePropertiesResults` for multiple property searches
- Routes to `SinglePropertyResults` for single property displays

### SinglePropertyResults (`SinglePropertyResults.tsx`)

Dedicated component for single property results with:

- Clean 5-column grid layout (Check-in, Check-out, Nights, Per Night, Total)
- No property name column (since there's only one property)
- Optimized spacing and typography
- **Progressive loading**: Shows 6 results initially, then +5 more with each "Show More" click
- Discount badges positioned under check-in dates
- Responsive design for mobile devices

### SearchControls (`SearchControls.tsx`)

Responsive chevron-based search controls with adaptive layout:

- **Desktop**: Single horizontal line with all controls: From [Year] [Month] For [Stay Length]
- **Mobile**: Stacked layout with grouped "From" and "For" sections
- **Consistent UI**: All controls use the same chevron-based interaction pattern

## Control Design

### Desktop Layout

- **Single line**: All controls arranged horizontally for compact desktop experience
- **Inline labels**: "From" and "For" labels positioned inline with controls
- **Optimal spacing**: Proper gaps between controls for visual clarity
- **Fixed widths**: Consistent control sizing for professional appearance

### Mobile Layout

- **Stacked sections**: "From" and "For" sections stacked vertically
- **Full-width controls**: Controls expand to use available mobile screen space
- **Grouped organization**: Related controls grouped under section labels

### Year Selection

- **Toggle button**: Click to switch between current year and next year
- **Simple interaction**: Single click toggles between the two available years
- **Clear display**: Shows the selected year prominently
- **Fixed width**: Consistent 80px minimum width

### Month Navigation

- **Left/Right chevrons**: Navigate between months intuitively
- **Automatic year rollover**: Seamlessly handles year transitions
- **Past month prevention**: Disables navigation to past months
- **Clear month display**: Shows full month name in the center
- **Fixed width**: 120px minimum width for month names

### Stay Length Selection

- **Chevron navigation**: Use left/right arrows to adjust stay length
- **Sequential options**: 2, 3, 4, 5, 6, 7, 8+ nights
- **Boundary handling**: Disables chevrons at min/max values
- **Clear formatting**: Shows "X nights" or "8+ nights" format
- **Fixed width**: 100px minimum width for stay length display

## Stay Length Logic

The stay length selector works with specific night counts rather than maximum limits:

### Specific Night Counts (2-7 nights)

- Shows **exactly** the selected number of consecutive nights
- Example: Selecting "5 nights" shows only 5-night periods

### 8+ Nights Option

- Shows periods with **8 or more** consecutive nights
- Includes 8, 9, 10, 11+ night options up to available inventory
- Useful for longer stays and extended bookings

### Consecutive Nights Requirement

- All generated periods consist of consecutive nights only
- No gaps or non-consecutive date ranges
- Ensures realistic booking scenarios

## Display Modes

### Multiple Properties (`displayMode: 'multiple'`)

- Uses `MultiplePropertiesResults` component
- Shows property name column
- Initially displays 1 result per property
- Used when searching across multiple properties
- 12-column grid layout to accommodate property names

### Single Property (`displayMode: 'singleProperty'`)

- Uses `SinglePropertyResults` component
- Clean 5-column layout without property names
- **Initially displays 6 results**
- **"Show More" reveals 5 additional results** with remaining count
- Used on individual property pages
- Better spacing and visual hierarchy

## Styling

Components use CSS Modules for better maintainability and performance:

- `SearchResults.module.css` - For multiple properties layout
- `SinglePropertyResults.module.css` - For single property layout

## Key Features

- **Responsive layout** - Single line on desktop, stacked on mobile
- **Chevron-based navigation** for all controls with consistent interaction patterns
- **Year toggle button** for simple year selection between current and next year
- **Month navigation** with automatic year rollover and past month prevention
- **Stay length chevrons** for intuitive duration selection
- **Progressive result loading** for single property (6 initial, +5 increments)
- **Specific stay length filtering** with exact night counts
- **Consecutive nights validation** for realistic bookings
- **8+ nights option** for extended stays
- **Dedicated layouts** for each display mode
- **Responsive grid layouts** that adapt to screen size
- **Loading states** with spinner animation
- **Empty states** for no results
- **Discount badges** for promotional periods
- **Show more functionality** with remaining count display
- **Hover effects** and smooth transitions
- **Proper TypeScript types** for better development experience
- **Mobile-responsive design**
- **Accessibility features** with ARIA support

## Recent Improvements

1. **Single-line desktop layout** - All controls on one horizontal line for compact desktop experience
2. **Responsive design** - Adaptive layout that stacks on mobile while staying inline on desktop
3. **Inline label positioning** - "From" and "For" labels integrated into the control flow
4. **Fixed control widths** - Consistent sizing for professional appearance
5. **Chevron-based control design** - Unified interaction pattern across all controls
6. **Year toggle button** - Simple click to switch between current and next year
7. **Month navigation chevrons** - Intuitive left/right navigation with year rollover
8. **Stay length chevrons** - Consistent navigation for duration selection
9. **Enhanced accessibility** - ARIA labels and keyboard navigation support
10. **Improved visual consistency** - All controls share the same interaction paradigm

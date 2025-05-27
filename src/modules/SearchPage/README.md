# SearchPage Module

This module handles the display of property search results with support for two different display modes, each with its own optimized layout.

## Components

### SearchPage (`index.tsx`)

Main container component that manages search state and coordinates between search controls and results display with:

- **Default view**: Shows all available periods for any stay length (2-14 nights)
- **Hidden controls**: Search refinement options behind a "Refine dates" button
- **Filter toggle**: Ability to switch between filtered and unfiltered results

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

- **Hidden by default**: Controls are hidden behind a "Refine dates" button
- **Desktop**: Single horizontal line with all controls: From [Year] [Month] For [Stay Length]
- **Mobile**: Stacked layout with grouped "From" and "For" sections
- **Consistent UI**: All controls use the same chevron-based interaction pattern

## Default Behavior

### Unfiltered Results (Default)

- **Shows all stay lengths**: Displays periods from 2-14 nights automatically
- **No date restrictions**: Shows all available periods from the current month onward
- **Comprehensive view**: Users see all possible booking options immediately
- **Sorted by date**: Results ordered by check-in date for easy browsing

### Filtered Results (After Refinement)

- **Specific criteria**: Shows only periods matching selected month/year and stay length
- **Targeted results**: Focused on user's specific requirements
- **Easy toggle**: Can switch back to "Show all results" at any time

## Control Visibility

### Hidden Controls (Default State)

- **"Refine dates" button**: Blue button with filter icon to reveal controls
- **Clean interface**: Minimal UI showing just results and refinement option
- **Immediate results**: Users see availability without needing to set filters first

### Revealed Controls (Refinement Mode)

- **"Hide filters" button**: Gray button to collapse controls back
- **"Show all results" button**: Reset to unfiltered view
- **Full control access**: All date and stay length refinement options available

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

### Default Mode (Unfiltered)

- **All stay lengths**: Shows periods from 2-14 nights automatically
- **Comprehensive results**: Maximum availability visibility
- **No user input required**: Immediate results without configuration

### Filtered Mode (After Refinement)

- **Specific night counts (2-7)**: Shows exactly the selected number of consecutive nights
- **8+ nights option**: Shows periods with 8 or more consecutive nights
- **Consecutive nights requirement**: All periods consist of consecutive nights only

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

- **Default comprehensive results** - Shows all available periods without requiring filters
- **Hidden controls** - Clean interface with optional refinement behind a button
- **Easy filter toggle** - Switch between filtered and unfiltered views
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

1. **Default unfiltered results** - Shows all stay lengths (2-14 nights) by default for maximum visibility
2. **Hidden controls interface** - Clean default view with optional "Refine dates" button
3. **Filter toggle functionality** - Easy switching between filtered and unfiltered views
4. **Comprehensive period generation** - Automatically shows all possible booking options
5. **Single-line desktop layout** - All controls on one horizontal line for compact desktop experience
6. **Responsive design** - Adaptive layout that stacks on mobile while staying inline on desktop
7. **Inline label positioning** - "From" and "For" labels integrated into the control flow
8. **Fixed control widths** - Consistent sizing for professional appearance
9. **Enhanced accessibility** - ARIA labels and keyboard navigation support
10. **Improved user experience** - Immediate results without requiring user configuration

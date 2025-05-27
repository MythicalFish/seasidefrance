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
- **Progressive loading**: Shows 1 result initially, then +5 more with each "Show More" click
- Discount badges positioned under check-in dates
- Responsive design for mobile devices

### SearchControls (`SearchControls.tsx`)

Handles date selection and stay length controls with:

- **Custom DatePicker**: Enhanced date selection with chevron navigation
- **Stay Length**: Dropdown with specific night options:
  - 2 nights
  - 3 nights
  - 4 nights
  - 5 nights
  - 6 nights
  - 7 nights
  - 8+ nights (shows periods with 8 or more consecutive nights)

### DatePicker (`components/DatePicker.tsx`)

Custom date picker component with enhanced UX:

- **Chevron navigation**: Click left/right arrows to increment/decrement days
- **Clickable month selection**: Click month name to open month grid selector
- **Year dropdown**: Select between current year and next year
- **Minimum date validation**: Prevents selection of past dates
- **Keyboard accessibility**: Full ARIA support and keyboard navigation
- **Click-outside handling**: Closes month selector when clicking elsewhere
- **Responsive design**: Adapts to mobile screens

## Stay Length Logic

The stay length selector now works with specific night counts rather than maximum limits:

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
- **Initially displays 1 result**
- **"Show More" reveals 5 additional results** with remaining count
- Used on individual property pages
- Better spacing and visual hierarchy

## Styling

Both components use CSS Modules for better maintainability and performance:

- `SearchResults.module.css` - For multiple properties layout
- `SinglePropertyResults.module.css` - For single property layout
- `DatePicker.module.css` - For custom date picker component

## Key Features

- **Enhanced date picker** with chevron navigation and month/year selection
- **Progressive result loading** for single property (1 initial, +5 increments)
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

1. **Custom DatePicker component** - Enhanced date selection with chevrons, month grid, and year selector
2. **Improved accessibility** - Added ARIA labels, roles, and keyboard navigation support
3. **Click-outside handling** - Month selector closes when clicking elsewhere
4. **Optimized pagination** - Single property now shows 1 result initially, +5 more per click
5. **Enhanced stay length selector** - Now offers specific night counts (2-7) and 8+ option
6. **Consecutive nights filtering** - Ensures all periods have consecutive dates
7. **Improved search logic** - Results now match exactly the selected stay length
8. **Better TypeScript types** - Added `StayLengthOption` type for type safety
9. **Separated layout components** - Created dedicated `SinglePropertyResults` for cleaner single property display
10. **Enhanced responsive design** for mobile devices

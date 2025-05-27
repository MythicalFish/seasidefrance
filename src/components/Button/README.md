# Button Component

A flexible, reusable Button component built with React, TypeScript, and CSS Modules. Supports both button and link functionality with consistent styling.

## Features

- ✅ **Dual functionality**: Works as both `<button>` and `<a>` elements
- ✅ **TypeScript support**: Fully typed with discriminated unions
- ✅ **CSS Modules**: Scoped styling with Tailwind CSS
- ✅ **Multiple variants**: Primary, secondary, ghost, and danger styles
- ✅ **Flexible sizing**: Small, medium, and large sizes
- ✅ **Icon support**: Left or right positioned icons
- ✅ **Accessibility**: Proper focus states and ARIA support
- ✅ **Dark mode**: Built-in dark mode support

## Usage

### Basic Button

```tsx
import Button from '@components/Button';

// Basic button with onClick handler
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>

// Button as a link
<Button href="/search">
  Go to Search
</Button>
```

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
```

### Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

### With Icons

```tsx
import { FilterIcon, ArrowRightIcon } from './icons';

// Icon on the left (default)
<Button icon={<FilterIcon />} onClick={handleFilter}>
  Filter Results
</Button>

// Icon on the right
<Button 
  icon={<ArrowRightIcon />} 
  iconPosition="right"
  onClick={handleNext}
>
  Continue
</Button>
```

### As Links

```tsx
// Internal link
<Button href="/dashboard">
  Dashboard
</Button>

// External link
<Button 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
</Button>
```

### States and Modifiers

```tsx
// Disabled state
<Button disabled onClick={handleClick}>
  Disabled Button
</Button>

// Full width
<Button fullWidth>
  Full Width Button
</Button>

// Custom className
<Button className="my-custom-class">
  Custom Styled
</Button>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | - | Additional CSS classes |
| `icon` | `React.ReactNode` | - | Icon element |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `fullWidth` | `boolean` | `false` | Full width button |

### Button-specific Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

### Link-specific Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link destination |
| `target` | `string` | - | Link target |
| `rel` | `string` | - | Link relationship |

## Styling

The component uses CSS Modules with Tailwind CSS classes. The styles are defined in `Button.module.css` and provide:

- Consistent spacing and typography
- Smooth transitions and hover effects
- Focus states for accessibility
- Dark mode support
- Responsive design

## Examples

See `Button.example.tsx` for comprehensive usage examples including all variants, sizes, and configurations.

## TypeScript

The component uses discriminated unions to ensure type safety:

- When `href` is provided, `onClick` and `type` are not allowed
- When `onClick` is provided, `href`, `target`, and `rel` are not allowed

This prevents invalid prop combinations at compile time. 

# Vue3Skeleton

`Vue3Skeleton` is a Vue 3 component designed to display a skeleton loading animation while content is being loaded. You can use it to improve the user experience while the main content or data is still loading.

## Installation

First, install the package using npm or yarn:

```bash
npm install @ajomuch92/vue3-skeleton
```

or

```bash
yarn add @ajomuch92/vue3-skeleton
```

## Basic Usage

Here’s an example of how to use the `Vue3Skeleton` component in your project:

```vue
<template>
  <Vue3Skeleton :loading="true" width="100%" height="20px">
    <template #default>
      <!-- Content to show when not loading -->
      <p>Loaded content</p>
    </template>
  </Vue3Skeleton>
</template>

<script setup>
import Vue3Skeleton from 'vue3-skeleton';
</script>
```

### Props

| Prop              | Type    | Default Value      | Description                                                                 |
|-------------------|---------|-------------------|-----------------------------------------------------------------------------|
| `as`              | String  | `'div'`           | The HTML tag used to wrap the skeleton. You can change it to any valid tag. |
| `loading`         | Boolean | `false`           | If `true`, shows the skeleton, otherwise shows the slotted content.         |
| `width`           | String  | `'100%'`          | The width of the skeleton. Any valid CSS width value is accepted.           |
| `height`          | String  | `'20px'`          | The height of the skeleton. Any valid CSS height value is accepted.         |
| `borderRadius`    | String  | `'4px'`           | The border-radius of the skeleton element.                                  |
| `backgroundColor` | String  | `'#e0e0e0'`       | The primary background color of the skeleton.                               |
| `toColor`         | String  | `'#f0f0f0'`       | The secondary color for the skeleton animation gradient.                    |
| `interval`        | String  | `'3s'`            | The animation duration for the skeleton. You can use any valid duration.    |

### Slots

- **default**: The content to be displayed when `loading` is `false`.

## Custom Styles

You can adjust the visual behavior of the skeleton via the props such as `width`, `height`, `backgroundColor`, `borderRadius`, etc.

Additionally, you can override the style in your own CSS file to fit the specific needs of your application:

```css
.skeleton {
  width: 200px;
  height: 40px;
  background-color: #ccc;
  border-radius: 8px;
}
```

## Animation

The animation is configurable using the `interval` prop, which adjusts the animation cycle duration. If you want to modify more aspects of the animation, you can do so via direct CSS styling.

## Contribution

If you find any issues or would like to contribute to the project, feel free to open an **issue** or submit a **pull request**.

---

Thank you for using `Vue3Skeleton`!

This is my personal blog.

It's built on Next.js, so you can clone it and run `npm run dev` to start the development server.

## Customizing

I designed the page to be certainly customizable from the `lib/user.ts` file. You can change the values I provided to match with yours.

**Note**: If you want to add a new social media that isn't supported by default, you have to edit the `supportedSocials` array in `/components/Socials.tsx` with the established pattern.

For example:

```tsx
const supportedSocials = [
  // ...Default socials
  {
    name: 'Twitch',
    icon: <FaTwitch> // You can use another icon pack if you wish.
  },
]
```

### Adding articles
This is the easiest part, just drop a markdown file in `/articles/` with the following pattern:

```md
---
title: '<TITLE>'
subtitle: '<SUBTITLE>'
categories: ['YOUR', 'CATEGORIES']
date: 'YYYY-MM-DD'
---

# And here it begins...
```

### Styling

The styling it's done with Tailwind CSS, if you want, you can change the presets in the `tailwind.config.js` file. Also, if you want to change article's content style, you have to edit `/styles/globals.css` and style tag by tag (or group them).

### Syntax highlighting

The syntax highlighting for code blocks it's built with help of `highlight.js` and `marked`. To add new languages, just import its file in the `lib/renderers.ts` and add a key-value pair in the `languages` map.

### Future plans
Even if it looks simple, it works. But, I want to keep working on it to make it even better, giving it features like comments, share options, reactions, and so on.

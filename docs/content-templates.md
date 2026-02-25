# Content Templates

Copy and adapt these snippets when adding new entries.

## Lighting Design (`lib/shows.ts`)

```ts
{
  slug: "example-show",
  title: "Example Show",
  role: "Lighting Designer",
  venue: "Example Venue",
  location: "City, ST",
  year: 2026,
  image: "/images/example-show.jpg",
  note: "Optional note",
  collaborators: [
    { role: "Director", name: "Person Name" },
    { role: "Scenic Design", name: "Person Name" },
  ],
}
```

## Photography Project (`lib/photography.ts`)

```ts
{
  slug: "example-project",
  title: "Example Project",
  company: "Example Company",
  image: "/images/example-project.jpg",
  gallery: [
    "https://images.squarespace-cdn.com/content/v1/.../image-1.jpg",
    "https://images.squarespace-cdn.com/content/v1/.../image-2.jpg",
  ],
  credits: {
    director: "Name",
    scenic: "Name",
    costume: "Name",
    ld: "Name",
    sound: "Name",
    sm: "Name",
  },
}
```

## Programming Credit (`lib/programming.ts`)

```ts
{
  production: "Example Production",
  designer: "Designer Name",
  venue: "Example Venue",
  console: "ETC Eos",
  year: 2026,
  sub: false,
}
```

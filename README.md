# Testing repo

First, install deps:

```
pnpm i
```

Then open two terminals and run these two snippets:

```
cd packages/app
pnpm dev
```

```
cd packages/server
pnpm dev
```

You can now go to `http://localhost:8787/` (or whatever the worker says), alternatively you can view the app directly on `http://localhost:5173/`.

In both cases you can go under `/testi` and `/testi/nested`, but if you're doing this on the worker you have to prepend `/books/`, because the app is proxied from there.
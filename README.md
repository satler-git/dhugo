# dhugo

Japanese card game "Daihugo" written in Typescript.

| Part       | Source code (Typescript) | Builds (JavaScript) |
| ---------- | ------------------------ | ------------------- |
| Next.js    | `/renderer`              | `/renderer`         |
| Electron   | `/electron-src`          | `/main`             |
| Production |                          | `/dist`             |

Available just commands:

```bash
"run": start dev version
"setup": setup project(run when clone)
"build": build both layers
"format-all": format all file in project
"lint-all": lint all file in project
```

## Notes

You can create the production app using `yarn run dist`.

_note regarding types:_

- Electron provides its own type definitions, so you don't need @types/electron installed!
  source: https://www.npmjs.com/package/@types/electron
- There were no types available for `electron-next` at the time of creating this example, so until they are available there is a file `electron-next.d.ts` in `electron-src` directory.

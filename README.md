# wakimae

Personal site

## Requirements

- Void Linux (glibc or musl, x86_64)
- [Bun](https://bun.sh)
- `unzip`

## Setup

Install system dependencies:

```bash
sudo xbps-install -Syu
sudo xbps-install -y unzip git
```

Install Bun:

```bash
curl -fsSL https://bun.com/install | bash
```

Reload your shell, then verify:

```bash
. ~/.bashrc
bun --version
```

## Development

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Scripts

```bash
bun run dev     # dev server
bun run build   # production build
bun run start   # run production build
bun run lint    # eslint
```

#!/usr/bin/env bash
# Re-copy console framework SVGs from the vibes repo into static/images/platforms.
# Run from the website repo root when vibes is checked out as a sibling: ../vibes
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VIBES="${VIBES:-$ROOT/../vibes/public/icons}"
WEB="$ROOT/static/images/platforms"
ASSETS="$ROOT/src/routes/(marketing)/(assets)/icons"
LYNX="$ROOT/src/lib/components/marketing/(assets)/icons/lynx.svg"

if [[ ! -d "$VIBES" ]]; then
  echo "Missing vibes icons dir: $VIBES (set VIBES=...)" >&2
  exit 1
fi

mkdir -p "$WEB/dark" "$WEB/light"
for f in react nextjs vue angular svelte nuxt astro solid refine remix kotlin swift java dart deno flutter android apple ios go dotnet php ruby python node tanstack vite js; do
  [[ -f "$VIBES/$f.svg" ]] && cp "$VIBES/$f.svg" "$WEB/dark/$f.svg"
done
cp "$VIBES/js.svg" "$WEB/dark/javascript.svg"
# Qwik asset uses #6C6C71; normalize to console neutral so it matches vibes icons.
cp "$ASSETS/qwik.svg" "$WEB/dark/qwik.svg"
tmp_qwik="$(mktemp)"
sed 's/#6C6C71/#C4C6D7/g' "$WEB/dark/qwik.svg" >"$tmp_qwik" && mv "$tmp_qwik" "$WEB/dark/qwik.svg"
cp "$ASSETS/rust.svg" "$WEB/dark/rust.svg"
tmp_rust="$(mktemp)"
sed 's/#C3C3C6/#C4C6D7/g' "$WEB/dark/rust.svg" >"$tmp_rust" && mv "$tmp_rust" "$WEB/dark/rust.svg"
cp "$ASSETS/react-native.svg" "$WEB/dark/react-native.svg"
tmp_rn="$(mktemp)"
sed 's/#d1d5db/#C4C6D7/gi' "$WEB/dark/react-native.svg" >"$tmp_rn" && mv "$tmp_rn" "$WEB/dark/react-native.svg"
cp "$LYNX" "$WEB/dark/lynx.svg"
cp "$VIBES/bun.svg" "$WEB/dark/bun.svg"

for f in "$WEB"/dark/*.svg; do
  bn="$(basename "$f")"
  sed 's/#C4C6D7/#2D2D36/g; s/#c4c6d7/#2D2D36/g' "$f" > "$WEB/light/$bn"
done

cp "$WEB/dark/node.svg" "$WEB/nodejs.svg"
cp "$WEB/dark/bun.svg" "$WEB/bun.svg"
for f in dart go php ruby python; do cp "$WEB/dark/$f.svg" "$WEB/$f.svg"; done

echo "Synced into $WEB/dark and $WEB/light"

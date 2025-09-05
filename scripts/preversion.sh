#!/bin/sh

# Preversion script - runs before npm version bump
# Cleans, builds, and commits the dist folder

echo "=== PRE-VERSION SCRIPT ==="
npm run clean && npm run build && git add dist && git commit -m 'ci: check in dist folder' || echo 'Nothing to distribute'
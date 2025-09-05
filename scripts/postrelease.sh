#!/bin/sh

# Post-release script - runs after the main release
# Push and publish with the tag set by release.sh

echo "=== POST-RELEASE SCRIPT ==="
echo "Current tag variable: '$tag'"

if [ -z "$tag" ]; then
  echo "ERROR: \$tag variable is not set or empty"
  echo "Falling back to 'latest' tag"
  tag="latest"
fi

echo "Using tag: '$tag'"

# Push commits and tags
echo "Pushing to git..."
git push && git push --follow-tags

# Publish to npm with the correct tag
echo "Publishing to npm with tag: '$tag'"
npm publish --tag $tag

echo "=== POST-RELEASE COMPLETE ==="
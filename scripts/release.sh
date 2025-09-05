#!/bin/sh

# This script will determine the type of release based on the git branch.
# When the default branch is used, it will be a `patch` that's published to npm
# under the `latest` dist-tag. Any other branch will be a `prelease` that's
# published to npm under the `alpha-$SHA` dist-tag.
bump='patch'
tag='latest'

current_branch=$(git rev-parse --abbrev-ref HEAD)
default_branch=$(git remote show origin | sed -n '/HEAD branch/s/.*: //p')
current_sha=$(git rev-parse --short HEAD)

if [ "$current_branch" != "$default_branch" ]; then
  bump='prerelease'
  tag="alpha-$current_sha"
  npm run standard-version -- --prerelease $tag --release-as patch
else
  npm run standard-version -- --release-as patch
fi

echo "=== RELEASE SCRIPT COMPLETE ==="
echo "Branch: $current_branch (default: $default_branch)"
echo "Bump type: $bump"
echo "Tag: $tag"

# Git push and npm publish (in same script, so $tag is available)
git push && git push --follow-tags && npm publish --tag $tag

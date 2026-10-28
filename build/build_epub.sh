#!/usr/bin/env bash
set -e

node build/partition_10_volumes.js
node build/render_cover.js
node build/preprocess_epub.js
node build/build_epubs.js

#!/usr/bin/env bash
# sync-output.sh — Copy last30days output to local content archive
#
# Usage: ./scripts/sync-output.sh <topic-slug>
# Example: ./scripts/sync-output.sh ai-coding-assistants
#
# Copies from ~/.local/share/last30days/out/ to content/YYYY-MM-DD/<topic-slug>/

set -euo pipefail

TOPIC_SLUG="${1:?Usage: sync-output.sh <topic-slug>}"
SOURCE_DIR="${HOME}/.local/share/last30days/out"
DATE=$(date +%Y-%m-%d)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DEST_DIR="${SCRIPT_DIR}/../content/${DATE}/${TOPIC_SLUG}"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory does not exist: $SOURCE_DIR"
    echo "Run a last30days research query first."
    exit 1
fi

if [ -z "$(ls -A "$SOURCE_DIR" 2>/dev/null)" ]; then
    echo "Error: Source directory is empty: $SOURCE_DIR"
    echo "Run a last30days research query first."
    exit 1
fi

mkdir -p "$DEST_DIR"
cp -v "$SOURCE_DIR"/* "$DEST_DIR"/

echo ""
echo "Archived to: $DEST_DIR"
echo "Files:"
ls -la "$DEST_DIR"

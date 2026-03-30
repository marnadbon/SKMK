# last30days — Social Listening Research

Third research method alongside X scraper (daily feed curation) and Kindle scraper (book extraction). last30days does **topic-specific social listening** across Reddit, X/Twitter, YouTube, and the web for the past 30 days.

## Quick Start

```bash
# From Claude Code — slash command
/last30days [topic]

# Direct script invocation
python3 last30days/scripts/last30days.py "topic" --emit=compact
```

## Modes

| Flag | Depth | Time | Sources |
|---|---|---|---|
| `--quick` | Fast scan | 2-3 min | 8-12 per platform |
| *(default)* | Balanced | 3-5 min | 20-30 per platform |
| `--deep` | Comprehensive | 5-8 min | 50-70 Reddit, 40-60 X |

## Source Flags

| Flag | Effect |
|---|---|
| `--sources=reddit` | Reddit only |
| `--sources=x` | X/Twitter only |
| `--sources=both` | Reddit + X (default) |
| `--include-web` | Add Brave web search results |

## Output Locations

- **Script output**: `~/.local/share/last30days/out/` (report.md, report.json, last30days.context.md)
- **Archived outputs**: `content/YYYY-MM-DD/[topic-slug]/` (copied by sync script)

## Archiving Results

After running research, archive to the local content directory:

```bash
./scripts/sync-output.sh "topic-slug"
```

This copies from `~/.local/share/last30days/out/` into `content/YYYY-MM-DD/topic-slug/`.

## Integration with System References

Findings from last30days research feed into:

- `${CLAUDE_PLUGIN_DATA}/references/research.md` — market language, competitor intel, trending terms
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — community voice, emotional triggers, customer language

These reference docs power the strategy, copywriting, and ads skills.

**Workflow**: Run research -> Review findings -> Manually merge relevant insights into reference docs. No automatic overwrites — review and approve before updating references.

```
last30days research → review → ${CLAUDE_PLUGIN_DATA}/references/research.md
                             → ${CLAUDE_PLUGIN_DATA}/references/testimonials.md
                                      ↓
                    buyer-avatar.md → strategy / copywriting / ads
```

## Example Queries

```
/last30days [product category] trending discussions
/last30days [competitor] reviews and complaints
/last30days [pain point] solutions on Reddit
/last30days [industry keyword] for copywriting angles
```

## Watchlist

See `watchlist.md` for topics being tracked on an ongoing basis.

## API Keys

Configured in `${CLAUDE_PLUGIN_DATA}/.env`:

- `OPENAI_API_KEY` — Required (Reddit search via Responses API)
- `BRAVE_API_KEY` — Optional (web search, free tier 2k queries/month)
- `XAI_API_KEY` — Optional (alternative X/Twitter search via xAI API)

## Diagnostics

```bash
python3 last30days/scripts/last30days.py --diagnose
```

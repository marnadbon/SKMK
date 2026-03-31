#!/bin/bash

# Setup script for daily 6 AM X Research run
# This creates a launchd job on macOS

PLIST_NAME="com.x-research.daily"
PLIST_PATH="$HOME/Library/LaunchAgents/${PLIST_NAME}.plist"
PROJECT_DIR="/Volumes/abundance/SKILLS/Research/X"
LOG_DIR="${PROJECT_DIR}/logs"

# Create logs directory
mkdir -p "$LOG_DIR"

# Create the launchd plist file
cat > "$PLIST_PATH" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>${PLIST_NAME}</string>

    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/node</string>
        <string>${PROJECT_DIR}/run-daily.js</string>
    </array>

    <key>WorkingDirectory</key>
    <string>${PROJECT_DIR}</string>

    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>6</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>

    <key>StandardOutPath</key>
    <string>${LOG_DIR}/daily-run.log</string>

    <key>StandardErrorPath</key>
    <string>${LOG_DIR}/daily-run-error.log</string>

    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/usr/local/bin:/usr/bin:/bin:/opt/homebrew/bin</string>
    </dict>
</dict>
</plist>
EOF

echo "Created launchd plist at: $PLIST_PATH"

# Load the job
launchctl unload "$PLIST_PATH" 2>/dev/null
launchctl load "$PLIST_PATH"

echo "Loaded launchd job. X Research will run daily at 6:00 AM."
echo ""
echo "To check status:  launchctl list | grep x-research"
echo "To disable:       launchctl unload $PLIST_PATH"
echo "To run manually:  launchctl start $PLIST_NAME"
echo "Logs at:          $LOG_DIR/"

#!/bin/bash
# Revert from accordion navigation back to drawer navigation

BACKUP_DIR="/home/user/signalpilot-docs/.backups/drawer-backup-20251107-030932"

echo "🔄 Reverting to drawer navigation..."

# Restore backed up files
cp "$BACKUP_DIR/extra.css" /home/user/signalpilot-docs/assets/stylesheets/
cp "$BACKUP_DIR/mobile-drawer-swipe.js" /home/user/signalpilot-docs/assets/
cp "$BACKUP_DIR/mobile-nav-fix.js" /home/user/signalpilot-docs/assets/

echo "✅ Reverted! Original drawer navigation restored."
echo "📁 Backup is still available at: $BACKUP_DIR"

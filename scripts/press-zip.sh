#!/bin/sh
# Bundles the press kit files from the build output into dist/press/plugbrain-press-kit.zip.
# Runs after `astro build` (npm "postbuild"), so the ZIP always matches the files on /press/.
set -e
cd "$(dirname "$0")/../dist/press"
rm -f plugbrain-press-kit.zip
zip -qr -X plugbrain-press-kit.zip plugbrain-fact-sheet.pdf logo graphics screenshots
echo "press kit: $(du -h plugbrain-press-kit.zip | cut -f1) dist/press/plugbrain-press-kit.zip"

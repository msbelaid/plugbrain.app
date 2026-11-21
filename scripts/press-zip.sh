#!/bin/sh
# Bundles the press kit files from the build output into one ZIP per language:
# dist/press/plugbrain-press-kit.zip (English), plugbrain-press-kit-fr.zip, plugbrain-press-kit-ar.zip.
# Each holds that language's fact sheet, screenshots and banners (Arabic has its own) plus the shared logos.
# Runs after `astro build` (npm "postbuild"), so the ZIPs always match the files on /press/.
set -e
cd "$(dirname "$0")/../dist/press"
rm -f plugbrain-press-kit*.zip
zip -qr -X plugbrain-press-kit.zip plugbrain-fact-sheet.pdf logo graphics screenshots -x 'screenshots/fr/*' 'screenshots/ar/*' 'graphics/ar/*'
for l in fr ar; do
  tmp=$(mktemp -d)
  cp -r logo "$tmp/"
  mkdir "$tmp/graphics"
  if [ "$l" = ar ]; then cp graphics/ar/*.png graphics/plugbrain-demo.gif "$tmp/graphics/"; else cp graphics/*.png graphics/*.gif "$tmp/graphics/"; fi
  mkdir "$tmp/screenshots" && cp screenshots/$l/*.png "$tmp/screenshots/"
  cp "plugbrain-fact-sheet-$l.pdf" "$tmp/"
  (cd "$tmp" && zip -qr -X plugbrain-press-kit-$l.zip .)
  mv "$tmp/plugbrain-press-kit-$l.zip" .
  rm -rf "$tmp"
done
ls -lh plugbrain-press-kit*.zip | awk '{print "press kit:", $5, $NF}'

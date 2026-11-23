const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'favicon.png');
const outputDir = path.join(__dirname, 'public');

async function generateFavicons() {
    try {
        console.log('Reading input favicon...');

        // Read the image and get its bounding box (trimming transparent pixels)
        const image = sharp(inputPath);
        const { info, data } = await image.trim().toBuffer({ resolveWithObject: true });

        console.log('Trimmed image dimensions:', info.width, 'x', info.height);

        // We want the logo to take up ~80% of the canvas. 
        // So the padding should be 10% on each side.
        // Let's create a square canvas where the logo is centered.
        const maxDim = Math.max(info.width, info.height);
        const canvasSize = Math.round(maxDim / 0.8);

        // Create a buffer of the centered, trimmed image on a transparent square canvas
        const squareBuffer = await sharp({
            create: {
                width: canvasSize,
                height: canvasSize,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            }
        })
            .composite([{
                input: data,
                gravity: 'center'
            }])
            .png()
            .toBuffer();

        console.log('Created square master buffer. Generating sizes...');

        const sizes = [
            { name: 'favicon-16x16.png', size: 16 },
            { name: 'favicon-32x32.png', size: 32 },
            { name: 'favicon-48x48.png', size: 48 },
            { name: 'apple-touch-icon.png', size: 180 }, // Apple touch icon
            { name: 'pwa-512x512.png', size: 512 }       // PWA icon
        ];

        for (const s of sizes) {
            await sharp(squareBuffer)
                .resize(s.size, s.size, {
                    kernel: sharp.kernel.lanczos3,
                    fit: 'contain',
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                })
                .toFile(path.join(outputDir, s.name));
            console.log(`Generated ${s.name}`);
        }

        // Generate ICO file (usually just renaming/copying the 32x32 for modern basic usage, 
        // but let's be safe and use standard sharp to convert to a 32x32 ico-compatible png)
        await sharp(squareBuffer)
            .resize(32, 32)
            .toFile(path.join(outputDir, 'favicon.ico'));

        console.log('Generated favicon.ico');

        // Overwrite the original favicon.png with the new perfectly centered 512x512 version
        await sharp(squareBuffer)
            .resize(512, 512)
            .toFile(path.join(outputDir, 'favicon.png'));

        console.log('Favicon generation complete!');

    } catch (err) {
        console.error('Error generating favicons:', err);
    }
}

generateFavicons();

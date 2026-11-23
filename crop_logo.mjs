import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outputPath = path.join(__dirname, 'public', 'logo-cropped.png');

async function cropLogo() {
    try {
        console.log('Reading input logo...');

        // Read the image and get its bounding box (trimming transparent pixels)
        const image = sharp(inputPath);
        const { info, data } = await image.trim().toBuffer({ resolveWithObject: true });

        console.log('Trimmed image dimensions:', info.width, 'x', info.height);

        // Save the cropped buffer back
        await sharp(data)
            .toFile(outputPath);

        // Overwrite original
        fs.renameSync(outputPath, inputPath);

        console.log('Logo padding successfully cropped!');

    } catch (err) {
        console.error('Error cropping logo:', err);
    }
}

cropLogo();

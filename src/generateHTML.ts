import * as fs from 'fs';
import * as path from 'path';

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CubeDood: ReCubed</title>
    <link rel="stylesheet" href="css/recubed.css">
</head>
<body>
    <canvas id="canvas" width="800" height="640"></canvas>
</body>
<script src="js/graphics.js"></script>
<script src="js/utility.js"></script>
<script src="js/recubed.js"></script>
</html>
`;

const outputPath = path.resolve(__dirname, '../index.html'); // Ensure this path is correct
fs.writeFileSync(outputPath, html);

console.log('HTML file generated at:', outputPath);

import * as fs from 'fs';
import * as path from 'path';

const html = `
canvas {
    display: block;
    margin: auto;
    border-color:white;
    border-style:solid;
}

body {
    background-color:black;
}
`;

const outputPath = path.resolve(__dirname, '../css/recubed.css'); // Ensure this path is correct
fs.writeFileSync(outputPath, html);

console.log('CSS file generated at:', outputPath);

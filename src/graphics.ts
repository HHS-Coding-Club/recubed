/**
 * Clears the canvas
 * @param context The canvas context to clear
 */
export function clearCanvas(context: CanvasRenderingContext2D): void {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

/**
 * Changest the background color of the canvas
 * @param context The canvas context to change the background color of
 * @param color The color to change the background to, in HEX format
 */
export function drawBackground(context: CanvasRenderingContext2D, color: string): void {
  context.fillStyle = color;
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

/**
 * Draws a rectangle on the canvas
 * @param context The canvas context to draw the rectangle on
 * @param x The x position of the rectangle
 * @param y The y position of the rectangle
 * @param width The width of the rectangle
 * @param height The height of the rectangle
 * @param color The color of the rectangle, in HEX format
 */
export function drawRectangle(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string): void {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

/**
 * Draws text on the canvas
 * @param context The canvas context to draw the text on
 * @param text The text to draw
 * @param x The x position of the text
 * @param y The y position of the text
 * @param font The font of the text
 * @param color The color of the text, in HEX format
 */
export function drawText(context: CanvasRenderingContext2D, text: string, x: number, y: number, font: string, color: string): void {
  context.fillStyle = color;
  context.font = font;
  context.fillText(text, x, y);
}

/**
 * Draws a rectangle outline on the canvas
 * @param context
 * @param x
 * @param y
 * @param width
 * @param height
 * @param color
 * @param lineWidth
 */
export function drawRectangleOutline(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string, lineWidth: number): void {
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.strokeRect(x, y, width, height);
}

/**
 * Draws a line to the canvas
 * @param context
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param color
 */
export function drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string) {
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

/**
 * Draws a layered background for menus
 * @param context Canvas context
 * @param color1 1st color
 * @param color2 2nd color
 * @param color3 3rd color
 */
export function drawMenuBackground(context: CanvasRenderingContext2D, color1: string, color2: string, color3: string) {
  drawBackground(context, color1);
  drawRectangle(context, 0, 0, 780, 620, color2);
  drawRectangle(context, 0, 0, 760, 600, color3);
}

export function drawGameLogo(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  flagImage: HTMLImageElement,
  logoImage: HTMLImageElement,
  text: string,
  char1DrawFunction: Function,
  char2DrawFunction: Function
) {
  context.drawImage(logoImage, x, y);
  context.drawImage(flagImage, x + 408, y - 13, 32, 32);
  drawText(context, text, x + 260, y + 135, '40px Helvetica', '#000000');
  char1DrawFunction(context, x + 440, y + 68, 32, 32, 'right');
  char2DrawFunction(context, x + 504, y + 68, 32, 32, 'left');
}

export function drawButton(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string, strokeColor: string, textColor: string, text: string, font: string) {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);

  context.strokeStyle = strokeColor;
  context.strokeRect(x, y, w, h);

  context.fillStyle = textColor;
  context.font = font;
  context.fillText(text, x + w / 2 - text.length * 5, y + h / 2 + 5);
}

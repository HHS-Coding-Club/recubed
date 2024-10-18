/**
 * Clears the canvas
 * @param context The canvas context to clear
 */
function CGL_clearCanvas(context: CanvasRenderingContext2D): void {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}

/**
 * Changest the background color of the canvas
 * @param context The canvas context to change the background color of
 * @param color The color to change the background to, in HEX format
 */
function CGL_drawBackground(
  context: CanvasRenderingContext2D,
  color: string,
): void {
  context.fillStyle = color
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
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
function CGL_drawRectangle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
): void {
  context.fillStyle = color
  context.fillRect(x, y, width, height)
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
function CGL_drawText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  font: string,
  color: string,
): void {
  context.fillStyle = color
  context.font = font
  context.fillText(text, x, y)
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
function CGL_drawRectangleOutline(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string,
  lineWidth: number,
): void {
  context.strokeStyle = color
  context.lineWidth = lineWidth
  context.strokeRect(x, y, width, height)
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
function CGL_drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string) {
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}
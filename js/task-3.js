function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const Npx = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return Npx;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

function getElementHeight(content, padding, border) {
  const contentHeight = parseInt(content);
  const paddingHeight = parseInt(padding);
  const borderHeight = parseInt(border);

  const totalHeight = contentHeight + paddingHeight * 2 + borderHeight * 2;
  return totalHeight;
}

console.log(getElementHeight('100px', '10px', '2px')); // 124
console.log(getElementHeight('50px', '5px', '1.5px')); // 63
console.log(getElementHeight('200px', '0px', '0px')); // 200

function calculateRectanglePerimeter(length, width) {
  const rectangleLength = parseFloat(length);
  const rectangleWidth = parseFloat(width);
  const perimeter = 2 * (rectangleLength + rectangleWidth);
  return perimeter;
}

console.log(calculateRectanglePerimeter('10cm', '5cm')); // 30
console.log(calculateRectanglePerimeter('15cm', '7cm')); // 44
console.log(calculateRectanglePerimeter('8.5cm', '3.2cm')); // 23.4

function calculateTriangleArea(base, height) {
  const triangleBase = parseFloat(base);
  const triangleHeight = parseFloat(height);
  const TriangleArea = (triangleBase * triangleHeight) / 2;
  return TriangleArea;
}

console.log(calculateTriangleArea('10cm', '5cm')); // 25
console.log(calculateTriangleArea('15cm', '10cm')); // 75
console.log(calculateTriangleArea('8.5cm', '4cm')); // 17

//this is not exported
const PI = 3.14159265359;

// area and circumference will be exported and accessible from other .js modules
exports.area = radius => (radius ** 2) * PI;
exports.circumference = radius => 2 * radius * PI;

/*






  //--------------------------Calculate the area of trangle, rectangle and circle ---------------------//
  calculateRectangleArea = function(length ,width){
    if(length <=1 || width <=1){
        return "undefined"
    }
    return length * width;
  };
  calculateTriangleArea = function(base , height){
    if(base <=1 || height <=1){
        return "undefined"
    }
    return (base * height )/ 2;
  };
  calculateCircleArea = function(radius){
    if(radius <=1 ){
        return "undefined"
    }
    return Math.PI * radius * radius;
  };

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined*/

const calculateRectangleArea = (length, width) =>
  length < 0 || width < 0 ? undefined : length * width;
const calculateTriangleArea = (base, height) =>
  base < 0 || height < 0 ? undefined : (base * height) / 2;
const calculateCircleArea = (radius) =>
  radius < 0 ? undefined : radius * radius  * Math.PI;
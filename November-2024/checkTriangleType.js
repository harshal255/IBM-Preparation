const triangleSides = [3, 4, 2];

//all sides are same --> equilateral
//two sides are isosceles -->
//otherwise --> scalene

const checkTriangleType = (triangleSides) => {
    let uniqueVal = [...new Set(triangleSides)].length
    return uniqueVal === 1 ? 'equilateral' : uniqueVal === 2 ? 'isosceles' : 'scalene';
}

console.log(checkTriangleType(triangleSides));
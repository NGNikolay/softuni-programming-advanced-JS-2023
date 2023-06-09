function rectangle(width, height, color) {
    const rectangular = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return Number(this.width) * Number(this.height);
        }
    }
    return rectangular;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

function getFibonator(cur = 0, next = 1) {
    return function () {
        let temp = cur + next;
        cur = next;
        next = temp;
        return cur;
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

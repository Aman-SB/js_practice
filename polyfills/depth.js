function getArrayDepth(value) {
    return Array.isArray(value)
        ? 1 + Math.max(0, ...value.map(getArrayDepth))
        : 0;
}

let arr = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12];

console.log(getArrayDepth(arr));

// 0, 0, 1 + max(0, 0, 1 + max(0, 0), 0, 1 + max(0, 1 + max(0, 0)), 0), 0, 0

// 0, 0, 1 + max(0, 0, 1, 0, 1 + max(0, 1), 0), 0, 0

//  0, 0, 1 + max(0, 0, 1, 0, 2, 0), 0, 0

// 0, 0, 3, 0, 0
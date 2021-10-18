// Your code here
// function mapToNegativize(ray) {
//     let negNums = []
//     ray.forEach((posNum) => {
//         negNums.push(posNum * -1)
//     })
//     return negNums;
// };

function mapToNegativize(ray) {
    let negNums = [];
    for (let i = 0; i < ray.length; i++) {
        negNums.push(ray[i] * -1)
    };
    return negNums;
}

function mapToNoChange(source) {
    let noChange = []
    for (let x of source) {
        noChange.push(x)
    };
    return noChange;
};

function mapToDouble(source) {
    let doubledValues = []
    for (let x of source) {
        doubledValues.push(x * 2)
    };
    return doubledValues;
}

function mapToSquare(source) {
    let squaredValues = []
    for (let x of source) {
        squaredValues.push(x ** 2)
    };
    return squaredValues;
};

function reduceToTotal(source, start = 0) {
    let total = start;
    for (let x of source) {
        total += x;
    };
    return total;
};

function reduceToAllTrue (source) {
    for (let i = 0; i < source.length; i++) {
       if (!source[i]) return false
    };
    return true
};

function reduceToAnyTrue (source) {
    for (let i = 0; i < source.length; i++) {
       if (source[i]) return true
    };
    return false;
};
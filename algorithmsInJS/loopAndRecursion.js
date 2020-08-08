// similarities between loop and recursion

// example 1
const loopNTimesR = (n) =>{
    // console.log("n ==" , n);
    if(n<=1){
        return 'complete';
    }
    return loopNTimesR(n-1);
};

// console.log(loopNTimesR(3));

const loopNTimes = (n) =>{
    for (let index = n; index > 0; index--) {
        console.log(index)
    }
    return 'complete';
};
// console.log(loopNTimes(3));

// example 2

const factorial = (n)=>{
    let result = 1;
    for (let index = 1; index <= n; index++) {
        result *= index;  
    }
    return result;
}

// console.log(factorial(3));

const factorialR = (n) => {
    if(n <= 1) return n;
   return n * factorialR(n-1);
}

// console.log(factorialR(3));


// example 3
const logNumbers = (start, end) => {
    
    for (let index = start; index <= end; index++) {
        console.log(index);
    }
    return 'completed from loop';
}

// console.log(logNumbers(1,3));

const logNumbersR = (start, end) => {
    function recurse(i){
        console.log(`recursively ${i}`);
        if(i < end){
            recurse(i+1);
        }
    }
    recurse(start);
}

// logNumbersR(1,3);

// two patterns for recursion
//1. wrapper function
// 2. accumulator


// this is an example of wrapper function where we used recurse as the wrapper function
const logNumbersR1 = (start, end) => {
    function recurse(i) {
        console.log(`recursively ${i}`);
        if (i < end) {
            recurse(i + 1);
        }
    }
    recurse(start);
}

// this is an example of accumulator where we keep on adding the result and passing down to recursion
// till it meets the base case;

function joinElements(array, joinString){
    function recurse1(index, resultSoFar){
        resultSoFar += array[index];
        // console.log(resultSoFar);
        if(index === array.length -1){
            return resultSoFar;
        }else{
            return recurse1(index + 1, resultSoFar+joinString);
        }
    }
    return recurse1(0,'');
}
//  console.log(joinElements(['s','cr','t','cod',':) :)'], 'e'));

function joinElementsIterative(array, joinElements){
    let result = '';
    for (let index = 0; index < array.length; index++) {
         result += array[index];
         if(index !== array.length -1){

             result += joinElements;
         }

    }
    return result;
}
//  console.log(joinElementsIterative(['s','cr','t','cod',':) :)'], 'e'));

function factorialRecursive(n){
    let chache = {};
    if(n in chache){
        return chache[n];
    }else{
        if(n <= 1) {
            return 1;
        }else{
            let result = n * factorialRecursive(n - 1);
            chache[n] = result;
            return result;
        }
    }
}
// console.log(factorialRecursive(0));

// second approach 

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache){
            return cache[n];
        }else{
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};

const factorialNew = memoize(
    x => {
        if(x <= 1 ) {
            return 1;
        }else{
            return x * factorialNew(x -1);
        }
    }
);

// console.log(factorialNew(5));


// lucas number are 2,1,3,4,7,11,18......
function lucasNumber(n){
    let memo = {};
    if(n in memo) return memo[n];
    if(n === 0) return 2;
    if(n === 1) return 1;
    const result =  lucasNumber(n - 1) + lucasNumber(n-2);
    memo[n] = result;
    return result;
}

// console.log(lucasNumber(5));

function lucasNumberIter(n){
    let array = [2,1];
    if (n === 0) return 2;
    if (n === 1) return 1;
    for (let index = 2; index <= n; index++) {
        let x = array[index -1] + array[index -2];
        array.push(x);
    }
    return array[n];
}

// console.log(lucasNumberIter(5));

function sumArray(array){
    // let length = array.length - 1;
    // if(length < 0) return 0;
    // let element = array.shift();
    // return element + sumArray(array);
   
    if(array.length < 1) return 0;
   
    return array[0] + sumArray(array.slice(1));
    
}

console.log(sumArray([1,2,3]));
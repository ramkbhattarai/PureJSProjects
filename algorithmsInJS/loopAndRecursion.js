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
console.log(joinElements(['s','cr','t','cod',':) :)'], 'e'));
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



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

function factorialRecursive(n, chache = {}){
    if(n in chache){
        return chache[n];
    }else{
        if(n <= 1) {
            return 1;
        }else{
            chache[n] =  n * factorialRecursive(n - 1,cache);
           
            return chache[n];
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
function lucasNumber(n, memo = {}){
    if(n in memo) return memo[n];
    if(n === 0) return 2;
    if(n === 1) return 1;
    const result =  lucasNumber(n - 1,memo) + lucasNumber(n-2, memo);
    memo[n] = result;
    return result;
}

//  console.log(lucasNumber(42));

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

// console.log(sumArray([1,2,3]));

function reverseString(string){
    if(string.length < 1) return '';
    return string[string.length -1] + reverseString( string.slice(0, string.length -1));
}

// console.log(reverseString('ram'));

function power(base, exponent, cache = {}){
    if (cache[`${base}and${exponent}`]) return cache[`${base}and${exponent}`];
    if(exponent < 0){
        let ans = power(base, -exponent, cache);
        return 1/ans;
    }
    if(exponent === 0) return 1;
    const result = base * power(base, exponent - 1, cache);
    cache[`${base}and${exponent}`] = result;
    return result;

}

// console.log(power(3,4));

function flattenArray(arr){
    if(!Array.isArray(arr)) return [arr];
    let flattenedArray = [];
    arr.forEach((ele) =>{
        let el = flattenArray(ele);
        flattenedArray.push(...el);
    });
    return flattenedArray;
}
// console.log(flattenArray([1,2,[3,4],[5,6,[7,8,[9]]]]));

function fileFinder(directives, targetFiles){
    for(let key in directives){
        if (key === targetFiles || fileFinder(directives[key], targetFiles)){
            return true;
        }
    }
    return false;
}

function pathFinder(directives, targetFiles){
    for (let key in directives) {
        if (key === targetFiles) {
            return '/' + targetFiles;
        }
        let subDir = pathFinder(directives[key],targetFiles);
        if(subDir !== null){
            return key + subDir;
        }
    }
    return null;
}

function minChange(coins, amount, memo={}){
    if (amount in memo) return memo[amount];
    if(amount === 0) return 0;
    let result = [];
    
    coins.forEach((coin)=>{
        if(amount >= coin){
          result.push(minChange(coins, amount - coin, memo) + 1);
            // console.log(result);
        }
    });
    memo[amount] = Math.min(...result);
    return memo[amount];
}

// console.log(minChange([1,10,25], 100));

function change(amount, coins, memo ={}){
    let key = amount + '-'+ coins;
    if(key in memo) return memo[key];
    if(amount === 0) return 1;
    let currentCoin = coins[coins.length -1];
    let total = 0;
    for(let qty = 0; qty * currentCoin <= amount; qty++){
        total += change(amount - qty * currentCoin, coins.slice(0, -1). memo);
        
    }
    memo[key] = total;
    return memo[key];
}


function wordBreak(word, dictionary){
    let table = new Array(word.length + 1).fill(false);
    table[0] = true;
    for (let index = 0; index < table.length; index++) {
        if(table[index] === false) continue; // if there's false we can't break the string so choose next
        for (let j = i + 1; j < table.length; j++) {
            let string = word.slice(i,j);
            if (dictionary.includes(string)) {
                table[j] = true;
            }
            
        }
       
        
    }
    return table[table.length - 1];
}

function steps(nums){
    let table = new Array(nums.length).fill(false);
    table[0]= true;
    for (let index = 0; index < table.length; index++) {
        if(table[index] === true){

            let maxRange = nums[index];
             for(let i = 1; i<=maxRange;i++){
                table[i + index] = true;
             }
        }
    }
    // console.log(table)
    return table[table.length -1];
}

// console.log(steps([2,3,1,1,0,4,7,8]))

function stepper(nums, memo={}){
    let key = nums.length;
    if(key in memo) return memo[key];
    if(nums.length === 0) return true;
    let maxRange = nums[0];
    for(let step = 1; step <= maxRange; step++){
        if(stepper(nums.slice(step), memo)) {
            memo[key] = true;
            return true;}
    }
    memo[key] = false;
    return false;
}

function nonAdjcentSum(nums){
    if(nums.length === 0) return 0;
    let table = new Array(nums.length).fill(0);
    table[0] = nums[0];
    for(let i = 1; i < table.length; i++){
        let skippingLeftNeighbor = table[i-2] === undefined ? 0 : table[i-2];
        let includingThisNum = skippingLeftNeighbor + nums[i];
        let notIncludingThisNum = table[i-1];
        table[i] = Math.max(includingThisNum, notIncludingThisNum);
    }
    return table[table.length -1];
}
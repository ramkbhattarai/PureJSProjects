function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if (target < array[midIdx]) {
        return binarySearch(leftHalf, target);
    } else if (target > array[midIdx]) {
        return binarySearch(rightHalf, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target, low=0, high=array.length -1){
    if (low === high) {
        return -1;
    }

    let midIdx = Math.floor((low+ high) / 2);
  

    if (target < array[midIdx]) {
        return binarySearchIndex(array, target, lo, midIdx);
    } else if (target > array[midIdx]) {
        return binarySearchIndex(array, target, midIdx +1, high);
    } else {
        return midIdx;
    }
}

function binarySearchIter(array, target){
    if(array.length === 0){
        return false;
    }
    let low = 0;
    let high = array.length;
    while(low < high){
        let midIdx = Math.floor((low + high) / 2);
        
        if(target < array[midIdx]){
            high = midIdx;
        } else if (target > array[midIdx]){
            low = midIdx + 1;
        }else{
            return true;
        }
    }
    return false;
}

function binarySearchIterIndex(array, target) {
    if (array.length === 0) {
        return -1;
    }
    let low = 0;
    let high = array.length;
    while (low < high) {
        let midIdx = Math.floor((low + high) / 2);

        if (target < array[midIdx]) {
            high = midIdx;
        } else if (target > array[midIdx]) {
            low = midIdx + 1;
        } else {
            return midIdx;
        }
    }
    return -1;
}

function searchInsertPosition(array, target){
    let index = 0;
    while(index < array.length && target < array[index]){
        index++;
    }
    return index;
}

function searchInRotatedSortedArray(array, target){
    if (array.length === 0) {
        return -1;
    }
    let low = 0;
    let high = array.length -1;
    while (low < high) {
        let midIdx = Math.floor((low + high) / 2);

        if (target === array[midIdx]) {
            return midIdx;
        }
         if (array[low] <= array[midIdx]) {
             if (array[low] <= target && target < array[midIdx]){

                 high = midIdx - 1;
             }else{
                 low = midIdx + 1;
             }
        } else {
             if (array[high] >= target && target > array[midIdx]) {
                 low = midIdx + 1;
                 
             } else {
                 high = midIdx - 1;
             }
        }
    }
    return array[low] === target ? low : -1;
}

function intersection (nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);

    const result = [];

    for (var value of num1Set) {
        if (num2Set.has(value)) {
            result.push(value);
        }
    }

    return result;
};

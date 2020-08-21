function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({ length: 10 }, () => []); // Array of empty arrays

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }
    return arr;
}


function radixSortWithNegatives(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    var negatives = arr.filter(item => item < 0);
    var negativesSorted = [];
    if (negatives.length > 0) {
        negativesSorted = radixSort(negatives.map(item => Math.abs(item)))
            .reverse()
            .map(item => -item);
    }

    var positives = arr.filter(item => item >= 0);
    let maxDigits = getMaxDigits(positives);

    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < positives.length; i++) {
            let digit = getDigitFrom(positives[i], k);
            buckets[digit].push(positives[i]);
        }
        positives = [].concat(...buckets);
    }
    return negativesSorted.concat(positives);
}
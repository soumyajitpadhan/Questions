function merge(arr, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;

    let lArr = new Array(n1);
    let rArr = new Array(n2);

    for (let i = 0; i < n1; i++) {
        lArr[i] = arr[l + i];
    }

    for (let i = 0; i < n2; i++) {
        rArr[i] = arr[mid + i + 1];
    }

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (lArr[i] < rArr[j]) {
            arr[k] = lArr[i];
            i++;
        }
        else {
            arr[k] = rArr[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = lArr[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rArr[j];
        j++;
        k++;
    }

}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }

    let mid = l + Math.floor((r - l) / 2);

    mergeSort(arr, l, mid);

    mergeSort(arr, mid + 1, r);

    merge(arr, l, mid, r);
}

// let arr = [10, 9, 8, 7, 5, 6, 4, 2, 3, 1];
let arr = [38, 27, 43, 3, 9, 82, 10];
let n = arr.length;
let l = 0;
let r = n - 1;
mergeSort(arr, l, r);
console.log(arr);
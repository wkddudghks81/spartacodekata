function solution(arr1, arr2) {
    let sum = [];

    for (let i = 0; i < arr1.length; i++) {
        let row = [];
        for (let j = 0; j < arr1[i].length; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        sum.push(row);
    }

    return sum;
}
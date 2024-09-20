function solution(s) {
    let array = [...s]
    let solution1 = []
    for(i=0; i<array.length; i++){
       solution1.push(array[i].charCodeAt())
    }
    let arraysort = solution1.sort((a, b) => b - a);
    let solution2 = String.fromCharCode(...arraysort)
    return solution2
}
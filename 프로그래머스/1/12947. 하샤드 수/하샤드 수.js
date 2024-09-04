function solution(x) {
    let arrayx = String(x).split('')
    let numberx = arrayx.map(Number)
    let sum = 0;
    for(i=0; i<numberx.length; i++){
        sum+=numberx[i]
    }
    console.log(sum)
    let result = x%sum===0 ? true : false
    return result

}
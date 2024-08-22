function solution(n){
    let string=String(n)
    let stringarr=Array.from(string)
    let numberarr=stringarr.map(Number)
    let sum=0
    for(i=0; i<numberarr.length; i++){
        sum+=numberarr[i]
    }
    return sum
}
function solution(absolutes, signs) {
    var answer = 123456789;
    let sum=0
    for(i=0; i<signs.length; i++){
        signs[i]===true ? sum+=absolutes[i]:sum-=absolutes[i]
    }
        return sum
}
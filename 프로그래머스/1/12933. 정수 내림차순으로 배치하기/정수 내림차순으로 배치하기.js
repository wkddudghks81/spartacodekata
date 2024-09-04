function solution(n) {
    let arrayn = String(n).split('')
    let sortn = arrayn.sort(function(a,b){return b-a})
    let numberarrayn = sortn.map(Number)
    let joinn = numberarrayn.join('')
    return Number(joinn)
}
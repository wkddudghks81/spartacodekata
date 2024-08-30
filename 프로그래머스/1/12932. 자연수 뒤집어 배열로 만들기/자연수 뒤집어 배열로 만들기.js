let number = 12345
function solution(n) {
    let splitn=String(n).split("")
    console.log(splitn)
    let b = splitn.length
    let answer = []
    for(let i=b-1; i>=0; i--){
        answer.push(Number(splitn[i]))
    }
    return answer
}

function solution(n) {
    let ren = n.toString(3).split("").reverse().join("")
    let ner = parseInt(ren,3)
    return ner
}
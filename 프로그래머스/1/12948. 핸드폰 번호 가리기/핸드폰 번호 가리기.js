function solution(phone_number) {
    let last = phone_number.substr(phone_number.length-4,4)
    let n = phone_number.length-3
    let star = Array(n).join("*")
    return star.concat(last)
    
}
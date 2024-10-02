function solution(n, m) {
    var answer = []
    var max = []
    var min = []
    //1,3 1,2,3,4,6,12 3,6,9,12 12
    //나눠서 나머지가 0이 되는 수, 동일한 숫자중에서 가장 큰수가 최대 공약수
    //배수중 가장 작은수, 최대 공약수가 1인 숫자의 곱
    let i =1
    while(i<=Math.max(n,m)){
        if(n%i === 0 && m%i === 0){
            max.push(i)
        }
        i++
    }
    answer.push(Math.max.apply(null, max))
    min.push(m*n/answer[0])
    answer.push(m*n/answer[0])
    return answer;
}
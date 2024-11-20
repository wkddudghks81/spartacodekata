function solution(numbers) {
    //같은 인덱스가 아니고
    //결과값이 같다면 하나만
    var answer = [];
    for(i=0; i<numbers.length; i++){
        for(j=1; j<numbers.length; j++){
            if(i!==j){
               answer.push(numbers[i]+numbers[j])
            }
        }
    }
    answer.sort((a,b)=>a-b)
    return [...new Set(answer)];
}
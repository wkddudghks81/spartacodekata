function solution(k, score) {
    //정답 배열 result []
    //순위표 배열 rank []
    //k는 순위표 배열의 길이, 순위표 배열의 길이 < 3 + 1
    //rank.push(score[0]), result.push(rank[0])
    //2번째 점수
    //rank.push(score[1]), rank 오름차순, result.push(rank[0])
    //3번째 점수
    //rank.push(score[2]), rank 오름차순, result.push(rank[0])
    //4번째 점수 이상부터
    //rank.push(score[3]), rank 오름차순, result.push(rank[0]), rank.shift()
    let result = []
    let rank = []
    for(i=0; i<score.length; i++){
            if(i<k){
                rank.push(score[i])
                rank.sort(function(a,b){return a-b})
                result.push(rank[0])
            }else{
                rank.push(score[i])
                rank.sort(function(a,b){return a-b}) //10  20  100  150
                if(rank[0]<rank[1]){
                    result.push(rank[1])
                    rank.shift()
                }else{
                    result.push(rank[0])
                    rank.shift()
                }
            }
    }
    return result
}
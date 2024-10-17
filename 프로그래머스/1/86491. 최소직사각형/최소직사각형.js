function solution(sizes) {
    var answer = 0;
    let empty = [[],[]]
    let result = []
    for(i=0;i<sizes.length;i++){
        sizes[i].sort(function(a,b){return b-a})
        empty[0].push(sizes[i][0])
        empty[1].push(sizes[i][1])
    }
    result.push(Math.max(...empty[0]))
    result.push(Math.max(...empty[1]))
    return result[0]*result[1]
}
//[1][0] [2][0]
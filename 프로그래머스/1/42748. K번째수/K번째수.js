function solution(array, commands) {
    //array 를 commands[i][0]부터 commands[i][1] 까지 자르고
    //오름차순으로 정렬시키고
    //commands[i][2]의 숫자를 
    //빈배열 []에 push
    var answer = [];
    for(i=0; i<commands.length; i++){
        let arrayslice = array.slice(commands[i][0]-1,commands[i][1]) //5,2,6,3
        arrayslice.sort((a,b)=>a-b) //2,3,5,6
        let a = commands[i][2]-1 //3
        answer.push(arrayslice[a]) //[5]
    }
    return answer
}
function solution(food) { //[1, 3, 4, 6]
    let result = []
    for(i=1; i<food.length; i++){ //1~3
        if(food[i]%2!==0 && food[i] !==1){ //3%2=1, 1이 아닐때
            let a = (food[i]-1)/2 //1
            for (let j = 0; j < a; j++) {
                result.push(i)
            }
        }else if(food[i]%2==0 && food[i] !==1){
            let a = food[i]/2 
            for (let j = 0; j < a; j++) {
                result.push(i)
            }
        }
    }
    return result.join("")+0+result.reverse().join("")
}
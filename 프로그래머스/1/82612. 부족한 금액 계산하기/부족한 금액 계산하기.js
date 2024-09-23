function solution(price, money, count) {
    let all = 0
    for(i=1; i<count+1; i++){
        all += price*i
    }
    if(money - all >= 0){
        return 0
    }else return -(money - all)
}

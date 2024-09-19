function solution(n) {
    let a = []
    for(i=0; i<n; i++){
        if(i%2===0){
            a.push('수')
        }else{a.push('박')}
    }return a.join('')
}
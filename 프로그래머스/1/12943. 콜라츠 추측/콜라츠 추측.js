function solution(num) {
    let a = []
    a.push(num)
    for(i=0; i<1000; i++){
        if(a[a.length-1] !== 1){
        if(a[i]%2===0){
            let b = a[i]/2
	        a.push(b)
        }else if(a[i]%2===1){
	        let c = a[i]*3+1
	        a.push(c)
         }
        }
    }
    if(a.length-1 === 1){
        return 0
    }else if(a.length-1 > 500){
        return -1
    }else{return a.length-1}
}
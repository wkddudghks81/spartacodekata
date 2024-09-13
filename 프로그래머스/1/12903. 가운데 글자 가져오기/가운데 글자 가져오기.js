function solution(s) {
    let arr = s.split('')
    console.log()
    if(arr.length===1){
        return arr[0]
    }
    if(arr.length===2){
        return arr[0]+arr[1]
    }
    if(arr.length%2 === 1){
        for(i=0; i<arr.length; i++){
                if(arr.length-i===i-1){
                   return arr[i-1]
                }
            }
        }
    if(arr.length%2 === 0){
        for(i=0; i<arr.length; i++){
                if(i+(i+1)-1===arr.length){
                    return arr[i-1]+arr[i]
                }
            }
    }
}
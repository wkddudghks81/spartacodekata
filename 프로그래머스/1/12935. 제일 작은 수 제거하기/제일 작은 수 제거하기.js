function solution(arr) {
    let min = Math.min.apply(null, arr)
    let result = []
   if(arr.length!==1){
    for(i=0; i<arr.length; i++){
        if(arr[i]!==min){
            result.push(arr[i])
        }
    }return result
 }return [-1]
}

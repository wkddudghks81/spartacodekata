function solution(arr, divisor) {
    let resultarray = []
    for(i=0; i<arr.length; i++){
        if(arr[i]%divisor === 0){
            resultarray.push(arr[i])
        }
    }if(resultarray.length === 0){
        return [-1]
    }
    return resultarray.sort(function(a,b){return a-b})
}
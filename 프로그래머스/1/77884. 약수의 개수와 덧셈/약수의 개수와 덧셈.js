function solution(left, right) {
   let a = []
   for(i=left; i<=right; i++){
       a.push(i)
   }
   let c = []
   while(left<=right){
    let b = []
    for(i=1; i<=left; i++){
        if(left%i===0){
            b.push(i)
        }
    }c.push(b.length)
   left++
  }
    let d = []
    for(i=0; i<a.length; i++){
        if(c[i]%2===0){
            d.push(a[i]*1)
        }else {
            d.push(a[i]*(-1))
        }    
    }
    let sum = 0
    for(i=0; i<d.length; i++){
        sum+=d[i]
    }return sum
}
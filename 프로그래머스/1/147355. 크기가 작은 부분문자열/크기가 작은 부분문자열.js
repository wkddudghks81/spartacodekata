function solution(t, p) {
    //p.length = 2, t = split, for i<t.length-1, t[i][i+1]
    //배열.splice(Index,number) Index 부터 Index 포함 숫자만큼 요소제거
    //p.length = 2, t = split,
    //(p.length,t.length-1)
    //(0,0),(p.length-1,t.length-1)
    //(0,1),(p.length-2,t.length-1)
    //(0,t.length-p.length)
    let emptyarr = []
    let array = t.split("")
    let count = 0
    // emptyarr.push(array.slice(0,p.length).join(""))
    // emptyarr.push(array.slice(1,p.length+1).join(""))
    // emptyarr.push(array.slice(2,p.length+2).join(""))
    // emptyarr.push(array.slice(3,p.length+3).join(""))
    // emptyarr.push(array.slice(4,p.length+4).join(""))
    // emptyarr.push(array.slice(5,p.length+5).join(""))
    
    for(i=0; i<array.length-p.length+1; i++){
        // emptyarr.push(array.slice(i,p.length+i).join(""))
        if(Number(array.slice(i,p.length+i).join(""))<=Number(p)){
            count++
        }
    }
    return count
}
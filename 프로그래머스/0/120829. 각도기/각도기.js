function solution(angle) {
    let a=0
    if(angle<90){
        return 1;
    }else if(90===angle){
        return 2;
    }else if(angle<180){
        return 3;
    }else if(angle===180){
        return 4;
    }
    return a
}
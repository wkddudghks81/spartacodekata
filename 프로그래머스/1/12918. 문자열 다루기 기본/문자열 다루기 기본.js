function solution(s) {
    var answer = true;
    let array = [...s]; // 문자열을 배열로 변환
    let numberarray = array.map(Number); // 배열의 각 요소를 숫자로 변환
    let count = 0; // NaN인 값의 개수를 셈

    // NaN 값이 있는지 확인
    for (let i = 0; i < numberarray.length; i++) { 
        if (isNaN(numberarray[i])) {
            count += 1;
        }
    }

    // 문자열의 길이가 4 또는 6이 아니면 count를 증가
    if (numberarray.length !== 4 && numberarray.length !== 6) {
        count += 1;
    }

    // count가 0보다 크면 false, 0이면 true 반환
    if (count > 0) {
        return false;
    } else {
        return true;
    }
}
function solution(number) {
    let count = 0;
    // 첫 번째 학생 번호 선택
    for (let i = 0; i < number.length - 2; i++) {
        // 두 번째 학생 번호 선택 (첫 번째 이후)
        for (let j = i + 1; j < number.length - 1; j++) {
            // 세 번째 학생 번호 선택 (두 번째 이후)
            for (let k = j + 1; k < number.length; k++) {
                // 세 학생 번호의 합이 0인지 확인
                if (number[i] + number[j] + number[k] === 0) {
                    count++; // 삼총사 발견 시 카운트 증가
                }
            }
        }
    }
    return count; // 삼총사 조합의 수 반환
}
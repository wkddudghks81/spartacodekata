function solution(s) {
    // 각 문자의 마지막 위치를 저장할 객체
    const lastSeen = {};
    const result = [];

    // 문자열의 각 문자를 순회
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastSeen[char] !== undefined) {
            // 이전에 등장한 적이 있다면 현재 위치와의 거리 계산
            result.push(i - lastSeen[char]);
        } else {
            // 처음 등장한 문자라면 -1 추가
            result.push(-1);
        }

        // 현재 문자의 위치를 갱신
        lastSeen[char] = i;
    }

    return result;
}
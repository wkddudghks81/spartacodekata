function solution(strings, n) {
    strings.sort((a, b) => {
        // 인덱스 n의 문자 비교
        if (a[n] === b[n]) {
            // n번째 문자가 같다면 사전순 비교
            return a.localeCompare(b);
        }
        // n번째 문자를 기준으로 비교
        return a[n].localeCompare(b[n]);
    });
    return strings;
}
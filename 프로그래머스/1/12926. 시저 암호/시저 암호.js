function solution(s, n) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // 공백 처리
        if (char === ' ') {
            result.push(' ');
        } 
        // 대문자 처리
        else if (char >= 'A' && char <= 'Z') {
            // 대문자 범위 내에서 이동
            result.push(String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65));
        } 
        // 소문자 처리
        else if (char >= 'a' && char <= 'z') {
            // 소문자 범위 내에서 이동
            result.push(String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97));
        } 
        // 알파벳이 아닌 경우 처리 (여기선 그냥 원래 문자 유지)
        else {
            result.push(char);
        }
    }
    
    return result.join('');
}

function solution(s) {
    const numberWords = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };
    
    // 각 영단어를 찾아 숫자로 변환
    for (let word in numberWords) {
        s = s.replace(new RegExp(word, 'g'), numberWords[word]);
    }
    
    // 변환된 숫자 문자열을 반환
    return Number(s);
}
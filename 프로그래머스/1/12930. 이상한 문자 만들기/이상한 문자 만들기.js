function solution(s) {
    return s
        .split(" ") // 문자열을 공백 기준으로 나눠서 단어 배열로 만듭니다.
        .map(word => {
            // 각 단어에 대해 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환합니다.
            return word
                .split("")
                .map((char, index) => 
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                )
                .join(""); // 변환된 문자들을 다시 합쳐서 하나의 단어로 만듭니다.
        })
        .join(" "); // 변환된 단어들을 공백으로 구분하여 다시 문자열로 만듭니다.
}
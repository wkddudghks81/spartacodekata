function solution(a, b, n) {
    // 현재 손에 있는 콜라 병의 개수
    let hands = n;
    // 총 얻은 콜라 병의 수
    let store = 0;

    while (hands >= a) {
        // 교환 가능한 콜라 병 수
        let exchanged = Math.floor(hands / a) * b;
        // 총 얻은 콜라 수에 추가
        store += exchanged;
        // 남은 병은 교환하고 남은 병 + 새로 얻은 병
        hands = (hands % a) + exchanged;
    }

    return store;
}
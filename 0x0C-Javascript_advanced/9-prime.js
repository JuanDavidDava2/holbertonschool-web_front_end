function countPrimeNumbers() {
    let Prime;
    let counts = 0;
    for (let i = 2; i <= 100; i++) {
        Prime = true;
        let end = Math.round(Math.sqrt(i));
        for (let mod = 2; mod <= end; mod++) {
            if (i % mod == 0) {
                Prime = false;
                break;
            }
        }
        if (Prime) {
            counts = counts + 1;
        }

    }
    console.log(counts);
    return counts;
}

let start = window.performance.now();
countPrimeNumbers();
let end = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.");
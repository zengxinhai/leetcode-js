/**
* 1 + 2 + 3 + 4 .. + N = N(N+1) / 2
* Choose some of the numbers to be negatives.
* Take 3 and 4 for example
* 1 + 2 - 3 - 4 .. + N = N(N+1) / 2 - 3 - 4 - 3 - 4 (Note: subtract twice)
* We want this number to be equal to our target.
* Thus,
* N(N+1)/2 - 2 * x = target
* N(N+1) - 2 * target = 4 * x
* Here x can be any number since we can choose form 1 to N, and any other combinations
* The problem becomes find minimal i that
* (i(i+1) - 2 * target) MOD 4 = 0, where i <= N and i(i+1) >= 2 * target
*/


const reachNumber = (target) => {
    // The result only relates to the absolute value 
    target = Math.abs(target);
    
    // Start from the minimum situation
    let leastPossibleStep = Math.floor(Math.sqrt(target * 2));
    let finalStep = leastPossibleStep;
    
    // according to the analysis, we find the minimal step number
    let remain = finalStep * (finalStep + 1) - target * 2;
    while (remain % 4 !== 0 || remain < 0) {
        finalStep++;
        remain = finalStep * (finalStep + 1) - target * 2;
    }
    return finalStep;   
};

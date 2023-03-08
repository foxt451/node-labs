function digPow(n, p){
    // Created an array of n digits and array of p digits
    const digits = String(n).split('').map(Number);
    const power = [];
    // Result of raising n to power and final result that will be returned
    let powerResult = 0;
    let result = 0
    // pushing values to p array
    for (i = p; power.length < digits.length; i++){
      power.push(i);}
    // raising n to power p
    for (j = 0; j < digits.length; j++){
      powerResult += Math.pow(digits[j], power[j]);
    }
    // checking for the condition satisfaction
    if (powerResult % n === 0){
      result = powerResult / n;
    } else {
      result = -1;}
    return result
  }

console.log(digPow(695, 2));
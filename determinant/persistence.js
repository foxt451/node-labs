function persistence(num) {
  var count = 0;
  var temp;
  while (num >= 10) {
    temp = num % 10;
    do {
      num = Math.trunc(num / 10);
      temp = temp * (num % 10);
    } while (num >= 10);
    num = temp;
    count++;
  }
  return count;
}

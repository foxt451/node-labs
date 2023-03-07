function toCamelCase(str) {
  var arr = str.split("");
  str = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "-" || arr[i] === "_") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr.splice(i, 1);
    }
    str = str + arr[i];
  }
  return str;
}

1. Determinant.

Link to solution: https://www.codewars.com/kata/52a382ee44408cea2500074c/solutions/javascript?filter=me&sort=best_practice&invalids=false

Link to kata: https://www.codewars.com/kata/52a382ee44408cea2500074c

Task:
> Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

2. Persistent Bugger.

Link to solution: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript?filter=me&sort=best_practice&invalids=false

Link to kata: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

Task:
> Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.</br>
> For example (39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)).

3. Convert string to camel case.

Link to solution: https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript?filter=me&sort=best_practice&invalids=false

Link to kata: https://www.codewars.com/kata/517abf86da9663f1d2000003

Task:
> Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.</br>
> For example ("the-stealth-warrior" gets converted to "theStealthWarrior").

4. Playing with digits

Link to solution: https://www.codewars.com/kata/reviews/5552cffe7abf6e77eb000041/groups/64087050ecb6740001fee124

Link to kata: https://www.codewars.com/kata/5552101f47fc5178b1000050

Task:
> Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p, we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n. If it is the case we will return k, if not return -1
> For example (digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2)

5. Duplicate Encoder

Link to solution: https://www.codewars.com/kata/reviews/54dd632b04bd8bc1a2000014/groups/64094407f645f20001db6a37

Link to kata: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

Task:
> The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

## Відповіді на запитання
1. Так, є. В браузері доступні функції і обʼєкти, які недоступні в Node.js і навпаки.
2. undefined, null, boolean, number, bigint, string, symbol, object.
3. Уявімо, що у нас є функція "А", яка повертає іншу функцію "Б". Сенс замикання(closure) можна пояснити наступним чином: функція "Б" має доступ до локальних змінних, що знахлдяться у області видимості функції "А".
4. Стандартні бібліотеки Node.js:
    * crypto (для криптографічних функції);
    * HTTP (для підтримки функції протоколу HTTP);
    * fs (для роботи з файловою системою);
    * path (для роботи з шляхами файлів);
    * readline (для читання даних);
    * stream (для роботи з потоковими даними);
    * errors (для роботи з помилками);
5. Приклад: import fs from 'node:fs/promises';
6. Chrome використовує двигуни JavaScript, які початково були розроблені для Node. "Node is a runtime built on Chrome’s V8 JavaScript engine. It is basically writing JavaScript for the server side"
7. Синтаксис: exports.*variable name* = *variable name*

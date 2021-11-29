function rgb(r, g, b) {
  let decimalsToHex = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F'
  };
  let hex = '';
  [r, g, b].forEach((tint) => {
    if (tint < 0) tint = 0;
    if (tint > 255) tint = 255;
    // Take the number and divide it by 16
    // The result droped rounded down to the closest integer is the corresponding hexadecimal (if same or larger to 15, the value is F) as the first value
    hex += decimalsToHex[(tint/16) - ((tint % 16) / 16)];
    // Take the decimal remainder of the division multiply it by 16
    // The result corresponds to the second value in hexadecimal
    hex += decimalsToHex[(tint % 16)];
  });
  return hex;
}


console.log(rgb(0, 0, 0) === '000000');
console.log(rgb(0, 0, -20) === '000000');
console.log(rgb(300, 255, 255) === 'FFFFFF');
console.log(rgb(173, 255, 47) === 'ADFF2F');

/* Decimals to Hexadecimals
0 = 0
1 = 1
2 = 2
3 = 3
4 = 4
5 = 5
6 = 6
7 = 7
8 = 8
9 = 9
10 = A
11 = B
12 = C
13 = D
14 = E
15 = F
*/
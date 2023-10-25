//Exercise

// let a = [24, 22, [7, [84, 99]], [3, 1, 6], [0, 8, [4, 5]]];
// alert(a[3][1] + a[4][2][1] * a[3][0] + a[2].length);//18


//Reverse

// let a = ['Poghos', 'Hakob', 'Petros', 'Aram', 'Valod'];
//
// let i = 0,
//   i2 = a.length - 1;
//
// while (i < a.length / 2) {
//   let d = a[i];
//   a[i] = a[i2];
//   a[i2] = d;
//
//   i = i + 1;
//   i2 = i2 - 1;
// }
//
// alert(a);

//Bool exercise

// let y = 66;
// let x = 5;
// let z = 9, a = y + x;
// let o = [y * 2];
// o[x] = 4;
//
// alert(((!!!(z === 1 + 3 * 2 + (5 % 2))) && !(o[0] === 662)) || (x * y < 100 && o.length >= 6)); //true


// let f = function (num) {
//   return num * 2;
// };
//
// let x = [
//   {
//     y: [f(1), f(10)]
//   },
//   {
//     z: {
//       a: {
//         b: [f(7), f(9)]
//       },
//       c: {
//         z: [f(20), f(12), f(21)]
//       }
//     }
//   },
//   20, [
//     [7, 5, 2]
//   ],
//   f
// ];
//
// alert(x[0].y[1] + x[3][0][2] + x[2] + x[4](5)); //52


// let a = [3, 7, 2, 4];
// let f = function (a) {
//   return a + 2;
// }
//
// let z = 0
// a.forEach(function (val) {
//   z = z + f(val) + 2;
// });
//
// let f2 = function (d) {
//   return f(d) + f(d);
// };
//
// let f3 = function (d) {
//   return f2(d) + 1;
// };
//
// alert(f(f3(f2(z))));

// let y = 10;
//
// let div = function (t, s) {
//   return t / s;
// };
//
// let dip = function (y, zoo) {
//   return zoo(y) * zoo(y);
// }
//
// let yup = function () {
//   return div(y, 2)
// };
//
// let d = dip(4, yup);
//
// alert(d);//25

// function reduce(arr, fun, aggro) {
//   arr.forEach(function (val, i) {
//     if (i === 0 && aggro === undefined) {
//       aggro = val;
//     } else {
//       aggro = fun(aggro, val, i);
//     }
//   });
//   return aggro;
// }
//
// alert(reduce([5, 999, 10, 77, 1000, 2], function (aggro, val) {
//   return Math.max(aggro, val);
// }));


// function getAvgAgeByColor(arr, hairColor) {
//   let filteredArray = arr.filter(function (obj) {
//     return obj.hairColor === hairColor;
//   });
//
//   let totalAge = filteredArray.reduce(function (aggro, obj) {
//     return aggro + obj.age;
//   }, 0)
//
//   return totalAge / filteredArray.length;
// }
//
// alert(getAvgAgeByColor([
//   { name: 'Joe', age: 13, hairColor: 'red' },
//   { name: 'Mike', age: 10, hairColor: 'brown' },
//   { name: 'Jane', age: 5, hairColor: 'red' },
//   { name: 'Susan', age: 30, hairColor: 'brown' },
// ], 'red'));


// function getPersonWithMostFriendsByName(people, friendName) {
//   let filteredPeople = people.map(function (personObj) {
//     return {
//       name: personObj.name,
//       count: personObj.friends.filter(function (friendObj) {
//         return friendObj === friendName
//       }).length
//     }
//   })
//   const max = filteredPeople.reduce(function (aggro, obj) {
//     if (aggro === undefined) {
//       return obj;
//     }
//     if (obj.count > aggro.count) {
//       return obj;
//     }
//     return aggro;
//   }, undefined)
//   return max.name;
// }
//
// alert(getPersonWithMostFriendsByName([
//   {
//     name: 'Job',
//     friends: [
//       { name: 'Susan', age: 15 },
//       { name: 'Jack', age: 18 },
//       { name: 'Sona', age: 22 },
//     ],
//   },
//   {
//     name: 'Susan',
//     friends: [
//       { name: 'Job', age: 10 },
//       { name: 'Jac', age: 26 },
//       { name: 'Anna', age: 30 },
//     ],
//   },
//   {
//     name: 'Sona',
//     friends: [
//       { name: 'Gev', age: 45 },
//       { name: 'John', age: 55 },
//       { name: 'Susan', age: 10 },
//     ],
//   },
// ],'Job'));

// function toNumber(binaryStr) {
//   return binaryStr.split('')
//     .reverse()
//     .map(function (val, i) {
//       if (val === '1') {
//         return Math.pow(2, i)
//       }
//       return 0;
//     }).reduce(function (aggro, val) {
//       return aggro + val
//     }, 0)
// }
//
// alert(toNumber('100101'));


// function find(arr, searchText) {
//   return arr.filter(function (obj) {
//     const values = Object.values(obj);
//     for (let i = 0; i < values.length; i++) {
//       if (("" + values[i]).search(searchText) !== -1) {
//         return true;
//       }
//     }
//     return false;
//   });
// }
//
// alert(JSON.stringify(find([
//   { title: 'White Fang', author: 'Jack London' },
//   { title: 'The Adventures of Tam Sawyer', author: 'Mark Twain' },
// ], 'Twain')));

// function magic(obj) {
//   return Object.keys(obj).reduce(function (aggro, key) {
//     aggro[obj[key]] = key;
//     return aggro;
//   }, {});
// }
//
// alert(JSON.stringify(magic({
//   firstName: 'Michael',
//   lastName: 'Jackson',
// }), undefined, 2));


// function pow(num1, num2) {
//   let result = num1;
//   while (num2 > 1) {
//     result *= num1;
//     num2--;
//   }
//   return result;
// }
//
// alert(pow(5, 4));


function reverse(num) {
  const numStr = '' + num;
  const newReversNumber = numStr.split('').reverse().join('');

  return +newReversNumber;
}

alert(reverse(123));

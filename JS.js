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


// function reverse(num) {
//   const numStr = '' + num;
//   const newReversNumber = numStr.split('').reverse().join('');
//
//   return +newReversNumber;
// }
//
// alert(reverse(123));


// function alertFreq(str) {
//   const obj = str.split("").reduce(function (aggro, val) {
//     if (aggro[val] === undefined) {
//       aggro[val] = 1;
//     } else {
//       aggro[val]++;
//     }
//     return aggro;
//   }, {});
//   Object.keys(obj).forEach(function (key) {
//     alert(`${key} : ${obj[key]}`);
//   })
// }
//
// alertFreq('hello-world');

// function max(arr) {
//   let maxValue = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     const val = arr[i];
//     if (val > maxValue) {
//       maxValue = val;
//     }
//   }
//   return maxValue
// }
//
// alert(max([5, 10, 33, 45, 400]));

// function forEach(arr, func) {
//   function loop(i) {
//     if (i >= arr.length) {
//       return;
//     }
//     func(arr[i], i);
//     loop(i + 1);
//   }
//
//   loop(0);
// }
//
// forEach([5, 4, 3], function (val, i) {
//   alert(val + ' at index ' + i)
// });


// function pow(x, y) {
//   if (y === 0) {
//     return 1;
//   }
//   return x * pow(x, y - 1);
// }
//
// alert(pow(5, 3));

// function sum(arr) {
//   return arr.reduce(function (aggro, val) {
//     if (Array.isArray(val)) {
//       return aggro + sum(val);
//     }
//     return aggro + val;
//   }, 0);
// }
//
// alert(sum([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9]));


// const a = {
//   age: 25,
//   foo: function (arr) {
//     arr.forEach(function (val) {
//       alert(this.age + val);
//     }.bind(this));
//   },
// }
//
// a.foo([22]);


// function zoo() {
//   alert(this.age)
// }
//
// const b = {
//   age: 44,
// }
//
// const a = {
//   age: 23,
//   foo: zoo.bind(b),
// }
//
// a.foo();

// const a = {
//   name: 'John',
//   f: function () {
//     alert(this.name);
//   }
// }
//
// const b = {
//   name: 'Mike',
// }
//
// a.f.call(b);

// function Person() {
//   this.name = 'Nike';
//   this.age = 28;
// }
//
// const a = new Person();
// alert(JSON.stringify(a, undefined, 2));


// const a = {
//   age: 22,
//   name: 'John',
//   getName: function () {
//     return this.name;
//   },
//   getAge: () => this.age,
// }
//
// alert(a.getName());
// alert(a.getAge());

// const f = () => this.name;
//
// const a = {
//   name: 'Mike',
// }
//
// alert(f.call(a))


// let a = [5, 40, 29, 44, 33];
//
// function transform(arr) {
//   return arr.map(val => val + 1).filter(val => val % 2 === 0);
// }
//
// alert(transform(a));

//
// let x = 7;
//
// function a(y) {
//   return x + y;
// }
//
// function b(z) {
//   let x = 99;
//   return z(4);
// }
//
// alert(b(a));

//
// function a(x) {
//   return (y) => x + y;
// }
//
// alert(a(2)(4));

// function Cat() {
//   let numLives = 7;
//   let name = 'Jack';
//
//   this.age = 5;
//   this.getName = () => {
//     return name;
//   };
//   this.getAge = () => {
//     return this.age;
//   };
//   this.catDies = () => {
//     return numLives--;
//   };
//   this.isDead = () => {
//     return numLives <= 0;
//   };
// }
//
// let a = new Cat();
// a.catDies();
// a.catDies();
// a.catDies();
// a.catDies();
// alert(a.isDead());
// a.catDies();
// a.catDies();
// a.catDies();
// alert(a.isDead());
// alert(a.getName());
// a.age = 99;
// alert(a.age);


// function job(state) {
//   return new Promise(function(resolve, reject) {
//     if (state) {
//       resolve('success');
//     } else {
//       reject('error');
//     }
//   });
// }
//
// job(true).then(function(data) {
//   console.log(data);
//   return job(true);
// }).then(function(data) {
//   if (data !== 'victory') {
//     throw 'Defeat';
//   }
//   return job(true);
// }).then(function(data) {
//   console.log(data);
// }).catch(function(error) {
//   console.log(error);
//   return job(false);
// }).then(function(data) {
//   console.log(data);
//   return job(true);
// }).catch(function(error) {
//   console.log(error);
//   return 'Error caught';
// }).then(function(data) {
//   console.log(data);
//   return new Error('test');
// }).then(function(data) {
//   console.log('Success:', data.message);
// }).catch(function(data) {
//   console.log('Error:', data.message);
// });

// function sumPairExists(a, b, v) {
//   const obj = b.reduce(function (aggro, value) {
//     aggro[value] = true;
//     return aggro;
//   }, {});
//
//   for (let i = 0; i < a.length; i++) {
//     const target = v - a[i];
//     if (obj[target] === true) {
//       return true
//     }
//   }
//   return false;
// }
//
// alert(sumPairExists([4, 2, 5, 60, 10, 915], [67, 12, 0, 2, 1, 0], 22));

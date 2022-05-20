---
title: Fat Arrow () => Fonksiyonu Kullanımı (Arrow Function)
sidebar_position: 8
---

JavaScript'te fonksiyonları tanımlamanın birçok yolu vardır.

Bunlardan birincisi **function** keyword'ünü kullanarak yazdığımız fonksiyonlardır.

```javascript
// Function declaration
function greet(who) {
  return `Hello, ${who}!`;
}
greet("John") // output : Hello, John!

// Function expression
const greet = function(who) {
  return `Hello, ${who}!`;
}
greet("John") // output : Hello, John!
```

İkincisi ES6 ile kullanılmaya başlanan **Arrow Fonksiyon** gösterimi. Aynı zamanda Fat Arrow Fonksiyon da deniliyor. Bunlar daha az kod satırı ile fonksiyonu yazmamıza olanak sağlıyor. Üstte yazdığımız örneği bir de Arrow Fonksiyonu olarak yazmayı deneyelim.

```javascript
const greet = (who) => `Hello, ${who}!`;
```

Bu şekilde daha az kod satırı ile fonksiyonu yazdık. Aynı zamanda eğer bir tane parametre varsa;

```javascript
const greet = who => `Hello, ${who}!`;
```

Parametreyi kapsayan parantezleri de kaldırabiliriz.

**Başka örnekler yazarak pekiştirelim.**

* **Örnek 1**

```javascript
// ES5
var toplam = function(x, y) {
  return x + y;
};

// ES6
let toplam = (x, y) => x + y ;
```

* **Örnek 2**

```javascript
// ES5
var sayi = function(x) {
    return x*x
};

// ES6
let sayi = x => x*x;
```

* **Örnek 3**

```javascript
// ES5
var multiplier = function(item, multi) {
    return item * multi
};
multiplier(5, 2); // output : 10

// ES6
const multiplier = (item, multi) => item * multi;
multiplier(5, 2); // output : 10
```

* **Örnek 4**

```javascript
//ES5
var myList = function(param1, param2) {
  return param1.concat(param2);
};
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

//ES6
const myList = (param1, param2) => param1.concat(param2);
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
```

**Arrow fonksiyon kullanırken dikkat etmemiz gereken bazı durumlar vardır.**

"return" keyword;

* Statement'lar süslü{ } parantez kullanılarak yazılırlar. Eğer fonksiyon içerisinde bu parantezlerden varsa return keyword'ü kullanmamız gerekir. Bir if Statement'i kullanılan bir arrow fonksiyonu yazalım.

```javascript
var feedTheCat = (cat) => {
    if (cat === 'hungry') {
      return 'Feed the cat';
    } else {
      return 'Do not feed the cat';
    }
}
```

"this" keyword;

* this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri her zaman parent fonksiyonuna eşittir. Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.

```javascript
let movie = {

name: "La la land",

thisInArrow:() => {
console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
},

thisInRegular(){
console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
}

};
movie.thisInArrow(); // output : Movie name is
movie.thisInRegular(); // output : Movie name is La la land
```

## Kaynaklar

[patika.dev](https://app.patika.dev/courses/javascript/fat-arrow-fonksiyonu-kullanimi)

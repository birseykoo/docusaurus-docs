---
title: Js Değişkenler ve Veri Tipleri
sidebar_position: 1
---

## Değişkenler

Öncelikle değişken nedir? Neden kullanılır? Nasıl tanımlanır ve hangi keywords nasıl kullanılır bunları inceleyelim.

Değişkenler yer tuttutucu olarak tanımlanabilir. Tanımlanan veri tiplenirini veya gelen verileri aklımızda tutmak yorucudur bunun yerine onları ismini bizim belirlediğimiz bir yapıda tutarız bunlara değiken denir.

Örneğin elimizde olan bir sayıyı sürekli kullanmak istediğimizde ve bunun gibi bir çok sayı ve/veya isim gibi veriler olduğunda onları değişken olarak tanımlayabiliriz.

Değişken tnaımlanırken ingilizce karakterler kullanmaya dikkat edilmelidir.

Değişkenlere detaylı incelemeden önce kısa bir örnek vermek gerekirse kullanıcıdan bir sayı almak istediğimizde bu sayıy bir değişken içerisinde saklayıp daha sonra kullanmak üzere onu çağırabiliriz.

```javascript
var isim = window.prompt("Lütfen adınızı giriniz.");
```

Burada windows.promt parametrelerine takılmayalım.

Kullanıcıdan bir isim girmesini istiyoruz. Bu isim değişkenimize atanacaktır. Burada var keyword'ünü kullanıyoruz. Girilen veri ve/veya değeri **isim** olarak adlandırdığımız değişkene atamış oluyoruz.

```javascript
console.log(isim);
```

Bu ifade ekrana yazdırmak için kullanılır. Burada isim değikeni içine atanmış olan bilinmeyen ifadeyi ekrana yazdırmış oluyoruz. değikenleri bu şekilde kullanmış oluyoruz.

## var Anahtar Kelimesi

**var** keyword’ü ile değişkenler tekrar tanımlanabilir ve değerleri güncellenebilir.

Örneğin:

```javascript
var isim = "Ahmet";
var isim = "Mehmet";
```

Burada isim değişkeni iki kez tanımlanmıştır. İlk değer Ahmet olarak tanımlanmıştır. İkinci değer Mehmet olarak tanımlanmıştır.
Değişkeni kullanmak istediğinizde atanan son değer **Mehmet** olarak kullanılır.

## let Anahtar Kelimesi

**let** ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz.

Örneğin:

```javascript
let isim = "Ahmet";
isim = "Mehmet";
```

Burada **let isim =** iknci defa kullanmaya çalıştığımızda hata alırız. Fakat **isim =** olarak tanımlayarak değerini değiştirebiliriz.

## const Anahtar Kelimesi

**const** ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz.

```javascript
const isim = "Ahmet";
isim = "Mehmet";
```

Burada TypeError hatası alırız. const ile atanan değişkenin değeri değiştirilemez.

## Js İsimlendirme Kuralları

JavaScript'de değişkenler büyük küçük harfe duyarlıdırlar.

```javascript
var Name = "Michael Phelps";
var NAME = "Yulaf Ezmesi";
```

Burada iki değişkende farklıdır.
Tanımlayacağımız değişkenler yeterince açık olmalı. Değişkeni tanımladıktan sonra herhangi bir açıklama yapmak durumunda kalmamalıyız.

### Değişkenler İsimlendirme Kuralları

- İsimler büyük/küçük harf duyarlıdır, küçük harf ve büyük harf farklıdır.
- Değişken adlarına bir harfle başlayın, camelCase adlar için kullanın.
- Değişken adları, saklanan değeri tanımlayan, kendi kendini açıklayıcı olmalıdır.
- Mantıksal değişkenler; is, are, veya has gibi ön isimlerle daha anlamlı olabilir.

```javascript
// kötü
var value = "Mert";
// kötü
var val = "Mert";
// iyi
var firstName = "Mert";

// kötü
var firstname = "Mert";
// kötü
var first_name = "Mert";
// kötü
var FIRSTNAME = "Mert";
// kötü
var FIRST_NAME = "Mert";
// iyi
var firstName = "Mert";

// kötü
var visible = true;
// iyi
var isVisible = true;
// kötü
var equal = false;
// iyi
var areEqual = false;
// kötü
var encryption = true;
// iyi
var hasEncryption = true;
```

### Funksiyon İsimlendirme Kuralları

- İsimler büyük/küçük harf duyarlıdır, küçük harf ve büyük harf farklıdır.
- İşlev adlarını bir harfle başlatın, camelCase adlar için kullanın.
- Tanımlayıcı adlar kullanın, genellikle emir kipindeki fiiller.
- Yaygın önekler get, make, applyvb.
- Sınıf yöntemleri aynı kuralları takip eder.
- JavaScript, C# veya Java gibi diğer programa dillerine benzer veri tiplerini içerir. Genel olarak iki veri türü olarak sınıflandırabiliriz;

Fonksiyonlar da değişkenler gibi camelCase kullanarak yazılır. Bir fonksiyonu isimlendirirken o fonksiyonun aksiyonunu da ön tarafında belirtmelisiniz. Önüne gelen ek, fonksiyonunuzu anlamlı kılan herhangi bir şey olabilir. Örneğin: get, fetch, push, apply, calculate, compute, post.

```javascript
// kötü
function product(productId) {
  return `${productId} ${productName}`;
}
// iyi
function getProduct(productId) {
  return `${productId} ${productName}`;
}
```

### Class(Sınıf) İsimlendirme Kuralları

- İsimler büyük/küçük harf duyarlıdır, küçük harf ve büyük harf farklıdır.
- Sınıf adlarına büyük harfle başlayın, PascalCase adlar için kullanın.
- Sınıfın işlevselliğini açıklayan tanımlayıcı adlar kullanın.
- Ön uç çerçevelerinde kullanılan bileşenler aynı kuralları takip eder.

```javascript
class FrontentDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let me = new FrontentDeveloper("Mert", "Certel");
```

### Component İsimlendirme Kuralları

Componentler vanilla JavaScript kullanırken pek karşımıza çıkmasa da frontend frameworklerinde oldukça karşımıza çıkmakta (React, Vue, Svelte). Bu componentleri tanımlarken sınıflarda olduğu gibi Pascal Case kullanmamız gerekiyor.

```javascript
// kötü
function userProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}
// iyi
function UserProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}
```

### Method İsimlendirme Kuralları

Method kısmına geçmeden önce sık yapılan method ve fonksyion karışıklığına ufak da olsa değinmek istiyorum. Fonksiyon : Herhangi bir değer dönebilir. Class'ın bir parçası değildir. Method : Fonksiyona çok benzer ama Class'ın bir parçasıdır. Genelde object-oriented programlamada kullanılır. Methodlar, classlar içinde yaşadıkları için PascalCase'den farklı olarak camelCase yazım biçimi tercih edilmelidir. Kendisini ifade edibilmesi için de aksiyonunu belli edecek önisimler kullanılmalı.

```javascript
class FrontentDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
var me = new FrontentDeveloper("Mert", "Certel");
console.log(me.getName());
// "Mert Certel"
```

### Private Class İsimlendirme Kuralları

Bazı değişken ya da methodlarımızı class içersinde izole etmek isteyebiliriz. Bu değişken ya da methodların yazımında \_ kullanılır.

```javascript
class Person {
  constructor(name) {
    var _name = name;
    this.setName = function (name) {
      _name = name;
    };
    this.getName = function () {
      return _name;
    };
  }
}
```

### Sabitler İsimlendirme Kuralları

Sabit değişkenler için büyük harf kuralı uygulanır. Bu sabit tanımlanırken const keyword'u ile tanımlanır. const ile atanan bir değer hiç bir şekilde değiştirilemez. Eğer başka bir değer atamaya yada veri tipini değiştirmeye kalkarsanız size aşağıdaki gibi bir uyarı vercektir.

```javascript
const CONSTANT = "sabit";
constant = "sabit değil";
// Uncaught TypeError: Assignment to constant variable.
```

### Global Değişkenler İsimlendirme Kuralları

Global değişkenler tüm projede erişilebilir olan değişkenlerdir. Proje dizin yapısında en üstte bulunmalıdırlar. Eğer değiştirilebilir bir global değişken atıyor isek camelCase, eğer değiştirilmesini istemediğimiz bir değişken atıyor isek UPPERCASE kuralına uyarak isimlendirmeliyiz.

```javascript
const DOMAIN_NAME = "https://localhost:9001";
let state = "now";
```

### Objeler İsimlendirme Kuralları

Obje propertylerinde isimlendirme yaparken camelCase olmasına dikkat edilmesi objeleri daha okunaklı hale getiriyor.

```javascript
// kötü
var person = {
  "first-name": "Mert",
  "last-name": "Certel",
};
var firstName = person["first-name"];
// iyi
var person = {
  firstName: "Mert",
  lastName: "Certel",
};
var firstName = person.firstName;
```

Kaynak:

[JavaScript İsimlendirme Kuralları](https://www.mertcertel.com/post/javascript-isimlendirme-kurallari)

[JavaScript naming conventions](https://www.30secondsofcode.org/articles/s/javascript-naming-conventions)

## Veri Türleri

1- İlkel (Primitive) Veri Türleri:

- String
- Number
- Boolean
- Undefined
- Null
- Symbol

2- İlkel Olmayan (Reference) Veri Türü:

- Object
- Array
- Function

Şimdi Detaylı Bir inceleme yapalım.

### String

Metinsel Veri Türü.

```javascript
const name = "Mert";
const surname = "Certel";
const fullName = name + " " + surname;
console.log(fullName);
// "Mert Certel"
```

Tek veya çift tırnak içerisinde kullanılabilir.

```javascript
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = "Volvo XC60"; // Single quotes
```

Dizeyi çevreleyen tırnak işaretleri ile eşleşmedikleri sürece, bir dize içinde tırnak işaretleri kullanabilirsiniz:

```javascript
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

Bir dizenin uzunluğunu bulmak için yerleşik **length** özelliği kullanın:

```javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
// 26
```

JavaScript'te diğer altı kaçış dizisi geçerlidir:

| Code | Result               |
| ---- | -------------------- |
| \b   | Backspace            |
| \f   | Form Feed            |
| \n   | New Line             |
| \r   | Carriage Return      |
| \t   | Horizontal Tabulator |
| \v   | Vertical Tabulator   |

### Number

Sayılar ondalıklı veya ondalıksız yazılabilir. Örneğin:

```javascript
const number1 = 10;
const number2 = 10.5;
const number3 = 0.5;
const number4 = -10;
const number5 = -10.5;
```

Çok büyük veya çok küçük sayılar bilimsel (üslü) gösterimle yazılabilir:

```javascript
const number1 = 1e6;
const number2 = 1e-6;
```

### Boolean

Çoğu zaman, programlamada, aşağıdaki gibi iki değerden yalnızca birine sahip olabilen bir veri türüne ihtiyacınız olacaktır.

- YES / NO
- ON / OFF
- TRUE / FALSE

Bunun için JavaScript'in bir Boolean veri türü vardır. Yalnızca true veya false değerlerini alabilir.

#### Karşılaştırmalar ve Koşullar

JS Karşılaştırmaları bölümü, karşılaştırma operatörlerine tam bir genel bakış sunar.

JS Koşulları bölümü, koşullu ifadelere tam bir genel bakış sunar.

İşte bazı örnekler:

|Operator|Description|Example|
|-|-|-|
|==|equal to|if (day == "Monday")|
|>|greater than|if (salary > 9000)|
|`<`|less than|if (age `<` 18)|

### Undefined

undefined özelliği, bir değişkene bir değer atanmadığını veya hiç bildirilmediğini gösterir.

```javascript
let x;
if (x === "undefined") {
  text = "x is undefined";
} else {
  text = "x is defined";
}
// text = "x is undefined"
```

### Null

**null**, herhangi bir nesne değerinin kasıtlı olarak yokluğunu temsil eder.

```javascript
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels('sky'));
// expected output: 0
```

### Symbol

JavaScript ES6 , adı verilen yeni bir ilkel veri türünü tanıttı Symbol. Semboller değişmezdir (değiştirilemez) ve benzersizdir. Örneğin,

```javascript
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false
```

Rağmen değer1 ve değer2 ikisi de aynı açıklamayı içerir, farklıdırlar.

### Object

Gerçek hayatta, araba bir nesnedir .

Bir arabanın ağırlık ve renk gibi özellikleri ve çalıştırma ve durdurma gibi yöntemleri vardır:

Tüm arabalar aynı özelliklere sahiptir , ancak özellik değerleri arabadan arabaya farklılık gösterir.

Tüm arabaların yöntemleri aynıdır , ancak yöntemler farklı zamanlarda gerçekleştirilir .

#### JavaScript Nesneleri

JavaScript değişkenlerinin veri değerleri için kapsayıcı olduğunu zaten öğrendiniz.

Bu kod, car adlı bir değişkene basit bir değer (Fiat) atar :

```javascript
let car = "Fiat";
```

Nesneler de değişkendir. Ancak nesneler birçok değer içerebilir.

Bu kod, car adlı bir değişkene birçok değer (Fiat, 500, beyaz) atar:

```javascript
const car = {type:"Fiat", model:"500", color:"white"};
```

Bir JavaScript nesnesini sabit bir nesne ile tanımlarsınız (ve yaratırsınız):

```javascript
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

Boşluklar ve satır sonları önemli değildir. Bir nesne tanımı birden çok satıra yayılabilir:

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

### Array

Dizi, birden fazla değer tutabilen özel bir değişkendir:

```javascript
const cars = ["Saab", "Volvo", "BMW"];
```

### Function

JavaScript işlevi, belirli bir görevi gerçekleştirmek için tasarlanmış bir kod bloğudur.

Bir JavaScript işlevi, "bir şey" onu çağırdığında (onu çağırdığında) yürütülür.

```javascript
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```

#### JavaScript Function Sözdizimi

Bir JavaScript işlevi, functionanahtar sözcük, ardından bir ad ve ardından parantez () ile tanımlanır.

İşlev adları harfler, rakamlar, alt çizgiler ve dolar işaretleri içerebilir (değişkenlerle aynı kurallar).

Parantezler virgülle ayrılmış parametre adlarını içerebilir:
( parametre1, parametre2, ... )

İşlev tarafından yürütülecek kod, küme parantezleri içine yerleştirilir: {}

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

İşlev parametreleri , işlev tanımında parantez () içinde listelenir.

İşlev bağımsız değişkenleri , çağrıldığında işlev tarafından alınan değerlerdir .

Fonksiyonun içinde, argümanlar (parametreler) yerel değişkenler gibi davranır.

## Verileri Birbirine Dönüştürme

Veri tiplerini strgin'e dönüştürmek için, toString() metodunu kullanırız.

```javascript
let x = 5;
let y = x.toString();
// y = "5"
```

veya

```javascript
x = String(5);
// x = "5"
x = String(4 + 4);
// x = "4+4"
x = String(false);
// x = "false"

x = String(new Date());
// x = "Tue Jun 07 2020 17:00:00 GMT+0300 (GMT+03:00)"

x = String(function myFunction() {console.log("Hello World!");});
```

Number veri tipini stringe dönüştürmek için, parseInt() ve parseFloat() metodlarını kullanırız.

```javascript
let x = "5";
let y = parseInt(x);
// y = 5
```

veya

```javascript
x = Number("5");
// x = 5
x = Number("4 + 4");
// x = NaN
x = Number("false");
// x = NaN
x = Number(new Date());
// x = NaN
x = Number(function myFunction() {console.log("Hello World!");});
// x = NaN
```

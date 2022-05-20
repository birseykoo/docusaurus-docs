---
title: Fonksiyon Nedir? Neden Kullanırız?
sidebar_position: 6
---

Fonksiyonlar adından anlaşılacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapılardır. Koda işlevsellik katmak için bunu sık sık kullanırız.

## Fonksiyonu Adlandırmak

* İlk olarak function ibaresinden sonra fonksiyon adı yazılır. Bir fonksiyonu adı varsa bunlara Normal-Adlandırılmış Fonksiyonlar (Regular/Named Functions) deriz.
* Burada önemli olan kodun okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmaktır, dahası bu bir işlevi belirttiği için fonksiyon adımız bir eylem olmalıdır. Bunun için bazı ön ekler kullanabiliriz.
* Örneğin değer almak istediğimiz bir fonksiyon adında ön ek olarak get kullanabiliriz.
* Bununla birlikte şunu da unutmamalıyız istendiğinde adı olmayan anonim bir fonksiyon da kullanılabilir.

## Fonksiyon Parametreleri ve Gövdesi

* Sonrasında parantezler içinde alacağı parametreler belirlenir. Parametre olması zorunlu olmadığı gibi fazla parametre geçmek kodun okunurluğunu bozabilir.
* Parametre alan fonksiyonları kullandığımız zaman o parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.
* Son olarak da süslü parantezleri açarak içine çalışmasını istediğimiz JavaScript kodunu eklenir. Bu JavaScript koduna fonksiyonun gövdesi- body denir.

![functions](https://raw.githubusercontent.com/learn-co-curriculum/cssi-2.3-functions/master/images/functions.png)

```javascript
function sayHello(name) { // name parametresi alır
  console.log('Hello ' + name);
}
sayHello('John'); // Çıktı : Hello John
```

## Değer Döndüren Fonksiyonlar

Bazen fonksiyonun geriye göndereceği değeri ekrana çıktı vermek yerine bir değişken ya da başka bir fonksiyonda daha sonra kullanmamız gerekebilir. Bu gibi durumlarda fonksiyon gövdesinde return ifadesini kullanırız.

```javascript
function addition(sayi1, sayi2) {
  return sayi1 + sayi2;
}

var add = addition(5, 10); // add değişkenine 15 değeri atanır
```

## Fonksiyon Kapsamı

JavaScript'de fonksiyon içinde tanımlamış olduğunuz değişkene fonksiyon dışındaki herhangi bir yerden erişemezsiniz. Çünkü o değişken tanımlandığı fonksiyonun kapsamındadır. Bu sebeple değişkenimiz o fonksiyon içinde kullanılan bir lokal değişkendir. Fakat tanımlanan fonksiyon tanımlandığı kapsamdaki diğer değişkenlere erişebilir. Yani fonksiyon kendi dışında tanımlanan fakat aynı kapsamda bulunduğu global değişkenlere de erişebilir. Aşağıda örneğini görerek bunu çok daha iyi anlayacağız:

```javascript
var sayi1 = 10;
var sayi2 = 20;
function addition()
{
  var sayi3 = 5; // lokal değişken
  return sayi1 + sayi2 + sayi3; // sayi1 ve sayi2 global değişkenleri ve sayi3 lokal değişkeni
}

function multiplication() {
    return sayi1 * sayi2;
    // Burada hata verir. başka bir değişken içinde tanımlanan local sayi 3 değişkeni kapsam dışında
}
```

## Callback Fonksiyonlar ve Asenkron Çalışma

Senkron dediğimiz kavram şunu ifade etmektedir: kodumuz yukarıdan aşağı doğru sırayla işlenir ve bir satırdaki işlem bitmeden bir sonraki satıra geçilmez. Asenkron yapıda ise fonksiyonların birbirlerini beklemelerine gerek yoktur. Uzun zaman ala veya farklı görevleri olan fonksiyonlar aynı anda çalışabilir. JavaScript asenkron yapıdaki bir programlama dilidir. Bunu anlamak için içinde setTimeout(parameter1, parameter2) fonksiyonunu kullanacağız. Bu fonksiyon gördüğünüz gibi iki parametre ile kullanılacak: ilk parametre çalışması istenen fonksiyonu, ikinci parametre ise ne kadar süre sonra çalışması istendiğini ifade ediyor. Örneğin 1000 yazılarak 1000 milisaniye yani 1 saniye gecikme sağlanıyor.

```javascript
function printScreen1 (){
    console.log(“İlk ekran çıktısı”);
}

 function printScreen2 (){
   setTimeout(function(){
console.log(“İkinci ekran çıktısı”)
}, 3000);
}

function printScreen3 (){
    console.log(“Üçüncü ekran çıktısı”);
}
printScreen1();
printScreen2();
printScreen3();
```

Çıktımız şu şekildedir:

```bash
İlk ekran çıktısı
Üçüncü ekran çıktısı
İkinci ekran çıktısı
```

Bunun sebebi asenkron çalışma yapısıdır. printScreen1 fonksiyonu çalıştıktan sonra printScreen2 fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır. Bu durumdan kurtulmak için callback kullanıyoruz denebilir. Callback fonksiyonlar başka bir fonksiyonu parametre olarak alan fonksiyonlardır. Yani aslında asenkron yapıda bile fonksiyonlar için bir çalışma sırası belirlememize yardımcı olur. Örneğin yukarıda verilen kodumuzun sırasıyla birinci, ikinci ve üçüncü çıktıları vermesini istiyoruz.

```javascript
function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }

 printScreen2(printScreen1, printScreen3);
```

Bu şekilde çıktımız nihayet istediğimiz gibi olacaktır.

Kod yazarken, kodun birçok yerinde aynı işi yapacak alt programlara (subprograms) ihtiyaç duyarız. Mesela, ziyaretçi siteye giriş yaptığında veya çıkış yaptığında bir mesaj göstermek isteriz.

Fonksiyonlar, programın ana bloklarıdır ve fonksiyonlar sayesinde kodu tekrar tekrar yazmadan, istediğimiz kadar çağırabiliriz. JavaScript'te built-in(dilin kendi içerisinde mevcut) fonksiyonlar olduğu gibi(mesela alert(parametre) ve prompt(parametre) built-in fonksiyonları) biz de kendi fonksiyonlarımızı oluşturabiliriz.

## Fonksiyon Bildirimi(Function Declaration)

Fonksiyon oluşturmak için fonksiyon bildirimi yapabiliriz. Mesela;

```javascript
function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
```

function anahtar kelimesini takiben fonksiyon ismi ve parantez içerisinde parametreler(virgülle ayrılacak şekilde) ve son olarak da süslü parantez içerisinde fonksiyonun içereceği kod(ki bu bölüme fonksiyonun gövdesi(body) denir.) sırasıyla fonksiyonu oluşturur.

```javascript
function isim(parametreler) {
...fonksiyonun gövdesi...
}
```

Yukarıda bildirdiğimiz mesajVer fonksiyonu ismiyle çağrılabilir:

```javascript
function mesajVer() {
alert( 'Herkese Merhabalar!' );
}
mesajVer();
mesajVer();
```

mesajVer() çağrısı fonksiyonu çalıştırır. Burada mesajı iki kere çağırdığımız için mesajı iki defa göreceğiz. Yukarıdaki örnekten de görüldüğü üzere; fonksiyonların ana amacı kodu tekrar yazmayı engellemektir. Eğer fonksiyonun vereceği mesajı değiştirmek istiyorsak, bunu sadece fonksiyonun içerisinde(bir kez) yapmamız yeterlidir.

## Geri Dönüş Değeri (Return Value)

Bir fonksiyon return anahtar kelimesi kullanılarak sıfır ya da bir döndürülebilir.

```javascript
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner.

function carp(sayi1, sayi2) {
sayi1 * sayi2;
};

result=carp(10,20); // undefined
```

Ek olarak "topla" fonksiyonu iki değerin toplamını geri döner. "carp" fonksiyonunda ise return anahtar kelimesi kullanılmadığı için geri dönüş değeri yoktur,dolayısıyla "undefined" döner.

```javascript
var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10,20);
var sonuc2 = topla(10,20); // geçersiz
```

## Fonksiyon İfadeleri (Function Expressions)

JavaScript bir değişkene fonksiyon atanmasına ve daha sonra bu değişkenin fonksiyon olarak kullanılmasına izin verir. Buna fonksiyon ifadeleri denir.

## Arrow Functions

Fonksiyon yaratmanın bir diğer yolu ise ES6 ile birlikte hayatımıza giren, daha okunabilir daha basit bir syntax yapısına sahip olan arrow functions yapısıdır.

```javascript
let func = (param1, param2, param3) => expression;
```

Yukarıdaki kod bloğu basitçe, bir param1,param2,param3 parametrelerini alan ve sağ taraftaki ifadeyi değerlendirip sonucunu döndüren bir fonksiyon oluşturur.

Aslında aşağıdaki kod bloğu ile aynı işi yapmamaktadır.

```javascript
let func = function (param1, param2, param3) {
  return expression;
};
```

Aşağıdaki kod bloğunu deneyip sonuçları görebilirsiniz.

```javascript
const carpim = (sayi1, sayi2) => sayi1 * sayi2;
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

console.log(carpim(3, 5));
```

Yukarıda yazdığımız fonksiyon , 2 tane parametre alıp, console.log içerisinde fonksiyonu çağırdıktan sonra parametrelerin çarpımlarının değerini döndürmektedir. Eğer sadece tek bir parametre alması gereken bir fonksiyon yazsa idik, mesela girilen değerin karesini döndüren bir fonksiyon, arrow function syntax'ini şu şekilde de yazabilirdik.

```javascript
const karesiniAl = (sayi) => sayi * sayi;
//Hiç parametre olmadığı zaman ise
const helloWorld = () => console.log('Hello World');
```

Bir koşula göre iki farklı fonksiyon çalıştırmanız gerektiğini düşünün. Dinamik olarak fonksiyon tanımlamayı aşağıdaki şekilde yapabiliriz.

```javascript
let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

const developer =
  experience < 5
    ? () => alert('Bir cok konuyu biliyorum')
    : () => alert('Hicbir sey bilmiyorum:)');

developer();
```

Bir satıra sığabilecek basitlikte olmayan fonksiyonlarımız için çok satırlı arrow function'ı şu şekilde yazabiliriz.

```javascript
// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
  let result = a + b;
  return result;
};
```

## Recursion

Direkt örnek vererek açıklamak gerekirse, yapmamız gereken bir task var diyelim ve biz bu task'i birden fazla parçaya ayırıp daha basit halde yazmak istersek veya bu task'ı aksiyon alacak bir fonksiyona ve bu task'i daha basit bir task'e dönüştürmek istersek veya belirli bir data yapısı ile ilgileniyorsak, recursion bu noktada bize yardımı dokunabilecek bir programlama pattern'idir diyebiliriz.

Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

```javascript
// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8
// recursion ile
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert(pow(2, 3)); // 8
```

Aslında burada biz pow fonksiyonunu 2 ye ayırıyoruz. Eğer n==1 ise işlem oldukça açık direkt bize x i verecek. Diğer türlü ise, fonksiyon n==1 olana kadar kendisini çağırıp en basit haline ulaşınca, bize sonucu döndürmektedir.

1. pow(2,4) = 2 * pow(2,3)
2. pow(2,3) = 2 * pow(2,2)
3. pow(2,2) = 2 * pow(2,1)
4. pow(2,1) = 2

Sonuç olarak recursion, bir fonksiyonu en basit haline kadar getiriyor. Sonuç en açık hale gelene kadar.

```javascript
//Aşağıdaki soruyu recursion ile arrow function ve if else clause kullanarak yeniden nasıl yazarız
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
```

[Recursion and stack](https://javascript.info/recursion)

## Variable Scope, Closure

Bir fonksiyonu istediğiniz bir an yaratabilir, başka bir fonksiyona parametre olarak girebilir ve yazdığımız programın çok farklı bir yerinde biz tekrar bu fonksiyonu çalıştırabiliriz. JavaScript function-oriented bir dil olduğundan bize bir çok özgürlük sağlar.

Bir fonksiyonun dışında tanımlanan değişkenlere erişebildiğiniz biliyoruz. Peki bir fonksiyonu biz yarattık ve global tanımlanan var x = 5 bu fonksiyon içerisinde eriştik ve kullandık diyelim. Peki bu değişkenin değeri daha sonra değişirse fonksiyon güncel olanı alacak mı veya biz bu fonksiyonu başka bir fonksiyona parametre olarak girdiğimiz zaman hala sağlıklı bir şekilde x e ulaşabilecek mi?

Not: JavaScript de biz bir değişken atarken 3 farklı yol kullanabiliyoruz. var ve modern olanlar(let,const). Bu bölümde modern olanlardan konuşacağız.

### Code Blocks

Eğer bir değişkeni bir code bloğu içerisinde tanımlarsak {...}, o değişken sadece bu code block arasında ulaşılabilir olur.

```javascript
//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}
console.log(message); // ??
//Deneyip sonuçları görebilirsiniz.
{
  let message = 'Merhaba';
  console.log(message);
}

{
  let message = 'Hello';
  console.log(message);
}
// Kod blokları kullanmadan da deneyebilirsiniz.
```

If, for, while gibi döngüler de değişkenleri code block'larında tanımlar ve sadece orada ulaşılabilirler.

```javascript
if (true) {
  let message = 'Merhaba';
  console.log(message);
}
console.log(message); // ? merhaba mı verir yoksa bir hata mı?
```

Bir fonksiyon yazdığımızı düşünelim ve bu fonksiyon dışardan aldığı bir string parametresini içerisinde 2 ye ayırsın ve bir koşula göre bize çıktı versin.

```javascript
function stringFormat(str) {
  {
    let part1 = str.slice(0, 3);
    let part2 = str.slice(3);
    str = part1.toUpperCase() + part2;
  }
  //part1 ve part2 kullanılamaz.
  //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
  if (true) {
    return str;
  }
  return str.slice(4);
}
```

Neden bir fonksiyon içerisinde bir scope daha açma ihtiyacı duyabiliriz? part1 ve part2 sadece alınan parametrenin değiştirilmesi ile alakalı iki tane değer. str parametresini değiştirdikten sonra bizim artık part1 ve part2 ye ihtiyacımız yok. Bu kısmı ayrı bir scope içerisine alarak ilerde oluşabilecek bir bug ı önlemiş olabiliriz. Mesela, Scope içerisinde olmasa idi hala fonksiyon bodysinde istediğimiz yerde kullanabilir ve daha sonra gelip orayı değiştireceğimiz zaman hali hazırdaki kodu bozabilirdik gibi.

[You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)

#### Nested Functions

Nested Functions ( İç içe fonksiyonlar ) JavaScript'te yaygın olarak kullandığımız bir yapı. Bir Fonksiyon içerisinde başka bir fonksiyonu tanımladığımız zaman buna nested functions yapısı diyoruz aslında.

```javascript
function programDetayi(bootcamp, organizasyon) {
  // nested yardımcı fonk
  const tumProgram = () => bootcamp + ' ' + organizasyon;

  console.log('Basladi, ' + tumProgram());
  consol.log('Bitti, ' + tumProgram());
}
```

tumProgram fonksiyonu dış değişkene ulaşabilir ve gerekli bilgileri return eder. Daha ilginç olarak da bir fonksiyon nested fonksiyonu da return edebilir. Bir sayaç üzerinde bunu anlayabiliriz.

```javascript
function sayacartir() {
  let sayac = 0;

  return function () {
    return sayac++;
  };
}

let counter = makeCounter();

console.log(sayacartir()); // 0
console.log(sayacartir()); // 1
console.log(sayacartir()); // 2
```

[Nested functions](https://javascript.info/closure#nested-functions)

## Kaynaklar

[patika.dev](https://app.patika.dev/courses/javascript/fonksiyon-nedir-neden-kullaniriz)

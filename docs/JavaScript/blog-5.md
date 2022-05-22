---
title: Js Switch Case yapıları, Fonksiyonlar ve ...
sidebar_position: 4
---

switch, farklı koşullara dayalı olarak farklı eylemler gerçekleştirmek için kullanılır.

Sözdizimi

```javascript
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
```

Bu nasıl çalışır:

* Switch ifadesi bir kez değerlendirilir.
* İfadenin değeri, her bir durumun değerleri ile karşılaştırılır.
* Bir eşleşme varsa, ilgili kod bloğu yürütülür.
* Eşleşme yoksa, varsayılan kod bloğu yürütülür.

Örnek:

```javascript
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## Fonksiyonlar

Çoğu zaman kod yazarken belirli bölümleri tekrarlama ihtiyacı duyulur.

Örneğin kullanıcı hesabına giriş yaptığında veya çıktığında güzel görünümlü bir mesaj göstermek istenebilir.

Fonksiyonlar programın “yapı taşıdır”. Birçok defa bu fonksiyonlar çağırılarak tekrardan bu kodları yazmaktan kurtulunur.

Aslında var olan alert(mesaj), prompt(mesaj,varsayilan) ve confirm(soru) gibi fonksiyonları gördük. Fakat artık bunları yazmanın zamanı geldi.

## Fonksiyon Tanımlama

Fonksiyon tanımlamak için function tanım kullanılır.

```javascript
function mesajGoster() {
  alert( 'Merhaba millet!' );
}
```

function kelimesi önce yazılır, ardından fonksiyonun adı ve sonra parametrelerin yazılacağı parantez açılır ve ihtiyaç duyulan parametreler yazılır, sonrasında ise kapatılıp süslü parantez ile fonksiyon gövdesine başlanır.

Yeni fonksyion ismiyle şu şekilde çağırılır: mesajGoster().

```javascript
function mesajGoster() {
  alert( 'Merhaba millet' );
}

mesajGoster();
mesajGoster();
```

mesajGoster() fonksiyonu kodu çalıştırır. Bu kod sonrasında Merhaba millet uyarısını iki defa göreceksiniz.

Bu örnek açıkça fonksiyonların ana amacını gösteriyor: Kod tekrarından kaçınma.

Eğer mesajı değiştirmek istersek bir yerde değiştirdiğimizde bu fonksiyonu kullanan her yerde değişiklik olacaktır.

Fonksiyon içinde tanımlanan değişkene sadece o fonksiyon içerisinde erişilebilir.

```javascript
function mesajGoster() {
  let mesaj = "Merhaba! Ben Javascript"; // Yerel Değişken

  alert( mesaj );
}

mesajGoster(); // Merhaba! Ben Javascript

alert( mesaj ); // <-- Hata! Bu değişken `mesajGoster` fonksiyonuna aittir.
```

Fonksiyon, kendi dışında oluşturulmuş değişkenlere erişebilir. Örneğin:

```javascript
let kullaniciAdi = 'Adem';

function mesajGoster() {
  let mesaj = 'Hello, ' + kullaniciAdi;
  alert(mesaj);
}

mesajGoster(); // Merhaba, Adem
```

## Fonsiyon Parametreleri

Parametrelere isteğe bağlı olarak veri paslanabilir. Bunlara fonksiyon argümanları da denir.

Aşağıdaki fonksiyon iki tane parametreye sahiptir. gonderen ve metin

```javascript
function mesajGoster(gonderen, metin) { // argümanlar: gonderen, metin
  alert(gonderen + ': ' + metin);
}

mesajGoster('Ahmet', 'Merhaba!'); // Ahmet: Merhaba! (*)
mesajGoster('Mehmet', "Naber?"); // Mehmet: Naber? (**)
```

Eğer fonksiyonlar (*) ve (**) deki gibi yazılırsa doğrudan fonksiyonda gonderen ve metin yerel değişkenlerine atanırlar. Sonrasında fonksiyon bunları kullanabilir.

Aşağıda gonderen değişkeni fonksiyona paslanmakta. Dikkat ederseniz fonksiyon içerisinde gonderen değişse bile bu dışarıda bulunan değişkeni etkilememekte. Çünkü fonksiyon bu değişkenin her zaman kopyasını kullanır:

```javascript
function mesajGoster(gonderen,metin) {

  gonderen = '*' + gonderen + '*'; // "gonderen" biraz daha güzel hale getirildi.

  alert( gonderen + ': ' + metin );
}

let gonderen = "Mahmut";

mesajGoster(gonderen, "Merhaba"); // *Mahmut*: Merhaba

// "gonderen" değişkeninin değeri sadece fonksiyon içerisinde değişti. Çünkü bu değişken paslandığında fonksiyon yerel bir kopyası üzerinde çalışır
alert( gonderen ); // Mahmut
```

**Varsayılan Değer:**

Eğer fonksiyon argümanına bir değer gönderilmemişse fonksiyon içerisinde bu değişken undefined olur.

Örneğin mesajGoster(gonderen,metin) fonksiyonu tek argüman ile de çağırılabilir.

## Fonksiyonu isimlendirme

Fonksiyonlar eylemdir. Bundan dolayı isimleri yüklem olmalıdır. Net olmalı ve fonksiyonun ne işe yaradığını ifade edebilmelidir. Böylece kim ki kodu okur, ne yazıldığına dair bir fikri olur.

Genel itibari ile eylemi tanımlayan ön ek kullanmak iyi bir yöntemdir. Bu ön ekler ile ilgili birlikte kod yazdığınız kişiler ile uyum içerisinde olmalısınız.

Örneğin "show" fonksiyonu her zaman bir şeyleri gösterir.

Fonksiyonlar şöyle başlayabilir.

"get…" – değer döndürür,
"calc…" – bir şeyler hesaplar,
"create…" – bir şeyler yaratır,
"check…" – bir şeyleri kontrol eder ve boolean döndürür.
Böyle isimlere örnek:

Not: İngilizce’de bu daha kolay önce eylemi yazıyorlar. Türkçe’de fiil genelde sonda olduğundan dolayı sıkıntı yaşanmaktadır. Fonksiyonlarınızı adlandırırken İngilizce adlandırırsanız okunması daha kolay olacaktır.

* sendMessage(..)     // mesaj gönderir
* getAge(..)          // yaşı döndürür
* calcSum(..)         // toplamı hesaplar ve geri döndürür.
* createForm(..)      // form oluşturur ve genelde geri döndürür.
* checkPermission(..) // izni kontor eder. true/false

## Javascript IIFE (Immediately Invoked Function Expression)(Hemen Çağrılan İşlev)

Hemen Çağrılan İşlev İfadesi, işlevleri oluşturuldukları anda hemen yürütmenin bir yoludur. IIFE'ler, global nesneyi kirletmedikleri için çok kullanışlıdır ve değişken bildirimlerini izole etmenin basit bir yoludur.

Hemen Çağrılan İşlev İfadesi (arkadaşlar için IIFE ), işlevleri oluşturuldukları anda hemen yürütmenin bir yoludur.

IIFE'ler , genel nesneyi kirletmedikleri için çok kullanışlıdır ve değişken bildirimlerini yalıtmanın basit bir yoludur .

Bu, bir IIFE'yi tanımlayan sözdizimidir:

```javascript
(function() {
  /* */
})()
```

IIFE'ler ok işlevleriyle de tanımlanabilir:

```javascript
(() => {
  /* */
})()
```

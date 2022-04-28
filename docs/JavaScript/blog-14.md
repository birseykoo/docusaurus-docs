---
title: JavaScript Döngüler
category: JavaScript
---

## JavaScript for Döngüsü Kullanımı

Bir for döngüsü, belirtilen koşul doğru olduğu sürece komutların çalıştırılmasını sağlar. Koşul sağlanmazsa döngü çalışmayı durdurur.

```js
for (BaşlangıçAtaması; Koşulİfadesi; döngüSonundaÇalışacakİfade) {"Koşul sağlanıyorsa(true) çalışmasını istediğim komutlar."
};
"Koşul sağlanmazsa(false) döngüden çıkılır."
```

Yukarıda, basitçe bir for döngüsünün nasıl çalıştığını gördük.

Şimdi gerçek bir örnekle konunun pekişmesini sağlayalım.

```js
for(var i = 1; i < 5; i++) {
    console.log(i);
};
```

Yukarıda ne olduğunu basitçe anlatayım.

İlk olarak değeri 1 olan i adında bir değişken tanımladık.

Daha sonra bu i değişkeninin 5 sayısından küçük olduğu sürece döngü içerisine girip çalışmasını istedik.

Son olarak eğer koşulu sağlıyor ise ++ ifadesini kullanarak değerinin birer birer artmasını istedim.

```js
for(var i = 1; i < 5; i++) {
    console.log(i);
};
// 1, 2, 3, 4
```

Koşul sağlandığı sürece döngü çalışacak ve console.log(i) ifadesi ile bize her çalıştığında i sayısının güncel değerini verecek.

## Break ve Continue Kullanımı

Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir. Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar.

**Break:**

break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken nokta "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

**Etiketli Break:**

Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

**Continue :**

Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.

**Etiketli Continue:**

Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.

```js
// 1-) break için basit örnek
// normalde 1 den 10 a kadar yazdırması gerekirken 5 te break ile karşılaşıldığı
//için dögüden çıkıldı hemen orda döngü sonlandırıldı
for (var i = 0; i <= 10; i++) {
 if (i == 5) {
   break;
 }
 console.log("i:" + i);
}
console.log("Döngüden çıkıldı");

//2-) continue için basit örnek
// 1 den 10 a kadar yazıldı fakat 5 te continue ile karşılaşıldığı için o anki
//işlem olan 5 sayısı  pas geçilerek direk 6 ya geçildi
for (var i = 0; i <= 10; i++) {
 if (i == 5) {
   continue;
 }
 console.log("i:" + i);
}
console.log("Döngüden çıkıldı");
```

```js
//İç içe döngü örneği
//  iç döngü de 3 değerinde break ifadesi çalışır ve o anda iç döngüden çıkılır yani
//iç döngü sonlanır.Fakat dış döngünün işleyişi aynen devam eder
for (var i = 0; i <= 10; i++) {
 console.log("dış döngü: " + i);
 for (var j = 0; j <= 5; j++) {
   if (j == 3) {
     break;
   }
   console.log("iç döngü" + j);
 }
}

//Etiketli break Örneği
//etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi
//etiketin başına konulduğu döngü için etki eder.
//Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
 for (var j = 0; j <= 50; j++) {
   if (j == 9) {
     break cikis_etiketi;
   }
   console.log("iç döngüden j :" + j);
 }
}

//Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <=5; i++) {
 for (var j = 0; j <= 4; j++) {
   if (j == 2) {
     continue gec_etiketi;
   }
   console.log("iç döngüden j :" + j);
 }
}
```

## While Döngüsü

JavaScript’te tekrar eden işlemlerde kodlarımızın karışmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız. Bunlardan bir tanesi While döngüsüdür. While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.

Diyelim ki bir durumda konsola 1’ den 10’a kadar sayıları sırayla yazdırmamız gerekiyor biz bu durumda while döngüsünü kullanarak satırlarca kod yazmaktan kurtuluruz ve okunması gayet basit bir kod yazmış oluruz.

```js
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log("Döngüden çıkıldı");
```

Yukarıda görmüş olduğunuz kod örneğinde 3 bölüm bulunuyor;

* Dışarıda bir değişken tanımlama.
* while döngüsüne değişkeni koşul parametresi olarak vermek.
* While döngüsüne yapmamız gereken işleri yaptırma(bunu biraz açmamız gerekiyor çünkü içeride değişkeni arttırdığımızı göreceksiniz bunun sebebi değişkenimiz 1'den 10 a kadar giden bir değer ve while döngümüzün çalışma şartı değişkenimiz 10 dan küçük olduğu sürece eğer biz değişkeni döngüde arttırmazsak döngü sonsuza defa çalışır ve sistemimizin hata vermesine sebep olur.

## ForEach ile Array içerisindeki Öğelerin Çağrılması

JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

```js
arr.forEach(function(value, index, array) {
  // index ve array kullanmak opsiyoneldir
}
```

Konuyu daha iyi anlamak için her parametrenin aldığı değeri gösteren bir örnek yapalım.

```js
const animals = ["cat" , "dog" , "bird", "horse"];

animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});
```

Aynı fonksiyonu her zaman kullanmak zorunda olduğumuz index parametresiyle yazalım.

```js
const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );
//Arrow function gosterimi(ES6)
```

Şimdi de forEach kullanarak yeni bir array oluşturabileceğimiz bir fonksiyon yazalım.

```js
const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

// output = [12, 33, 27]
```

Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.

```js
const numbers = [12, 24, 36];

numbers.forEach(() => {
     //...
})
```

## Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi

### Filter Metodu

Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

```js
const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
```

Yukarıda products dizisinden, harf sayısı 5'ten fazla olanları almak istiyorum.

```js
const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]
```

Yukardaki örnekte harf sayısı 5'ten fazla olan elemanları filter() metodu ile filtreleyip, newProducts adında oluşturduğum yeni diziye atadım.

Pekiştirmek için bir örnek daha yapalım.

```js
const users = [
{fullName: "Mehmet Veli", isActive: false},
{fullName: "Ali Duran", isActive: true},
{fullName: "Ahmet Yılmaz", isActive: true},
{fullName: "Oğuz Şahin", isActive: false},
]
```

Yukardaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

```js
const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers.fullName); //(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
//Üst satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.
```

## Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması

Map methodundan önce javaScript'te Array(Dizi)'leri kısaca hatırlayalım. Diziler aslında bir veri yapısıdır ve bellek üzerinde aynı tipte veri tutabilmemizi sağlar. Bir değişken tanımladığımızı düşünürsek eğer bu bizim için tek bir değer tutacaktır. Diziler ise bir değişkenin altında birden fazla değer tutabilmemizi sağlar. Daha sonra bu tanımladığımız dizinin elemanlarına farklı farklı ulaşmak istersek indeks üzerinden ulaşabiliriz.

### Dizi Oluşturma

```js
let meyveler = ["Kivi", "Muz"];

console.log(meyveler.length);
// 2
```

### Dizideki Elemana Ulaşma

Not: Indeks kullanılmıştır.

```js
var ilkMeyve = meyveler[0];
// Kivi

var sonMeyve = meyveler[meyveler.length - 1];
/* Diziler sıfır-tabanlı olduğu için uzunluk-1'inci eleman son elemandır.
// Muz
```

### Array Map

Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

Öncelikle Array Map metodunun kullanımına bir göz atalım.

```js
array.map( function(value, index, array), this)
```

Gönderilen parametreleri inceleyelim;

* array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
* value : Üzerinde işlem yapılan dizi değerini belirtir.
* array : Üzerinde işlem yapılan diziye erişimi sağlar
* this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.

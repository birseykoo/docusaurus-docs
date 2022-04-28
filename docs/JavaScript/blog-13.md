---
title: Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak
category: JavaScript
---

Merhaba arkadaşlar, JavaScript'te array(dizi) tanımı birden çok value(değer) saklamamızı sağlar. Bu diziler içinde string, number, boolean, object, tipinde veriler saklanabilir. Diziler de object(nesne) tipindedir. Bir dizi oluşturmak için yapmamız gereken dizi ismini verip eşittir dedikten sonra köşeli parantezler içinde dizi elemanlarını yazmak. Her eleman arasında bir virgül koymamız gereklidir.

**Örneğin**;

```javascript
let arr = [1,2,3];
```

Burada ismi arr ve sadece number tipinde elemanları olan bir dizi tanımlamış olduk. Farklı bir örnek;

```javascript
let arr = [1,2,"bir string ifade",false,{title:"kodluyoruz"}];
```

Burada farklı tiplere sahip elemanları tek bir dizi içinde saklamış olduk. Bir dizi içinde farklı bir dizi(diziler) tanımlayabiliriz. Örneğin;

```javascript
let arr = [1,2,3,["dört","beş","altı"],7,8];
```

## Dizi İçerisindeki Elemanlara Erişim

Artık bir dizi nasıl oluşturulur öğrendiğimize göre bu oluşturduğumuz dizinin elemanlarına nasıl ulaşırız ona bakalım. Her dizi elemanının index değeri vardır. İlk elemanın index değeri 0 dır. Buna göre ikinci elemanın index değeri 1 ve böylece devam eder. Bu index değerlerini kullanarak bizler dizi elemanlarına erişebiliriz.

Örneğin;

```javascript
let arr = [1,2,3,"dört","beş"];
console.log( arr[3] );
console.log( arr[0] );
```

Burada console.log( arr[3] ); çıktı olarak dört değerini, console.log( arr[0] ); ise 1 değerini bize verecektir. Burada index değerini tek tek yazmak yerine bir for döngüsü yardımıyla dizi elemanlarına erişebiliriz. Örneğin;

```javascript
let arr = [1,2,3,"dört","beş"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

Burada arr.length ifadesi dizinin uzunluğunu number tipinde ifade eder. Bu örnekte dizi uzunluğu 5. NOT: Dizi uzunluğu için saymaya 1 'den başlanır.

Eğer bir dizi içerisinde farklı bir dizi tanımlı ve bu içerideki dizi elemanlarına erişim sağlamak istiyorsak;

```javascript
let arr = [1,2,3,["dört","beş","altı"],7,8];
console.log(arr[2][0]);
```

Burada console.log(arr[3][0]); çıktı olarak dört yazacaktır. 3 içerideki dizinin index numarası ve 0 bu dizinin ilk elemanını ifade eder. console.log( arr[4] ); çıktı olarak 7 verdiğine dikkat edelim. Dizi prototipinde tanımlı foreach fonksiyonu yardımıyla da dizi elemanlarına erişilebilir.

```javascript
let arr = [1,2,3,"dört","beş"];
arr.forEach((item, index) => {
  console.log(item, index);
});
```

Burada arrow function şeklinde yazılmış forEach metodu her bir dizi elemanı için çalıştırılır. item değeri dizinin o anki elamanını tutar ve index değeri ise o anki elemanın index değeridir. Bu kodu çalıştırdığımızda dizinin her elemanının aynı for döngüsünde olduğu gibi çıktısını görebiliriz.

## Array Nedir?

Programlamanın temel amaçlarından birisi verileri saklamak ve manipüle edebilmektir. Arrays (diziler) bu işe yaramaktadır. Array'lerde bir değişken (variable) tanımlayarak birden fazla değeri (value) saklayabilir ve onları daha sonra çeşitli metotlarla kullanabiliriz. Array oluşturmak için köşeli parantez kullanırız. Oluşturulan array'de her bir değere 'element' (eleman) denir.

`let favoriArabalar = ['audi', 'volvo', 'mercedes']`

Bir array'in içine yazabileceğimiz elemanların veri tipi (data type) önemli değildir. Örneğin aynı array'de bir string ile number değer olarak atanabilir.

`let randomDizi = [2021, 'javaScript', true]`

Array İçindeki Elemanlara Ulaşmak
Array içindeki bir elemana ulaşılmak istendiğinde yazılış sırasına göre çağırılmaktadır. Elemanların yazılış sıralarını numaralandırmaya 0' dan başlarız. Bu demek oluyor ki bir array'e yazdığımız ilk elemanın (yani birinci sırada yazdığımız eleman) numarası 0'dır. Elemana ulaşmak için önce dizinin değişken adı yazılır daha sonra köşeli parantez açılarak elemanın numarası girilir.

`let marmaraBolgesi = ['istanbul','kocaeli','sakarya','bursa','canakkale']`

``marmaraBolgesi[0] = istanbul` marmaraBolgesi[1] = kocaeli marmaraBolgesi[2] = sakarya marmaraBolgesi[3] = bursa marmaraBolgesi[4] = canakkale``

Yukarıda yaptığımız örnekte görüldüğü gibi dizinin içinde 5 tane eleman varken çağırdığımız son elemanımızın numarası 4'tür. Bu demek oluyor ki ((dizideki toplam eleman sayısı) - 1) bize dizinin son elemanını verir.

O halde içinde kaç tane eleman olduğunu bilmediğimiz bir dizinin son elemanına ulaşmak için şu yöntemi kullanabiliriz.

`let aylar = ['mart','nisan','mayis','haziran','temmuz']` `let sonEleman = aylar[aylar.length - 1]` // length property'si bize array'in içindeki eleman sayısını verir. Ondan bir çıkarttığımızda ise son elemanın numarasını elde etmiş oluruz. `console.log(sonEleman) = 'temmuz'`

## Type Of Array

Bir array'in veri tipi object'dir. `typeof aylar = object`

## Array'in Let Veya Const İle Deklare Edilmesi Arasındaki Farklar

Array'leri tanımladığımız değişkenin let veya const ile deklare edilmesi arasında fark bulunmaktadır. Let ile deklare ettiğimiz bir array daha sonra yeniden tanımlanabilir.

`let gunler = ['pazartesi','sali','carsamba']` `gunler = ['cuma','cumartesi','pazar']` `console.log(gunler)`; // `['cuma' , 'cumartesi' , 'pazar']` çıktısını alacağız. Çünkü let kullanarak oluşturduğumuz bir array yeniden tanımlanabilir.

Yukarıda yaptığımız örneğin aynısını const ile yapmayı deneyelim `const gunler = ['pazartesi','sali','carsamba']` `gunler = ['cuma','cumartesi','pazar']` // 'TypeError: Assignment to constant variable' hatasını alırız. Const ile deklare ettiğimiz bir array'i yeniden tayin edemeyeceğimizi belirtmektedir.

const ile deklare ettiğimiz bir array yeniden tayin edilemese de içerisindeki elemanlara erişme ve değiştirme noktasında let ile aynıdır.

## Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek Diziye Yeni Eleman Eklemek

Dizilere **push()**, **unshift()** ve **splice()** metotlarıyla yeni eleman ekleyebiliriz.

### **push() metot**

push() metot, var olan bir dizinin sonuna eleman eklemeye yarar.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.push('baseball');
console.log(sports); // basketball, football, tennis, baseball
```

### **unshift() metot**

unshift() metot, var olan bir dizinin başına eleman eklemeye yarar.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.unshift('baseball');
console.log(sports); // baseball, basketball, football, tennis
```

## **splice() metot**

splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,0,'baseball');
console.log(sports); // basketball, baseball, football, tennis
```

## Diziden Eleman Silmek

Dizilerden `pop()`, `shift()` ve `splice()` metotlarıyla eleman silebiliriz.

### **pop() metot**

pop() metot, var olan bir dizinin en sonundaki eleman silmeye yarar.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.pop();
console.log(sports); // basketball, football
```

### **shift() metot**

shift() metot, var olan bir dizinin başından eleman silmeye yarar.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports);  // basketball, football, tennis
sports.shift();
console.log(sports);  // football, tennis
```

### splice() metot

splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılabileceğini yukarda belirtmiştik. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,1);
console.log(sports); // basketball, tennis
```

## Dizide Eleman Güncellemek

Dizi içerisindeki her bir eleman 0' dan başlayan bir indeks numarasına sahiptir. Bu sayede indeks numaralarını kullanarak güncelleme yapabiliriz.

* **Örneğin**

```javascript
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports[2]); // tennis
sports[2] = 'judo';
console.log(sports[2]); // judo
```

## Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

JavaScript'te, Arrayler(Diziler) sayesinde gerektiği zaman verilerimizi saklıyor ve bunları manipüle edebiliyoruz. Bu kısımda anlatılan metotlar dizi içerisinde tuttuğumuz verilerimizi kullanmak istediğimiz yöntemlere göre değiştirip şekil aldırmamızı sağlıyor.

Yazının devamındaki CodePen üzerinde verilen örnekleri incelerken CodePen'in console sekmesini açmayı unutmayın.

### **.push()**

Push metodu var olan bir diziye yeni bir eleman eklememizi sağlıyor. Eklemek istediğimiz elemanı parantez içerisine yazıyoruz.

* **Örneğin:**

```javascript
let alisverisListem = ["elma", "ekmek", "süt"];

alisverisListem.push("yumurta");

console.log(alisverisListem);
// Yeni Dizimiz ["elma", "ekmek", "süt", "yumurta"] şeklinde olacaktır.
```

### **.pop()**

Pop metodu var olan bir dizideki en son elemanı silmemizi sağlar. Parantez içerisine parametre almaz.

* **Örneğin:**

```javascript
let alisverisListem = ["elma", "ekmek", "süt"];

alisverisListem.pop();

console.log(alisverisListem);
// Yeni dizimiz ["elma", "ekmek"] şeklinde olacaktır. Son eleman olan "süt" diziden silinmiş oldu.
```

### **.includes()**

Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

* **Örneğin:**

```javascript
const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);
// Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem.includes("armut");
console.log(armutVar);
// Dizi içerisinde armut olmadığı için ekrana false yazdırmasını bekleriz.
```

## **.slice()**

Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.
Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.

* **Örneğin:**

```javascript
const alisverisListem = ["elma", "ekmek", "süt"];

const yeniAlisverisListem = alisverisListem.slice(0,2);
// "elma"dan başlayıp "süt"e kadar olan elemanları kopyala."süt" dahil değil.

console.log(yeniAlisverisListem);
// ["elma", "ekmek"] görmeyi bekleriz.
```

### **.join()**

Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

* **Örneğin:**

```javascript
const alisverisListem = ["elma", "ekmek", "süt"];

const stringAlisverisListem =  alisverisListem.join();
console.log(stringAlisverisListem);
// Çıktıda "elma,ekmek,süt" bekleriz.

const stringAlisverisListem2 = alisverisListem.join(" kiraz ");
console.log(stringAlisverisListem2);
// Çıktıda "elma kiraz ekmek kiraz süt" bekleriz.
```

### **.concat()**

Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.

* **Örneğin:**

```javascript
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.
```

Yazının devamında, içerisinde fonksiyon tanımladığımız ve bu fonksiyonlarla dizideki elemanları manipüle ettiğimiz dizi metotlarını inceleyeceğiz.

### **.forEach()**

```javascript
dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
// Bir şeyler yap.
});
```

İhtiyacımıza göre bu parametrelerden hepsini veya aralarından birkaçını kullanabiliriz.

* **Örneğin:**

// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

```javascript
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});

// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.

```

### **.map()**

Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
Örneğin:

// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

```javascript
const sayilar = [1,2,3];

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.

console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.
```

### **.some()**

* **Örneğin:**

```javascript
const sayilar = [4,5,6];

// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar.some(function(sayi) {
    return sayi > 5 ;
});

console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.


const sonuc2 = sayilar.some(function(sayi) {
    return sayi <3;
});

console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz.
```

### **.every()**

every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

* **Örneğin:**

```javascript
const sayilar = [4,5,6];

const sonuc1 = sayilar.every(function(sayi) {
    return sayi > 3;
});

console.log(sonuc1);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


const sonuc2 = sayilar.every(function(sayi) {
    return sayi > 5;
});

console.log(sonuc2);
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


const sonuc3 = sayilar.every(function(sayi) {
    return sayi > 7;
});

console.log(sonuc3);
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.
```

### **.filter()**

filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
Yeni oluşacak diziyi bir değişkende saklıyoruz.
Orijinal dizi bozulmuyor.

* **Örneğin:**

```javascript
const sayilar = [1,2,3,4,5];

const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi >3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilar);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.
```

### **.find()**

Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
Diğer metotların aksine find metodu elemanın kendisini döner.
Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
Koşulu sağlayan bir eleman bulamazsa undefined döner.

* **Örneğin:**

```javascript
const sayilar = [4,5,6,7];

const bulunacakEleman1 = sayilar.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.

const bulunacakEleman2 = sayilar.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.

const bulunacakEleman3 = sayilar.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.
```

### **.sort()**

Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.

* **Örneğin:**

Varsayılan haliyle (parametre vermeden) sıralamak yapmak istediğimizde:

```javascript
const sayilar = [3,5,2,10,4];

sayilar.sort();
console.log(sayilar);
// Çıktı olarak [10, 2, 3, 4, 5] alırız.
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

const sayilar = [3,5,2,10,4];

sayilar.sort(function(a,b) {
    return b-a;
});
console.log(sayilar);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.
```

### **.reduce()**

Bu metot dizimizi yalnızca bir değere indirger.
Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.

* **Örnekler:**

```javascript
const sayilar = [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = sayilar.reduce(indirgeyici,0);

console.log(sonuc1);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.


// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonuc2 = sayilar.reduce(indirgeyici, 5);

console.log(sonuc2);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.
```

Dizi İçerisinde Dizi Oluşturma

* **Örneğin:**

Piknik sepetimizde bulunan yiyeceklerin adlarını ve sayılarını tutan bir dizimiz olsun:

```javascript
const piknikSepetim = [
    ["elma",3],
    ["muz",5],
    ["ekmek", 2]
];
Burada piknik sepetindeki bir elemanlara ulaşmak istersek:
const ilkEleman    = piknikSepetim[0];  // ["elma",3]
const ikinciEleman = piknikSepetim[1] // ["muz",5]
const ucuncuEleman = piknikSepetim[2] // ["ekmek", 2]

const kacElma = piknikSepetim[0][1]; // 3

let kalemlik = new Array();

// Aynı metotla kalemlik dizisi içerisinde yeni diziler oluşturabiliriz:

kalemlik[0] = new Array("Silgi", 2 ,"mavi");
kalemlik[1] = new Array("Kalem", 3, "kırmızı");
kalemlik[2] = new Array("Cetvel", 1, "siyah");

console.log(kalemlik);
// Çıktı olarak [["Silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 1, "siyah"]] şeklinde 3 elemanlı bir dizi döner.

//Bu dizi içerisindeki silgiyi görüntülemek istersek:
console.log(kalemlik[0][0]);
// Kalemlik dizisinin ilk elemanının birinci elemanı döner yani "silgi" dönmesini bekleriz.

// Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
console.log(kalemlik[0][2]);
// renk kalemlik dizisinin ilk elemanının üçüncü elemanı olduğundan "mavi" döner.
```

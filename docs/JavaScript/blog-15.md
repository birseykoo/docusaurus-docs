---
title: Object (Nesne) Nedir? Nasıl Oluşturulur?
sidebar_position: 15
---

## Object(Nesne) Nedir? Nasıl Oluşturulur? JavaScript Object

JavaScript’in en temel veri tipi kabul edilen objeler, son derece önemlidir ve nasıl çalıştıklarını bilmek bir front-end developer için hayati önem taşır. Bu yazıda JavaScript objelerinin teorik çalışma mantığını örneklerle göreceksiniz.

## Objenin basit tanımı

Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.

```javascript
let artist = {                                  //artist isimli objemiz
 name:"Zoé",                                    //name isimli, "Zoé" primitive değerine sahip property
 album:{                                        //album isimli, içerisinde başka bir objeye yer veren property
  title:"Reptilectric",
  year:2008
 },
};
```

Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler. Fakat primitive değerlerden farklı olarak objeler, referans yoluyla değiştirilirler ve değişen obje, yeni bir hafıza adresine sahip olur. Çünkü primitive değerlerin aksine objeler, JavaScript istemcisinin belleğinde, sahip oldukları değerlerle değil, sistemin atadığı hafıza adresleriyle kayıtlıdırlar. Bunun ayrımını aşağıdaki örnekte şöyle görebiliriz.

```javascript
//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false
```

Bu örnekte görüldüğü gibi, aynı primitive değerlere sahip olan “mesaj” ve “başkaBirMesaj” isimli değişkenler eşit kabul ediliyor. Fakat “obje” ve “başkaBirObje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar. Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

## Obje Oluşturmak

Objeler üç şekilde oluşturulabilir. Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla. Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir. Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.

## Object Literals

JavaScript’te obje oluşturmanın en kolay yolu olarak bilinir. Süslü parantez {} kullanılarak oluşturulan objenin içerdiği property'lerin değerleri iki nokta : işaretiyle belirtilir. Property'ler birbirlerinden virgül , ile ayrılır. Örnek vermek gerekirse:

```javascript
let countriesTalkSpanish = {
continent: "south america",
language: "spanish"
};
```

countriesTalkSpanish isimli obje, continet ve language adında iki propertye sahip. Bu property'ler de iki primitive değeri barındırıyor.

## New Keyword ile Obje Oluşturmak

New keyword'ü yeni bir obje oluşturup başlatır. Oluşturulurken belli başlı bazı constructor invocation’lardan(kurucu çağrılarından) birini(Object, Array, Date vb.) yazmak ve sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir. Fonksiyon çağrısı, objenin başlatılması için olmazsa olmazdır. Aşağıdaki örnekte standart object invocation kullanarak, Fransızca konuşulan Afrika ülkeleri objesini oluşturalım ve tıpkı bir önceki örnekte olduğu gibi, language ve continent property'leri verelim.

```javascript
let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "africa";
countriesTalkFrench.language = "french";
```

objemizi new keyword ile initialize ettikten sonra property'lerini atadık. Dikkat, Object literal’dakinden farklı olarak iki nokta : ve süslü parantez {} kullanmadık.

## Object Prototype

Son yöntem olan Object.create() yöntemine geçmeden önce, prototype hakkında bilgi sahibi olmak, son yöntemi anlamak için önemli. Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir. Mevcut obje, ikinci objeden yani prototype’ından kalıtım(inheritence) alır. Object literal yöntemiyle oluşturulan her objenin prototipi aynıdır: object.prototype. New keyword'ü kullanılarak oluşturulan objelerin ise nereden kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir. Örneğin new Date() objesi, hem object.prototype’ın kalıtımını alırken hem de date.prototype’dan kalıtım alır.

## Object.create

Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir. Aşağıda yer alan örneklere bir bakalım;

```javascript
let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
```

Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.

```javascript
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.
```

standartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.

```javascript
let argentina = Object.create(countriesTalkSpanish)
```

argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object literal’dan kalıtım alacağı için onunla aynı property'lere sahip olur. Yani argentina objesi, Güney Amerika kıtasında bulunduğunu ve İspanyolca konuşulduğunu, kalıtım yoluyla sahip olduğu property'lerden belli eder.

```javascript
argentina.capital = “buenos aires”;
```

objeye, ülkenin başkentini belirten yeni bir property atadık. Artık elimizde başkentini, konuşulan dili ve hangi kıtada yer aldığını bildiğimiz bir ülke var.

## Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı ve Metodları

Bir obje(object), {…} süslü parantezleri ile, isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir. Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.

## Literal ve property tanımlamaları

**Obje örneği:**

```javascript
let car = {
  brand: "BMW", // key(anahtar) "brand" "BMW" value(değerini) tutar
  year: 2020, // key(anahtar) "year" 2020 value(değerini) tutar
};
```

Property değerlerine noktalı yazım(dot notation) kullanarak erişilebilir:

```javascript
console.log(car.brand); // "BMW"
```

İstediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz. Mevcut bir property'yi eklemek veya değiştirmek için şu şekilde yazabiliriz:

`car.model = "320i"; // objeye model isminde bir key ekler ve value olarak string atar`

Bir propertyy’i kaldırmak için silme(delete) operatörünü kullanabiliriz:

`delete car.year;`

Birden fazla kelime içeren property name kullanabiliriz, ancak bunlar tırnak (" ") içinde kullanılmalıdır:

```javascript
let car = {
  brand: "BMW",
  year: 2020,
 "is manual" : true,
};
```

## Square brackets kullanımı

Birden fazla kelime içeren property'ler için dot notation kullanamayız. Bunun yerine “square bracket notation” yani köşeli parantezli yazım kullanılır:

```javascript
let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru)
delete person["likes sea"];         // delete (sil)
```

Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir:

```javascript
let animal= {};           // set
let key = "flies";        // key atama
animal[key] = true;       // value atama
```

Yeni objemiz:

```javascript
animal = {
   "flies" : true // yeni eklediğimiz key value çifti
};
```

Burada, değişken(variable) key runtime(çalışma zamanında) hesaplanabilir veya kullanıcı girdisine bağlı olabilir. Sonrasında property’ye erişmek için kullanabiliyoruz. Bu bize kullanımda esneklik sağlıyor.

```javascript
let person = {
  name: "Jack",
  age: 20,
};
let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// değişken ile erişim
alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)
```

Dot notation'ı benzer şekilde kullanamayız.

## Computed property kullanımı

Bir obje oluştururken, key'ler için köşeli parantezler yardımıyla dinamik değerler(variable) kullanabiliriz. Buna hesaplanmış özellikler(computed properties) denir.

Computed properties, objedeki hangi property'nin güncelleneceğini dinamik olarak seçmemize olanak tanır.

```javascript
function objectify (key, value) {
   return {
[key]: value
  }
}
objectify("name", "Anna");   //  {name: "Anna"} atanmış yeni değer
```

* Key, square brackets [ ] içine alındığı sürece herhangi bir ifade olabilir.

## Kompleks Objeler Kullanımı

Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir. Bu nedenle kompleks uygulamalarda da kompleks objeler kullanılmaktadır. Kompleks bir obje örneği de

```javascript
let state = {
users:[
{name: "Brock", age: 25, favoriteColor: "red"},
{name: "Jessie", age: 17, favoriteColor: "yellow"},
{name: "James", age: 41, favoriteColor: "blue"},
{name: "Winnie", age: 18, favoriteColor: "purple"}
],
settings:{
version: "1.0.5",
DNS: "105.xx.xx.xx",
website: "https://www.example.com/"
},
banList: ["Ash", "Angelica", "Tom", "Jerry"]
}
```

Yukarıda gördüğünüz gibi obje içinde her türlü veri türünü saklayabiliyoruz. Örnekteki "users" property'si içinde obje tutan bir array'e denk gelmekte. "settings" property'sinde ise obje içinde obje tutulmakta. "banList" property'sinde ise basit bir array tutulmakta.

"banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.

```javascript
alert(state.banList[2])
```

"settings"lerdeki "website" değerine ulaşmak istersek şu şekilde ulaşabiliriz.

```javascript
alert(state.settings.website)
```

"user"larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.

```javascript
alert(state.users[2].favoriteColor)
```

## JSON Veri Tipini Obje Olarak Kullanmak

Değişmeyen ve statik olarak kullanmanız gereken verileri JSON derslerinde de anlatıldığı gibi ".json "dosya eklentisi ile bir dizinde kaydedip uygulamanızda bu değişmeyen verilerden yararlanmak isteyebilirsiniz. Projenizde JSON dosyalarıyla çalışabilmeniz için önce onu dosyada import etmeniz ve obje şekline çevirmeniz gerekmektedir. Bu işlem çok basit bir şekilde yapılabilir.

```javascript
const veri = require("./dosyanizin/dizini/veri.json") // Bu işlemde require fonksiyonu ile dosyanızı import etmektesiniz

// Bu işlemden sonra veri bileşenini obje şeklinde kullanabilirsiniz.
```

### Özet

* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz:
  * Dot notation: obj.property
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir.

### Obje Metodları

Plain objects için aşağıdaki metotlar(method) kullanılabilir:

Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner.
Tüm bu Object.* metotları array veri tipinde değer döner.

```javascript
let person = {
  name: “Jack”,
  age: 20
};

Object.keys(person) = ["name", "age"]
Object.values(person) = ["Jack", 20]
Object.entries(person) = [ ["name","Jack"], ["age",20] ]
```

### JSON Metodları

Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.

```javascript
let person = {
  name: "Jack",
  age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject);
// parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir
```

## Nesnelere Nasıl Metot Ekleriz?

### Metot Nedir?

JavaScript'in referans veri tiplerinden biri olan ve Türkçede "nesne" anlamına gelen object key-value (anahtar-değer) yapı mantığına sahip bir veri tipidir. Yani bir nesne oluştururken bu nesnemiz için bir veya birden fazla property (özellik) tanımlanabilir ve key-value mantığındaki gibi nesnemizin sahip olduğu özellikler için değerler verilmelidir. Özelliklerin sahip olduğu değerler farklı veri tiplerinde olabileceği gibi bir fonksiyonu da işaret edebilir. Bir özellik eğer bir fonksiyonu işaret ediyorsa bu özelliğe metot denir.

Bir nesneye metot 2 şekilde eklenebilir. Bunlardan biri yukarda bahsedildiği üzere nesneye property olarak eklemek, bir diğeri ise prototype (prototip) fonksiyonu üzerinden eklemektir.

### Metotu Özellik Olarak Eklemek

Metot, bir nesnenin oluşturulduğu sırada özellik olarak eklenip tanımlanabileceği gibi, önceden tanımlanmış bir nesneye sonradan da eklenebilir. Öncelikle ilk durumu ele alıp aşağıdaki örneği ona göre inceleyelim.

Örneğin; "person" adında bir nesne oluşturalım ve bu nesnemiz "name", "surname","age","city" özelliklerine ve bu kişinin bana tüm bilgilerini gösterecek bir "introduce" metoduna sahip olsun.

```javascript
var person = {
name: 'Rumeysa',
surname: 'Turgut',
age: 23,
city: 'Istanbul',
introduce: function () {
console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
},
};
```

Yukarıdaki gibi, metot tanımlanırken function() anahtar kelimesi kullanılarak yapılabileceği gibi EcmaScript6'nın arrow function yönteminin söz diziminden yararlanarak yapmak da mümkündür. Fakat burada dikkat edilmesi gereken noktalardan biri arrow functionlar this erişimine sahip değildir. Yani aşağıdaki gibi bir kullanımda introduce fonksiyonu çalıştırıldığında çıktıda özellikler undefined (tanımlanmamış) olarak gözükecektir.

```javascript
var person = {
name: 'Rumeysa',
surname: 'Turgut',
age: 23,
introduce: () => {
return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
},
};
console.log(person.introduce());
```

Bir metodun arrow function söz dizimi kullanılarak yapılmak istendiği bir durumda özelliklere nesnenin ismiyle erişilebilir. Buna göre yukarda arrow function kullanarak oluşturduğumuz metot içerisinde özelliklere erişim şu şekilde olacaktır;

```javascript
var person = {
name: 'Rumeysa',
surname: 'Turgut',
age: 23,
introduce: () => {
return `My name is ${person1.name} ${person1.surname}, I'm ${person1.age} yo.`;
},
};
```

Şimdi de önceden oluşturulmuş bir nesneye nasıl metot ekleyebiliriz ona bakalım. Aslında burada metodun sahip olabileceği yapı değişmiyor yani function() anahtar kelimesi veya arrow function söz dizimi kullanılarak oluşturulabilir. Yukardaki örnek üzerinden devam edecek olursak person nesnemize myCity adında yeni bir metot ekleyelim ve bize kişinin yaşadığı şehri göstersin.

```javascript
person.myCity = function () {
console.log(`I live in ${this.city}`);
};
person.myCity();
```

Yukardaki örnekte de görüldüğü gibi nesneye yeni bir metot eklemek istendiğinde nesneİsmi.eklenecekMetotİsmi = function() şeklinde yapılabilir. Veya istendiği takdirde daha öncede bahsettiğimiz gibi arrow function ile yapmak da mümkündür.

### Prototype Konusu ve Prototype Yöntemi

Buraya kadar obje tanımlamayı ve objelere fonksiyon eklemeyi öğrendik. Ancak öğrendiğimiz yöntemde key-value yani anahtar değer yöntemini kullanmıştık.

Ancak nesneye yönelik programlama konseptlerinde objelerin ve sınıfların çok daha detaylı kullanım alanları mevcuttur. Bu noktada da objeye fonksiyon ekleme konusunda karşımıza özel bir kullanım geliyor. Bu kullanımdan önce netleştirmemiz gereken bazı konular var.

Öncelikle JavaScript'te çoğu tanımın bir obje olduğunu bilmemiz gerekiyor. Evet biraz garip gelebilir ama fonksiyonlar da dahil olmak üzere çok tanımlama bir objedir. Bu obje tabanlı yapısı sayesinde fonksiyonları, başka fonksiyonlara parametre olarak verebilir ayrıca bir fonksiyon da döndürebiliriz.

Bu noktada fonksiyonların ne olduğunu ve nasıl çalıştığını anlamamız gerekiyor. Dile ait bu detayları öğrenebilirsek sonra farklı kullanımlardan rahatça faydalanabiliriz.

```javascript
const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"
```

Yukarıdaki örnekte basit bir fonksiyon tanımladık ve bu fonksiyonun adını "." operatörüyle eriştik. console.log(fonksiyonAdi.name) kodunu çalıştırdıktan sonra "Merhaba Kodluyoruz" çıktısının gelmediğine dikkat edin. Burada fonksiyonu execute etmedik. Yalnızca bu objenin bir özelliğine eriştik.

Öyleyse JavaScript'te fonksiyonların da birer obje olduğunu öğrendik. Peki daha önce öğrendiğimiz şekilde bu js fonksiyonlarına birer yeni özellik ekleyebilir miyiz?

Peki konumuz objeler ve objelere fonksiyon eklenmesi değil miydi? Fonksiyonların özellikleriyle objelerin ne ilgisi var Firdevs hanım? Bu noktada da obje oluşturmanın yeni bir yöntemini öğreneceğiz.

```javascript
function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}
```

Haydaa ! Bu ne şimdi? Evet JavaScript'in sürprizlerle dolu olduğu doğrudur. Hanımlar beyler yukarıda gördüğünüz yapının adı JavaScript Object Constructor. Daha önce bir değişken yardımıyla obje tanımlamıştık. Class keyword'ünü kullanarak da bir sınıf tanımlayabiliyorduk. Yukarıdaki yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır. Bu şekilde bir obje mutable(mutasyona uğrayabilir daha az havalı haliyle özellikleri değiştirilebilir) bir Sınıf tanımlamış oluyoruz. Sınıf ile obje arasındaki farkı nesneye yönelik programlama konusunda daha detaylı öğrenebilirsiniz ancak burada bir obje şablonu oluşturduğumuzu söyleyebiliriz. Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz.

```javascript
const ali = new Insan("ali",21);
console.log(ali.yas);
// 21
```

Böylece artık "ali" isminde bir objemiz hazırlanmış oldu. Peki bu fonksiyon yöntemini kullanarak bir obje hazırladığımızı düşünelim. Bu objeye sonradan ekstra bir fonksiyon eklemek istersek? Kafanız karışmasın fonksiyon kurucu yardımıyla hazırladığımız bir sınıf var ve bu Sınıfı kullanarak "new" anahtar kelimesiyle bir obje oluşturduk. Ancak zaman değişti ve artık bu sınıfta kullanmak üzere fazladan bir fonksiyon tanımlamak istiyoruz. Bu fonksiyonu/özelliği öyle bir şekilde eklemeliyiz ki olmayan bir fonksiyon/özellik eklemek istiyoruz. Objelere özellik eklemek konusunda bir problemimiz yok çünkü bunun mutable olduğunu biliyoruz .

```javascript
ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik);
// "Sonradan eklenmiş bir özellik"
```

Peki sınıflarda bu durum nasıl oluyor? Sınıf olarak belirlediğimiz şablona tanımı değiştirmeden nasıl fonksiyon veya özellik ekleyebiliriz?

İşte bu durumla karşılaştığımızda da prototype özelliği karşımıza çıkar. Peki prototype nedir?

Prototype, sınıflara JavaScript tarafından otomatik olarak eklenen bir objedir. Eklenmek burada çok doğru bir tabir değil. Aslında bütün objeler tarafından miras alınan bir özelliktir. Bu özelliği de "proto" key'i ile ekler. Bu prototype alanı içinde hem o objeyi kurduğumuz Sınıfın kurucu fonksiyonuna hem de proto objesine erişebiliriz. Bu prototype özelliğini kullanarak hem sınıfa hem objeye ihtiyacımız olan fonksiyonu ekleyebiliriz. Bu kısımların detayları JavaScript'te nesneye yönelik programlama konusuna ait olduğu için kapsamı genişletmeden birkaç örnek vererek konuyu tamamlayalım :

Sınıfa Prototype yardımıyla fonksiyon eklemek :

```javascript
// Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"
Objeye prototype yardımıyla fonksiyon eklemek :

ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"
```

Bu tarz bir kullanıma özellikle büyük projelerde ihtiyacımız olabilir. Prototype özelliğini kullanarak da objelere ve sınıflara sonradan fonksiyonlar hatta farklı özellikler ekleyebiliriz.

## Object ve Array Destructuring Kullanımı Destructuring Nedir?

......

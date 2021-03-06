---
title: LocalStorage ile Veri Eklemek, Düzenlemek ve Silmek
category: JavaScript
sidebar_position: 10
---

### LocalStorage ile Veri Eklemek, Düzenlemek ve Silme Local Storage Nedir?

Web Storage terimi web sayfasında yapılan değişikliklerin kaydının tutulmasına karşılık gelmektedir. Örneğin bir web sayfasında kayıt formu doldurulurken sayfanın kapatıldığını veya başka sayfaya geçtiğimizi varsayalım. Kayıt form sayfasına döndüğümüzde kayıtların kaybolması sinir bozucu bir durum olabilir. Bu durumun önüne geçmek için cookie yani çerez dediğimiz sistemlerle geçici veriler saklanabilmekteydi. Ancak bu çerez dosyalarının hem 4 kb ile sınırlı olması hem de üçüncü şahıslar tarafından kolay erişilebiliyor olması Local Storage teriminin yaygınlaşmasına neden olmuştur. HTML 5 ile birlikte web sayfaları veriyi yerel (local) veya tarayıcı (browser) içinde saklayabilir hale gelmiştir. Bu sayede eskiden cookie’ler ile yaptığımız işlemler daha güvenli ve daha hızlı şekilde yapılabilir hale gelmiştir. Daha hızlı çalışmasının nedeni artık veriler her sunucu istediğinde değil, sadece çağırıldıklarında gelmektedir. Veriler key/value şeklinde saklanmaktadır ve web sayfaları sadece kendi oluşturdukları verilere erişebilmektedir. Birçok tarayıcı Web Storage API yapısıyla uyumlu şekilde çalışabilmektedir.

### Nasıl Kullanılır?

HTML 5 ile tarayıcılar iki tane yerel kayıt türünü desteklemektedir.

* localStorage
* sessionStorage

Bu iki kayıt türü arasındaki en temel fark localStorage kayıtları zaman aşımı olmaksızın tutarken sessionStorage kayıtları oturum sonlanana kadar ya da veri kaybolana kadar tutmaktadır. Ancak LocalStorage ve SessionStorage kullanıcı tarafından kolayca okunabilir ve değiştirilebilir, bu sebeple uygulama içerisindeki güvenlik ile ilgili verilerin depolanmaması gerekmektedir. LocalStorage ve SessionStorage sayfalar arasındaki ve client işlemleri arasındaki hassas olmayan verilerin taşınmasında tercih edilmektedir.

### Veri Ekleme

localStorage built-in fonksiyonları ile veriler üzerinde işlem yapmak oldukça kolaydır. setItem metodu kayıt eklemek için kullanılmaktadır. Bu metot iki parametre almaktadır. Bunların ilki ‘key’ yani anahtar adı ikincisi ise ‘value’ yani o anahtara karşılık gelen değeri ifade etmektedir.

```javascript
window.localStorage.setItem("key","value");`
```

Eğer daha önce belirttiğiniz bir anahtarı kullanırsanız kaydetmek için veri eski kaydın üzerine yazılacaktır. Veriniz güncellenmiş olacaktır. Veriyi kontrol edip yoksa kaydetmek isterseniz. verinin oluşturulup oluşturulmadığını kontrol etmeniz yeterli olacaktır. Verileri kaydederken sadece string biçiminde kayıt yapıldığını bilmemiz gerekmektedir. Karmaşık bir veriyi kaydetmek istediğinizde toString() metodu çalıştırılmalı ve üretilen değer kaydedilmelidir. Json verisini kaydetmek içinse JSON.stringify() metodu kullanılmalıdır.

### Veri Okuma

localStorage üzerinde kayıtlı olan anahtarları okumak için getItem metodu kullanılır. getItem metodu anahtar adını kendisine parametre olarak alıp geriye değeri döndürmektedir.

```javascript
window.localStorage.getItem("key");
```

Eğer veri daha önce kaydedilmeyen bir veriyi okumaya çalıştığımızda null değeri geri dönmektedir.

### Veri Silme

Verileri silmek için iki tane metot kullanılmaktadır. Tüm verileri silmek istiyorsak clear() metodunu kullanmamız gerekir. Şayet istediğimiz bir anahtarı silmek istiyorsak removeItem() metodunu kullanmamız gerekmektedir. removeItem metodu kendisine silinecek anahtarı parametre olarak almaktadır.

```javascript
localStorage.removeItem("key");
localStorage.clear();
```

Veri silindikten sonra değeri null olarak gözükmektedir.

### Veri ekleyip çıkarabileceğimiz dinamik bir uygulama

```javascript
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>New Tab App</title>

  <link rel="stylesheet" href="css/primitive.css">
</head>

<body>

  <div class="small-container">
    <h1>New Tab App</h1>

    <form>
      <input id="item" type="text" placeholder="New">
    </form>

    <h2>Items</h2>
    <ul></ul>

    <button>Clear All</button>
  </div>

  <script src="js/scripts.js"></script>
</body>

</html>
```

## LocalStorage içerisine Farklı Türde Veriler Eklemek

```javascript
let user = "kodluyoruz"
localStorage.setItem('userInfo', user)
```

User objesini localStorage'da tutmak için setItem() fonksiyonu yukarıdaki gibi kullanılabilir. localStorage içindeki görüntüsü aşağıda verilmiştir. Ancak daha kompleks objeler için bu kod satırı yetersizdir.

```javascript
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', userStatus)
```

Bunun sebebi localStorage içindeki bilgilerin key: value şeklinde, yalnızca string türünde değerler ile saklanmasıdır. İlk örnekteki user değişkeni userInfo bilgisine atanabilir ancak userStatus bir obje olduğundan yukarıdaki görseldeki sonuçla karşılaşırız. Bunu önlemek için userStatus objesini stringe çevirmek gereklidir.

```javascript
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))
```

### LocalStorage'den Veri Alma

LocalStorage'da değişkenler string olarak tutulduğundan, localStorage'tan user objesini almak istediğimizde userName ve isActive değerlerine erişemeyiz. Stringify işlemini geri almak için parse() metodu kullanılabilir.

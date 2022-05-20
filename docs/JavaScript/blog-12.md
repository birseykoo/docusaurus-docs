---
title: Input İçerisinden Değer Almak
category: JavaScript
sidebar_position: 12
---

Dinamik olarak input oluşturmak için;

```javascript
var myInput=document.createElement("input");
```

Input'umuzu oluşturduktan sonra gerekli olan özellik eklemelerini yapıyoruz.

```javascript
myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type","text");
myInput.setAttribute("value","Buraya Yazın");
```

Böylece input ve özellikleri oluşturuldu. Şimdi HTML içine bu input'u yerleştiriyoruz.

* 1. adım

Body içine bir div oluşturalım. (Daha sonra input'u buraya atayacağız.)

```javascript
var myDiv = document.createElement("div");
```

şeklinde yapabiliriz.

* 2. adım

appendChild fonksiyonu ile input'u bu div'e ekleyelim.

```javascript
myDiv.appendChild(myInput);
```

## Input Değerini Alma

Artık input'umuz oluştu ve değerini alabiliriz.

```javascript
var inputDeger = document.getElementById("inputumuz").value;
```

Değeri alert olarak ekranda göstermek için;

```javascript
window.alert(inputDeger)  // Değerimiz burada yazacak
```

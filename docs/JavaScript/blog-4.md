---
title: Js Karşılaştırma Operatörleri Koşullar ve Ternary Operatörler
sidebar_position: 4
---

## Js Karşılaştırma Operatörleri

| Method                             | Description                          |
| ---------------------------------- | ------------------------------------ |
| =                                  | Atama operatörü                      |
| ==                                 | Eşit mi                              |
| ===                                | Değerleri ve değer türleri eşit mi   |
| !=                                 | Değerleri eşit değil mi              |
| !==                                | Değerleri veya değer türleri eşit mi |
| >                                  | Büyük mü                             |
| `<`                                  | Küçük mü                             |
| >=                                 | Değerinden büyük veya eşit mi        |
| `<=`                                 | değerinden küçük veya eşit mi        |
| ?                                  | Kısaltılmış koşul operatörü          |
| &&                                 | Ve                                   |
|                                    | Veya                                 |
| !                                  | Değil                                |
| degisken = (kosul) ? deger1:deger2 | Kısa if                              |

## Js Ternary Operatör

Bir koşul olarak değerlendirilirse bir bloğu yürütmek istediğinizde true, genellikle bir if…else ifadesi kullanırsınız.

bir kişinin yaşı 16'dan büyük veya ona eşitse araba kullanabileceğine dair bir mesaj gösteriyoruz. Alternatif olarak, if-else ifadesi yerine üçlü bir operatör kullanabilirsiniz:

```javascript
let age = 18;
let message;

age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);
```

Veya üçlü operatörü aşağıdaki gibi bir ifadede kullanabilirsiniz:

```javascript
let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message);
```

üçlü operatörün sözdizimi:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

---
title: Version Kontrol Sistemi Nedir?
---

## "git" Kelimesinin Anlamı

Cambridge Sözlüğe göre; aptal, hoş olmayan kişi anlamına geliyor. [2]

Bu isimlendirme Torvalds'a sorulduğunda kendisi esprili şekilde şu cevabı veriyor:

"Ben bir egoistim ve projelerime kendi ismimi veriyorum. Önceki Linux, şimdiki git." Torvalds, alternatif olarak kelimenin ruh halinize göre aşağıdaki anlamlara da gelebileceğinden bahsediyor;

* Yaygın bir UNIX komutu tarafından kullanılmayan, telaffuz edilebilir, rastgele üç harfli bir kombinasyon.
* Sözlükteki argo anlamı ile; Aptal, Aşağılık ve Basit.
* "Küresel bilgi izleyici" (Global information Tracker).
* "Kahrolası aptal kamyon dolusu pislik" (Goddamn Idiotic Truckload of sh*t)."

## GIT'in Tarihsel Gelişimi

Linux'un mimarı **Linus Torvalds**, çok sayıda kişi ile birlikte Linux çekirdeğini geliştirirken projenin yönetimi için o dönem piyasada bulunan BitKeeper adındaki versiyon kontrol sistemini tercih etmiş. Fakat BitKeeper'in telif haklarını elinde bulunduran kişi ile yaşanan yasal sorunlardan ötürü bu kullanımdan vazgeçilmiş.

O günlerde piyasada bulunan versiyon kontrol sistemlerinin hiçbiri aslında Torvalds'ın beklentilerini karşılamıyormuş.

Bu sebeple ihtiyaçlarına çözüm için kolları sıvayan Torvalds, piyasadaki sistemleri inceleyerek kendi versiyon kontrol sistemini yazmaya başlamış. İlk sürüm 2005 yılında piyasaya sürülmüş.

## GIT Versiyon Kontrol Sistemi Nedir?

Bir döküman (yazılım projesi, ofis belgesi vb.) üzerinde yaptığınız degişiklikleri adım adım izleyen, istediğinizde kayıt eden ve isterseniz bunu internet üzerindeki bir bilgisayarda veya yerel bir cihazda (respository / repo / depo) saklamanızı ve yönetmenizi sağlayan bir sistemdir.

## GIT Bize Ne Sağlar?

* Birden fazla yerde (dağıtık olarak) dosyalarınızı ve versiyon kontrol bilgilerinizi depolayabilirsiniz. Böylelikle cihaz bağımsız olarak dosyalarınıza erişebilirsiniz.
* "commit" yaparak SnapShot (anlık görüntü) özelliği ile istediğiniz zaman proje veya dosyaların o anki halini kayıt altına alabilirsiniz. Böylelikle ileride bir hata ile karşılaşırsanız herhangi bir zamandaki herhangi bir versiyona dönüş yapabilirsiniz.
* SnapShot alındıktan sonra değişiklik yapılan dosyaları görebilirsiniz.
* Takımların aynı projede beraber çalışmasına imkan verir. Kim neyi düzenledi? Ne ekledi? Ne çıkarttı? Son değişiklik ne zaman yapıldı? gibi bilgilere erişebilirsiniz. Bu sayede topluluk ile proje geliştirme süreçlerini kolaylaştırabilirisiniz.
* Projede verisyonlanmasını istemediğiniz dosyaları belirtebilirsiniz. (node_modules, .mp4, .log, .env gibi)

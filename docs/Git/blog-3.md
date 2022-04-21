---
title: .gitignore Dosyası Ne İşe Yarar? Nasıl Kullanırız?
---

.gitignore dosyası projemizin kök dizinine oluşturulan düz bir metin dosyasıdır. Adından anlaşıldığı gibi diyor ki beni göz ardı et. Daha doğrusu göz ardı etmek istediğin, local çalışma alanındaki takip edilmesini istemediğin, takım arkadaşların için gerekmeyen dosyaların varsa veya bu dosyaların boyutu reponuza atmanıza gerek olmayacak kadar büyük ölçekli ise buyur beni kullan diyor.

Gel bu dosyaları .gitignore dosyasına koy ki GIT de senin bu dosyalarını artık takip etmesin. Üstelik bu işlemler yapılırken senin halihazırdaki dosyalarını da hiç bir şekilde etkilemesin. Daha ne olsun!

## Peki nedir bu tür dosyalar ?

* Paket yöneticisinden indirilen bağımlılıklar,
* image ve video dosyalarınız(dosya boyutları çok fazla olabilir)
* IDE eklentileri( örneğin .vscode)
* Sadece kendi çalışma alanınızda olması gereken başkaları tarafından görülmemesi gereken dosyalarınız (veritabanınıza ilişkin konfigürasyonlar)
* API anahtarları, kimlik bilgileri veya hassas bilgiler içeren dosyalar(.env)
* Çalışma dizinizdeki geçici dosyalar
* Log dosyaları
* Yararsız sistem dosyaları (örneğin MacOS işletim sisteminin .DS_Store dosyası )
* dist gibi oluşturulan dosyalar
* Veya herhangi bir dosyanız da olabilir.

## Nasıl oluşturulur?

Reponuzu oluştururken verilen seçeneklerde add gitignore file dosyasına tıklayarak reponuzla beraber oluşturabilirsiniz. Aynı şekilde editörünüzde .gitignore şeklinde de oluşturabilirsiniz.

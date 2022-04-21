---
title: GIT Bash ile GIT Temel Komutları
---

![git version kontrol](https://i.ytimg.com/vi/Uszj_k0DGsg/maxresdefault.jpg)
Bu resimde Gitin temel çalışma presnipleri gösterilmektedir.

![git version kontrol](https://www.jrebel.com/sites/default/files/image/2021-09/image-body-cheat-sheet-chart.png)

Başlıca bilmemiz gereken bazı terimler;

* untracked (izlenmeyen): GIT tarafından henüz takip edilmeyen, yani yeni oluşturulmuş dosyaları ifade eder.
* unstaged (hazırlanmamış): Güncellenmiş ancak commit’lenmek için hazırlanmamış dosyaları ifade eder.
* staged (hazırlanmış): Commit’lenmeye hazır olan dosyaları ifade eder.
* deleted (silinmiş): Projeden silinmiş ama GIT üzerinden kaldırılmamış dosyaları ifade eder.

## git init

Henüz versiyon kontrolü altında olmayan bir projenin dizininde, boş bir git deposu oluşturmak için kullanılır.

## git config

GIT’in bir çok konfigürasyon ve ayarı vardır, bunlardan ikisi user.name ve user.email olanıdır. Bu ayarları yapılandırmak için aşağıdaki komutları kullanırız. GIT'i ilk kurduğumuzda genellikle aldığımız ilk hata bu configurasyon ayarlarını yapmadığımız için gelir.

```bash
git config --global user.name "Name Surname"
git config --global user.email "test@email.com"
```

Bu ayarların bütününü görüntülemek için:

```bash
git config --list
```

## git add

Yeni eklenen veya üzerinde değişiklik yapılan dosyaları staged ortamına göndermek için kullanılır.

```bash
git add <dosya veya klasor_name>
```

Tek seferde bütün dosyaları eklemek için ise:

```bash
git add . veya git add -A veya git add *
```

## git rm

Staged ortamına eklenmiş bir dosyanın takibinin bırakılması yani untracked (izlenmeyen) hale getirilmesi sağlayan komuttur.

```bash
git rm  --cached <dosya veya klasor_name>
```

Dosyayı klasörden silmek istiyorsak eğer, aşağıdaki komutu kullanılırız.

```bash
git rm <dosya veya klasor_name>
```

## git status

Üzerinde çalışılan projenin o anki durumu hakkında bilgi verir. Yapılan değişiklikler, eklenen ve silinen dosyalar gibi bilgiler listelenir.

## git commit

Commit, staged ortamına alınan dosyaların Local Repository’e gönderilmesidir. En iyi uygulama yöntemi her kayıt sırasında yapılan değişiklikleri açıklayıcı bir mesaj eklemektir. Ayrıca her commit benzersiz bir kimliğe (unique ID) sahip olur. Bu sayede eski bir commit'e geri dönebilirsiniz ve herhangi bir kayıp yaşama ihtimaliniz kalmaz.

```bash
git commit -m "Commit mesajı"
```

## git log

Projedeki commit geçmişini görüntülememizi sağlar. Bütün commit'ler, id'si, yazarı, tarihi ve mesajı ile beraber listelenir.

## git branch

Local veya remote repository üzerinde yeni bir branch (dal) eklemek, silmek veya listelemek için kullanılır.

Projenize yeni bir branch eklemek için;

```bash
git branch <branch_name>
```

veya

```bash
git checkout -b <branch_name> master
```

* Tüm uzak ve yerel branch'lari listelemek için;

```bash
git branch -a
```

* Bir branch'ı silmek için;

```bash
git branch -d <branch_name>
```

## git checkout

Branch’ler arası veya commit'ler arası geçiş yapmak istediğimizde kullanılır.

Mevcutta var olan branch'a geçiş yapmak için;

```bash
git checkout <branch_name>
```

Yeni bir branch oluşturup, bu branch'a geçiş yapmak için;

```bash
git checkout -b <branch_name>
```

Commitler arası geçiş yapmak için: (Eski bir versiyona dönmek istediğimiz zaman)

```bash
git checkout <commit_id>
```

## git merge

Başka bir branch'da olan değişiklikleri, bulunduğumuz branch ile birleştirmek istediğimizde kullanılır.

```bash
git merge <branch_name>
```

## git clone

Mevcut bir Remote Repository'de bulunan dosyaların bilgisayarımızda bir kopyasının oluşturulmasını sağlar.

```bash
git clone <repository_url>
```

## git push

Projemizde aldığımız commit'leri, remote repository'e gönderir.

```bash
git push origin master
```

## git diff

Repository üzerinde yapılan değişikliklerden sonra dosyalar arasında oluşan farklılıkları göterir.

Çalışma dizini ile repository (HEAD) arasındaki farklılıkları görmek için:

```bash
git diff HEAD
```

* İki commit arasındaki farklılıkları görmek için:

```bash
git diff <commit_id> <commit_id>
```

Çalışma dizini ve staged ortamı arasındaki farkları görmek için:

```bash
git diff --staged
```

## Kaynaklar

[GIT Bash ile GIT Temel Komutları](https://app.patika.dev/courses/git/git-bash-ile-git-temel-komutlari)

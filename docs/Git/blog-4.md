---
title: Git İleri
category: Git
---

`git log` : Commitlenen değişikliği gösterir.
`git commit --amend` : Son commit'i değiştirir.
`git commit --amend -m "message"` : Son commit mesajını değiştirir.
`git revert "commit-id"` : Commit'i geri alır.
`git reset --hard "commit-id"` : Aradaki revertleri siler.
`git diff "commit-id..commit-id"` : Commit arasındaki farkları gösterir.
`git stash` : Geçiçi olarak değişiklikler saklanır.
`git stash pop` : Geçici olarak saklanan değişiklikleri geri alır.
`git stash list` : Geçici olarak saklanan değişiklikleri gösterir.
`git stash drop "stash-id"` : Geçici olarak saklanan değişiklikleri siler.
`git stash apply "stash-id"` : Geçici olarak saklanan değişiklikleri uygular.
`git stash clear` : Geçici olarak saklanan değişiklikleri siler.
`git merge "branch-name"` : Branch'ı birleştirir.
`git merge --squash "branch-name" and git commmit -m "message"` : Branch'ı birleştirir ve değişiklikleri tek bir commit'a yapar.
`git rebase "branch-name"` : Branch'ın başlangıç noktasına geri döner.

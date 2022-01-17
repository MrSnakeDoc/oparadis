## Bonnes pratique pour git et pour le projet

### Toujours être sur la branche dev-

### JAMAIS SUR LA BRANCH MAIN

**créer une sous branch de dev**

```bash
git checkout -b <nomdelafeature>
```

**Tu code ce que tu as besoin**

**Quand tu es prêt à merge tu:**

```bash
git add .
git commit -m 'ton commentaire'
```

**tu retournes sur la branch dev et tu fais :**

```bash
git pull
git merge <nomdelabranchamerge>
```

**puis tu delete la branch que tu viens de merge**

```bash
git branch -d <nomdelafeature>
```

**puis tu push la branch dev**

```bash
git push
```

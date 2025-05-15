
# Naming Conventions

Ce document décrit les conventions de nommage adoptées dans le projet **prog-5-ussd** afin d'assurer une lisibilité, une cohérence et une maintenabilité du code.

---

## 🔤 Types de casse utilisés

| Type             | Description                                         |
|------------------|-----------------------------------------------------|
| `camelCase`      | Utilisé pour les variables, fonctions, méthodes     |
| `PascalCase`     | Utilisé pour les noms de classes et composants React |
| `UPPER_SNAKE_CASE` | Constantes globales                                |
| `kebab-case`     | Noms de fichiers (optionnel)                        |
| `snake_case`     | Pour les noms de clés dans les fichiers `.env` ou JSON |

---

## 📁 Fichiers et Dossiers

- Dossiers : `kebab-case`  
  Exemple : `user-service/`, `ussd-core/`

- Fichiers JS/TS : `kebab-case`  
  Exemple : `ussd-handler.js`, `menu-config.ts`

---

## 🧠 Variables

- **camelCase** pour toutes les variables
  ```ts
  let sessionId = req.body.sessionId;
  const menuItems = ['Option1', 'Option2'];

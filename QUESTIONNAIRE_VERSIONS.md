# Questionnaire - Versions disponibles

## 🎯 Deux versions du questionnaire

### 1. 📄 **Version Page Complète** - `/q`
- **Usage** : Page autonome complète
- **Interface** : Header avec logo + barre de progression + questionnaire
- **Arrière-plan** : Gradient bleu complet
- **Cas d'usage** : 
  - Lien direct vers le questionnaire
  - Partage externe
  - Tests indépendants

### 2. 🔗 **Version Embed** - `/q/embed` 
- **Usage** : Intégration dans d'autres pages
- **Interface** : Questionnaire uniquement (sans header global)
- **Arrière-plan** : Transparent, s'adapte à la page parent
- **Cas d'usage** :
  - Intégration dans la page `/capture`
  - Embedding dans des iframes
  - Intégration sur des sites externes

## 🛠️ Architecture technique

### Composant principal : `Questionnaire.tsx`
```typescript
interface QuestionnaireProps {
  tunnelId?: string;
  schemaId?: string;
  embedMode?: boolean; // Nouvelle prop pour le mode embed
}
```

### Mode Embed activé
- ❌ Pas de header global avec logo
- ✅ Barre de progression intégrée dans le questionnaire
- ✅ Background transparent
- ✅ Auto-redimensionnement via postMessage
- ✅ Bordures arrondies adaptées

### Communication iframe
- `EmbedClient.tsx` : Gère le redimensionnement automatique
- `QuestionnaireBridge.tsx` : Côté parent, reçoit les messages de hauteur
- Messages : `{ type: 'sentinel:q:height', height: number }`

## 🎨 Interface adaptée

### Version complète (`/q`)
```
┌─────────────────────────────────────┐
│ 🏢 Climate Risk Assessment         │
│    Powered by 25+ years...         │
│ ████████████████░░░░ 80% complete   │
├─────────────────────────────────────┤
│                                     │
│ [Question Card]                     │
│                                     │
│ ○ Option 1                          │
│ ○ Option 2                          │
│                                     │
│ [Previous] [Continue →]             │
│                                     │
└─────────────────────────────────────┘
```

### Version embed (`/q/embed`)
```
┌─────────────────────────────────────┐
│ ████████████████░░░░ 80% complete   │
├─────────────────────────────────────┤
│ Question Title                      │
│ Question description...             │
├─────────────────────────────────────┤
│                                     │
│ ○ Option 1                          │
│ ○ Option 2                          │
│                                     │
│ [Previous] [Continue →]             │
│                                     │
└─────────────────────────────────────┘
```

## 📍 URLs et paramètres

### Page capture
- URL iframe : `/q/embed?utm_source=capture_page`
- Tracking : Paramètre UTM automatiquement capturé
- TunnelId : `capture_page`

### Tests
- Version complète : http://localhost:3001/q
- Version embed : http://localhost:3001/q/embed  
- Page capture : http://localhost:3001/capture

## ✅ Avantages de cette approche

1. **Flexibilité** : Une seule codebase, deux modes d'affichage
2. **Maintenance** : Modifications centralisées dans `Questionnaire.tsx`
3. **Performance** : Pas de duplication de code
4. **UX** : Interface adaptée selon le contexte
5. **Intégration** : Embed parfaitement intégré dans la page parent

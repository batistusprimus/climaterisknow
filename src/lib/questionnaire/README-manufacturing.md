# Questionnaire Manufacturing - Guide d'utilisation

## Vue d'ensemble

Le questionnaire manufacturing est une version spécialisée du questionnaire Sentinel Shield, conçue exclusivement pour les entreprises manufacturières. Il peut être intégré sur une landing page dédiée pour un ciblage précis des leads.

## Caractéristiques

- **Point d'entrée direct** : Commence directement par les questions manufacturing (pas de sélection d'industrie)
- **15 questions** organisées en 5 sections :
  - Section 1: Geographic Footprint Analysis (2 questions)
  - Section 2: Manufacturing Operations Profile (4 questions) 
  - Section 3: Weather-Related Production Impact (3 questions)
  - Section 4: Operational Resilience & Protection (4 questions)
  - Section 5: Contact Information (4 questions)
- **Durée estimée** : 3-4 minutes
- **Compatible** avec tous les types existants et le moteur de questionnaire

## Utilisation

### Import
```typescript
import { manufacturingSchema } from '@/lib/questionnaire';
// ou
import { manufacturingSchema } from '@/lib/questionnaire/manufacturing-schema';
```

### Exemple d'intégration React
```tsx
import { manufacturingSchema } from '@/lib/questionnaire';
import { QuestionnaireEngine } from '@/components/questionnaire';

export default function ManufacturingLandingPage() {
  return (
    <div className="manufacturing-questionnaire">
      <h1>Climate Risk Assessment for Manufacturers</h1>
      <QuestionnaireEngine schema={manufacturingSchema} />
    </div>
  );
}
```

## Structure du schéma

- **ID** : `manufacturing-lead-capture`
- **Version** : `1.0.0`
- **Point d'entrée** : `ma_zipcodes` (ZIP codes des installations)
- **Flux** : Linéaire (pas de branchement conditionnel)
- **Fin** : `contact_consent` (consentement obligatoire)

## Questions incluses

Toutes les questions de la Branch D (Manufacturing) du questionnaire complet, avec les contenus exacts spécifiés :

1. **ZIP Codes** - Localisation des installations
2. **Distribution critique** - Répartition des capacités
3. **Type de production** - Modèle de production
4. **Dépendances critiques** - Inputs essentiels
5. **Stockage produits** - Capacité de stockage
6. **Contrôle température** - Sensibilité thermique
7. **Historique interruptions** - Disruptions passées
8. **Fiabilité électrique** - Problèmes réseau
9. **Chaîne d'approvisionnement** - Vulnérabilité fournisseurs
10. **Flexibilité production** - Capacité de backup
11. **Stratégie inventaire** - Gestion des stocks
12. **Stratégie financière** - Protection risques météo
13. **Exposition pertes** - Impact financier annuel
14. **Contact** - Informations de contact et consentements

## Avantages

- **Ciblage précis** : Exclusivement pour les manufacturers
- **Temps optimisé** : Plus court que le questionnaire complet
- **Landing page dédiée** : Intégration facile sur page spécialisée
- **Lead qualification** : Meilleure qualification des prospects manufacturing
- **Réutilisable** : Compatible avec l'architecture existante

## Notes techniques

- Utilise les mêmes types TypeScript que les autres questionnaires
- Compatible avec le moteur existant (`engine.ts`)
- Pas de règles de branchement (flux linéaire)
- Export disponible dans `index.ts` du module questionnaire

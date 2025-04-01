# Angular-TP-1-2

Ici, ce trouve les deux TP Angular pour le rendu final de Thibaut MOSTEAU B3 DEV IA FS - EPSI NANTES

TP1 - Mercredi 31 mars, installation TP1 et correction de 4 erreurs (todo, 1, 3)

## Résumé des Solutions

- **Problème #1: Navigation incorrecte** : Utilisation de `routerLink` pour la navigation sans rechargement de page.

- **Problème #2: Besoin de formatage de texte** : Création d'un pipe `TitleCasePipe` pour formater le texte en remplaçant les underscores par des espaces et en capitalisant le premier mot.

- **Problème #3: Structure de page incomplète** : Extraction du header et du footer en composants réutilisables `app-header` et `app-footer`.

- **Problème #4: Pages non affichées** : Utilisation de `<router-outlet>` pour afficher les composants de page en fonction des routes.

- **Problème #5: Route manquante** : Ajout d'une route pour le détail d'un livre dans `app.routes.ts` par book/id.

- **Problème #6: Formulaire incomplet** : Création d'un formulaire réactif avec les champs nécessaires dans `add-book.component.ts`.

- **Problème #7: Validations manquantes** : Ajout de validations dans le formulaire en utilisant `Validators`.

- **Problème #8: Navigation manquante** : Implémentation d'un bouton de retour et ajout de la méthode `goBack()`.

- **Problème #9: Erreur dans la console** : Utilisation de `*ngIf` pour vérifier l'existence de données avant de les afficher.

- **Problème #10: Directive non appliquée** : Application de la directive `appHighlight` pour mettre en évidence le texte.

- **Problème #11: Bouton non fonctionnel** : Association des événements de clic aux méthodes appropriées.

- **Problème #12: Données non affichées** : Vérification du passage et de l'affichage corrects des données dans les templates.

- **Problème #13: Descriptions trop longues** : Utilisation du pipe `TruncatePipe` pour limiter la longueur des descriptions à 20 caractères.

- **Problème #14: Retour utilisateur manquant** : Ajout d'alertes pour informer l'utilisateur après des actions importantes.

- **Problème #15: Erreur d'affichage du titre** : Utilisation du pipe `uppercase` pour afficher les titres correctement.

- **Problème #16: Directive incomplète** : Modification de la directive `HighlightDirective` pour affecter la couleur de fond et le poids du texte.
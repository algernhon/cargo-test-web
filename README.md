# Cargo Web App

Exercice web pour le test technique de la société Cargo réalisé par **Pierre-Jean SUBERVIE le 17 avril 2022**.

Ce projet a demandé l'utilisation des librairies/frameworks suivants :

 - React 18.0
 - NextJS 12.1.5
 - Styled Components 5.3.5
 - Bootstrap 5.1.3

  

## Mise en place de l'application

**Développement**
Afin d'initialiser un **serveur de développement**, éxécutez les commandes suivantes :

```bash
npm run dev
# ou
yarn dev
```
Puis ouvrez la page [http://localhost:3000](http://localhost:3000) dans le navigateur afin de voir le résultat.

---
**Compilation**
Il est possible de **compiler une version optimisée** du projet afin d'en exporter une page static via la commande suivante :
  
```bash
npm run build
# ou
yarn build
```

Le projet compilé se trouvera dans le dossier /out/

---
**Docker**
Il est aussi possible de lancer l'application sur **un environnement Docker**, pour cela une simple commande :

```bash
docker-compose up
```

Après une phase de compilation (cela peut prendre quelques minutes), l'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Explication

 **Avant-propos**
Ce projet a été réalisé en un jour pour les besoins du test technique de la société Cargo. L'utilisation de React/NextJS n'était pas nécessaire, cependant React faisant partie du scope du poste, l'utilisation de ce Framework devient ainsi une opportunité de montrer ses compétences.

A noter que dans un projet en production, l’utilisation de React et Styled Components devient pertinente. La possibilité de pouvoir créer des éléments autonomes dans leur logique et dans leur design permet de faire une mise en commun du travail sur plusieurs projets (donc plusieurs sites) en même temps. 

**Organisation**
L'organisation de ce projet est une organisation personnelle qui j'ai mis au point au fur et à mesure de mes travaux. Elle correspond à ma méthode de travail.

 - **/Components** - Tous les **micro composants** réutilisables du projet, ils ont une logique et un design propre qui peut être adapté grâce à des paramètre ou des via le theme provider. Ces éléments peuvent être intégrés à d'autres projets sans devoir les réadapter.
 - **/Containers** - Les **macro composants** pouvant utiliser des Components. Ils sont liés au projet et rarement réutilisables.
 - **/Pages** - Les éléments qui définissent une page dans sa globalité. Les pages se structurent seulement avec des containers.
 - **/Public** - Tous les éléments statics du projet : images, vidéos, polices, documents...
 - **/Styles** - Les références de style du projet global, indépendant des éléments que composent le projet.

**NextJS**
NextJS est un Framework qui permet une génération static (fichiers sur hébergement classique), hybride ou SSR (Server-Side Rendering) d'un projet React.  Ce dernier apporte un gain de vitesse de chargement conséquent, permettant alors une meilleur indexation (SEO) de l'application. Les sites e-commerces étant extrêmement dépendants du SEO, l'utilisation du SSR devient alors pertinente pour ces projets. 

**Styled Components**
Le CSS-in-JS est une vraie révolution dans le développement d'application. Styled Components permet de scoper un style à un élément sans être dépendant d'un style parent. Le style programmé de manière fonctionnelle est alors injecté dans le DOM de l'application via un élément < style >. Un composant qui n'est pas encore injecté dans le DOM ou tout simplement supprimé du projet ne vient alors pas alourdir le style puisque ce dernier n'est pas généré.

 **Page responsive**
Bootstrap a été utilisé afin de rendre l'application responsive, Les différents breakpoints ont été utilisés afin de rendre l'application lisible sur un large panel d'écran. Par exemple, l'utilisation des Rows et Columns permet à des éléments de se réorganiser selon la taille d'affichage.

**Données structurées**
Il s'agit d'un format normalisé permettant de fournir des informations sur une page et de classer son contenu. Particulièrement important pour le SEO et dans la vente en ligne, il permet l'affichage des produits et des différentes caractéristiques (prix, disponibilité, marque, avis...) sur les recherches Google/Bing. 

Exemple de données structurés pour la chaise patchwork dans le container Products :
```
<meta  itemProp="name"  content="Bouteille isotherme 50cL"  />
<meta  itemProp="description"  content="Une superbe bouteille isotherme de 50cL"  />
<div  itemProp="offers"  itemType="https://schema.org/Offer"  itemScope>
  <meta  itemProp="availability"  content="https://schema.org/InStock"  />
  <meta  itemProp="priceCurrency"  content="EUR"  />
  <meta  itemProp="itemCondition"  content="https://schema.org/NewCondition"  />
  <meta  itemProp="price"  content="4.99"  />
  <meta  itemProp="priceValidUntil"  content="2024-04-17"  />
</div>
<div  itemProp="brand"  itemType="https://schema.org/Brand"  itemScope>
  <meta  itemProp="name"  content="Centrakor"  />
</div>
```

# TP Angular

Ce projet Github contient le code de l'application Angular ainsi que le dossier NetArticlesRest
qui est l'API Rest en Java.

## Démarrage du projet

### SQL

Pour démarrer le projet, allumer le serveur MySQL en local et créer la base de données avec le
script SQL présent à la racine du projet (net_articles.sql).

### API Rest

Pour que l'API Rest se lance correctement sur un serveur GlassFish, il faut que dans le fichier de
configuration persistence.xml, le nom de la datasource corresponde à la datasource du serveur GlassFish.
L'API Rest a reçu des modifications qui sont essentielles au bon fonctionnement de notre projet.

### Application angular

Avant le démarrage de l'application Angular, bien veiller à utiliser la commande `npm install` afin de
télécharger toutes les dépendances nécessaires au fonctionnement de l'application.
Pour l'apport technologique que nous expliquerons en dessous, nous avons mis en place un serveur nodeJS.
Afin de démarrer l'application Angular et le serveur nodeJS facilement, nous avons modifié la commande
`npm start`. C'est donc la commande a utiliser pour démarrer l'application.

## Apport technologique

L'apport technologique que nous avons décidé de mettre en place est un plugin angular d'upload de fichier.
Le but de cet apport est de permettre aux auteurs d'ajouter eux-mêmes des oeuvres depuis l'application.
Nous avons utilisé le plugin [ng2-file-upload](https://github.com/valor-software/ng2-file-upload) pour réaliser
l'upload de nouvelles oeuvres. Via ce plugin, nous intégrons une directive d'input permettant de selectionner un
fichier sur l'ordinateur.
Cet input est intégrer dans le formulaire d'une page comprenant en plus les informations relatives à l'oeuvre,
à savoir le titre, le résumé, le domaine et le prix. Une fois que toutes les informations sont remplies, la valdiation
du formulaire va faire appel au serveur nodeJS pour upload le fichier.
Etant donné que nous ne disposons pas de serveur de fichier, ceux-ci sont stocké en local dans le dossier /src/fichiers.
C'est aussi pour cette raison qu'il est nécessaire de redémarrer l'application Angular si nous voulons récupérer
le documents récemment uploadé car l'application charge le dossier de fichiers au démarrage. 
L'idéal serait de pouvoir upload et stocké les fichiers sur un serveur de fichiers puis d'envoyer des 
requêtes afin de récupérer les fichiers.

## Crédits

L'application a été réalisé en groupe de 3 par Therence BRUNE, Florian GUIGUE et Aurélien TARDY.

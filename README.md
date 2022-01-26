# Tirico-ShopCameraAnalytics

## Speech de Présentation 

<p align="justify"> Tirico est une application web d'aide à la décision pour tous les responsables et managers de magasin. Celle-ci permet, à partir de l'analyse d'image caméra, d'obtenir de précieuses informations, statistiques et graphiques sur le comportement client, permettant à vos gérants d'enseigne de prendre les meilleurs décisions sur l'aménagement des rayons. Notament sur le parcours client dans vos rayonnages, via par exemple des cartes de chaleurs, ou encore des graphiques sur le rapport entre le temps passé dans un rayon et l'argent dépensé à la caisse pour les produits de ce même rayon. Toutes nos études ont pour but de mettre en perspective la corrélation entre le comportement client analysé via nos caméra et l'analyse des tickets de caisse. Enfin des conseils générés par nos IA vous aident à mieux décrypter nos graphiques et vous proposes des initiatives possibles. </p>

Afin de vous permettre de mieux cerner vos clients, et de vous permettre d'optimiser vos ventes !

Solution réalisé avec :
- **Electron** pour la partie applicative (html, css, js)
- **Tenserflow** pour la partie d'analyse d'image, de machine learning (avec du python en plus pour la partie IA)

---

## Table of Contents 

- **[Application](#application)**
- **[Installation](#installation)**
- **[Fonctionnalités](#features)**
- **[Equipe & Contact](#team)**
- **[Licences](#Licences)**

---
<a name='application'></a>
## Application

***Retrouvez toutes les données sous forme de graphiques :***
<p align="center"><img src="Tirico_Client/ressource/demo/dash_commwhite.JPG"\></p>

***Sélectionnez vos zone de vente puis indiquez les types de produits vendus :***
<p align="center"><img src="Tirico_Client/ressource/demo/selection_zone.gif"\></p>

***Retrouvez vos cartes de chaleurs des différentes zones en fonction de leur popularité :***
<p align="center"><img src="Tirico_Client/ressource/demo/heatmap.JPG"\></p>

***Démo du système de tracking dans une rue :***
<p align="center"><img src="Tirico_Server/code_python/yolov4-deepsort/data/helpers/demo.gif"\></p>

---
<a name='installation'></a>
## Installation

 Dans votre dossier d'installation, créez votre git et connectez le à ce repository : 
``` python
git init
git remote add origin https://github.com/VincentBernet/Tirico-ShopCameraAnalitics
git pull origin master
```
 
 Pour ensuite installer tous les composants nécessaires à l'application :
``` python
npm install
Installer dans Tirico_Server/code_python/data le fichier suivant : 
https://drive.google.com/open?id=1cewMfusmPjYWbrnuJRuKhPMwRe_b9PaT (yolov4.weights)
```

Pour lancer l'application :
``` javascript
npm start
```
 
Pour le python (permettant la génération de carte de chaleur, de conseils généré par l'IA etc.)  
Installer pip ou anaconda pour installer plus facilement les librairies :

``` javascript
pip install pandas                         (pour réaliser les graphes)
pip install plotly                         (pour réaliser les graphes)
pip install -c plotly plotly-orca          (pour save en png les graphes)
pip install seaborn                        (pour réaliser la HeatMap)
```
Connexion Jeu de données: 
- Identifiant : vb@gmail.com | Mot de Passe : 123

---
<a name='features'></a>
## Fonctionnalités
Sur cette applications nous avons implémenter de multiples fonctionnalités telles que :
 - Login/Register/Logout/ForgottenPassword pour accéder à votre compte et à vos différentes analyses d'enseignes.
 - Plusieurs analytics comme des cartes de chaleurs, des graphiques d'affluences, de conversion d'achat par rapport au temps passé par le client dans chaque rayons, d'analyse de rayon etc . 
 
---
<a name='team'></a>
## L'Équipe

> L'ensemble de l'application a été réalisé par une équipe de sept étudiants lors de leur cursus d'ingénieur à l'EFREI PARIS : <br> 

 - **[Jean Hecke](https://www.linkedin.com/in/jean-hecke-92060015b/)** & **[Louis Gailhac](https://www.linkedin.com/in/gailhac-louis/)** & **[Serge Nicolas Excoffier](https://www.linkedin.com/in/serge-excoffier/)**
 - **[Hélène Boersma](https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-boersma-a0a16b17b/)** & **[Emeline Bagoris](https://www.linkedin.com/in/emeline-bagoris-116905142/)**
 - **[Sébastien Friedberg](https://www.linkedin.com/in/sebastien-friedberg/)** & **[Vincent Bernet](https://www.linkedin.com/in/vincent-bernet/)**

> N'hésitez pas à nous contacter sur Github ou sur Linkedin

---
<a name='Licences'></a>
## Licences

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © **[Tirico's Team](#team)**.

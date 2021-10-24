# Tirico-ShopCameraAnalitics

*** Presentation Speech  ***

Retails is a dynamic environment, which is highly variable in terms of pricing, branding, shopper behavior and trends. Therefore, continuous testing and optimizing the business decisions are crucial. With Tirico shopper flow analytics, the retailers gain the essential insights to maximize their revenue as well as cutting down redundant expenses. Tirico shopper flow solution is a powerful & popular tool used by retailers and retail researchers for understanding in-store and out-store shopper behavior, in addition to knows more about the affluence of customers. <br/> Tirico is a web app developp on Atome, using TensorFlow for human detection and python for analytics!

## Application

Retrouvez toutes les données sous forme de graphiques :
<p align="center"><img src="Tirico_Client/ressource/demo/dash_commwhite.JPG"\></p>

Sélection de zone de vente : 
<p align="center"><img src="Tirico_Client/ressource/demo/selection_zone.gif"\></p>

Carte de chaleur des différentes zones en fonction de la popularité : 
<p align="center"><img src="Tirico_Client/ressource/demo/heatmap.JPG"\></p>

## Demo of the tracker on Persons in the street
<p align="center"><img src="Tirico_Server/code_python/yolov4-deepsort/data/helpers/demo.gif"\></p>
---


## Table of Contents 

- [Installation](#installation)
- [Features](#features)
- [Team](#team)
- [Contact](#Contact)
- [Licences](#Licences)

---

## Installation

 Dans votre dossier d'installation, créez votre git et connectez le à ce repository : 
```
git init
git remote add origin https://github.com/VincentBernet/Tirico-ShopCameraAnalitics
git pull origin master
```
 
 Pour ensuite installer tous les composants nécessaires à l'application :
```
npm install
Installer dans Tirico_Server/code_python/data le fichier suivant : https://drive.google.com/open?id=1cewMfusmPjYWbrnuJRuKhPMwRe_b9PaT (yolov4.weights)
```

Pour lancer l'application :
```
npm start
```
 
Pour le python ~~(pas nécessaire actuellement, les graphes sont en locales)~~  
Installer pip ou anaconda pour installer plus facilement les librairies :

```
pip install pandas                         (pour réaliser les graphes)
pip install plotly                         (pour réaliser les graphes)
pip install -c plotly plotly-orca          (pour save en png les graphes)
pip install seaborn                        (pour réaliser la HeatMap)
```
Connexion Jeu de données: 
- Identifiant : vb@gmail.com | Mot de Passe : 123
## Licences

## Features
On this application we implemetended multiples features such as :
 - Login/Register/Logout to acces at your account and your own shops's analytics.
 - Multiple analytics such as heatmap, client flow etc .
 

## Team

> This whole application is made by 7 students during their cursus in software Engenering at EFREI PARIS : <br> 

 - Jean Hecke & Louis Gailhac & Serge Nicolas Excoffier
 - Hélène Boersma & Emeline Bagoris
 - Sébastien Friedberg & Vincent Bernet




## Contact
- Don't hesitate to contact us on Github or on Linkedin




## Licences

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://www.linkedin.com/in/vincent-bernet-028a64193/" target="_blank">Tirico's Team</a>.

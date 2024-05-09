# LifeInvader

description du projet

## Fonctionnalitées

- 
- 
- 
- 


## Installation

1. Installer [Docker](https://github.com/ldesfontaine/Documentation/blob/main/Systeme/Docker_Install.md)
2. Cloner le projet
```
git clone git@github.com:Dmoulinie/ShowMyLife.git
```
3. Lancer l'application
```
docker compose up
```

4. Afficher le front
```
localhost:5173
```

## Ports utilisés   

|  Type |   Langage   |  Framework  |    Port     | Base de données | Ports de la BDD |
| :---: | :---------: | :---------: |:----------: | :-------------: | :-------------: |
| Front |  Javascript |    React    |    5173     |        X        |        X        |
| Back  |     Java    |  Springboot |    8080     |      MongoDB    |  27018 : 27017  |
| Back  |    Node.js  |   Express   |    3000     |     MongoDB     |  27017 : 27017  |
| Back  |    Python   |    Flask    |    5000     |    A définir    |    A définir    |



## Problemes connus

1. Erreur de connexion à mongoDb par le container springboot
    - Il faut remplacer <b>host:localhost</b> par <b>host:host.docker.internal</b> dans le fichier <b>application.yml</b>
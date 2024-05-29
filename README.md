# LifeInvader

LifeInvader est une application web de réseau social inspirée d'Instagram. Elle permet aux utilisateurs de partager des photos, de commenter les publications d'autres utilisateurs, et de se connecter en utilisant leur compte GitHub.

## Fonctionnalités

1. **Authentification**
    - Authentification des utilisateurs via GitHub OAuth.

2. **Publication de Photos**
    - Téléversement de photos depuis l'interface utilisateur.
    - Ajout de descriptions aux photos.

3. **Interactions Sociales**
    - Commenter les photos publiées par d'autres utilisateurs.
    - Afficher les commentaires sur ses propres publications.

4. **Flux d'Activité**
    - Affichage d'un flux d'activité montrant les dernières publications.

5. **Profil Utilisateur**
    - Affichage du profil utilisateur.
    - Affichage de la galerie de photos de chaque utilisateur.

## Installation

1. Installer [Docker](https://github.com/ldesfontaine/Documentation/blob/main/Systeme/Docker_Install.md)
2. Cloner le projet
    ```
    git clone git@github.com:Dmoulinie/ShowMyLife.git
    ```
3. Lancer l'application
    ```
    docker compose up --build
    ```
4. Afficher le front
    ```
    localhost:5173
    ```

## Ensemble des pages

- http://localhost:5173/ - page d'accueil
- http://localhost:5173/userpage - page d'utilisateur
- http://localhost:5173/login - formulaire de login
- http://localhost:5173/redirect - redirection automatique après connexion
- http://localhost:5173/nopage - page 404 automatique
- http://localhost:5173/post - page de publication des images


## Ports utilisés   

|  Type |   Langage   |  Framework  |    Port     | Base de données | Ports de la BDD |
| :---: | :---------: | :---------: |:----------: | :-------------: | :-------------: |
| Front |  Javascript |    React    |    5173     |        X        |        X        |
| Back  |     Java    |  Springboot |    8080     |      MongoDB    |  27018 : 27017  |
| Back  |    Node.js  |   Express   |    3000     |      MongoDB    |  27017 : 27017  |
| Back  |    Python   |    Flask    |    5000     |      MongoDB    |  27017 : 27017  |

## Routes API / Informations générales

### 1. Python / Flask
- http://localhost:5000/api/getallimage - GET : affichage de toutes les données des images

- http://localhost:5000/api/getimagebyid/<string:image_id> - GET : affichage de toutes les données d'une image filtrée par l'ID

- http://localhost:5000/api/getallprofile/<string:username> - GET : affichage de toutes les données des images filtrées par le nom de l'utilisateur

- http://localhost:5000/api/addimage - POST : méthode pour publier une image en base de données

### 2. Javascript / Express

- http://localhost:3000/comments/get-all - GET : récupérer tous les commentaires

- http://localhost:3000/comments/get-all-from-author/:authorId GET :  récupérer tous les commentaires d'un utilisateur

- http://localhost:3000/comments/get-all-from-post/:postId - GET : récupérer tous les commentaires d'un post

- http://localhost:3000/comments/add - POST : ajouter un commentaire
- http://localhost:3000/comments/delete/:_id - DELETE : supprimer un commentaire

### 3. Java / Spring boot

- http://localhost:8080/github/getAllUsers - GET : récuperer tout les utilisateurs

- http://localhost:8080/github/getUserByToken - GET : récupérer un utilisateur grâce à son token

## Problèmes connus

1. **Erreur de connexion à MongoDB par le container Springboot**
    - Il faut remplacer **host:localhost** par **host:host.docker.internal** dans le fichier **application.yml**.

## Notes

1. Utilisation de l'accessToken pour éviter le bruteforce avec id dans l'url (avec la requête GET).

2. Path pour plus de détails dans App.jsx : 
    ```
    front/react/src/App.jsx
    ```
3. Détails sur le context API :
    ```
     front/react/src/components/layout/Context/Context.jsx
    ```

4. L'affichage du site basé sur un Layout dans : 
    ```
    front/react/src/components/layout/Layout.jsx
    ```
# LifeInvader

LifeInvader est une application web de réseau social fortement inspirée d'Instagram. Elle permet aux utilisateurs de partager des photos, de commenter les publications d'autres utilisateurs, et de se connecter en utilisant leur compte GitHub.

## Fonctionnalités

1. **Authentification**
    - Authentification des utilisateurs via GitHub OAuth.

2. **Publication de Photos**
    - Téléversement de photos depuis l'interface utilisateur.
    - Ajout de descriptions aux photos.
    - Prévisualisation de la photo avant publication.

3. **Interactions Sociales**
    - Commenter les photos publiées par d'autres utilisateurs.
    - Afficher les commentaires dynamiquement sur les publications modifiées.

4. **Flux d'Activité**
    - Affichage d'un flux d'activité montrant les dernières publications (les plus récentes).

5. **Profil Utilisateur**
    - Affichage du profil utilisateur montrant les dernières publications.
    - Affichage de la galerie de photos de chaque utilisateur.
    - Affichage du Post de l'utilisateur au click (modal)
  
6. **Autres fonctionnalités (bonus) du site**
   - Chargement dynamique des posts en fonction du fetch sur l'API des images
   - Animation du chargement sur la page d'accueil et la page du profil utilisateur
   - Possibilité de commenter uniquement si l'utilisateur est connecté
   - Redirection automatique après connexion
   - Modal de citations
   - Modal d'un post choisi aléatoirement à découvrir
   - Modal d'informations complémentaire du projet
   - Voir les commentaires dynamiquement par vague de 2 par post (bouton "voir plus de commentaire")
   - Voir les posts dynamiquement par vague de 6 dans le flux (bouton "Montrer plus")
   - Affichage du nombre de posts disponibles, posts restants et commentaires par post
   - **Responsive Design de toutes les pages !**
   - Affichage aléatoire de la description du profil utilisateur
   - Affichage des profil des développeur dans un Aside à droite au breakpoint xl :
    ```css
    @media (min-width: 1280px) { ... }
    ```

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


## Technologies utilisées   

|  Type |   Langage   |  Framework  |    Port     | Base de données | Ports de la BDD | Utilisation             |
| :---: | :---------: | :---------: |:----------: | :-------------: | :-------------: | :--------------------:  |
| Front |  Javascript |    React    |    5173     |        X        |        X        |    Front + Responsive   |
| Back  |     Java    |  Springboot |    8080     |      MongoDB    |  27018 : 27017  |          OAuth2         |
| Back  |    Node.js  |   Express   |    3000     |      MongoDB    |  27017 : 27017  |Gestion des commentaires |
| Back  |    Python   |    Flask    |    5000     |      JsonDB     |        X        |   Gestion des Images    |

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

## Problèmes rencontrés

1. **Erreur de connexion à MongoDB par le container Springboot**
    - Il faut remplacer **host:localhost** par **host:host.docker.internal** dans le fichier **application.yml**.
2. **Installations compliquées dans le front**
    - L'installation de TailwindCSS pour React
    - L'installation de shadcn/ui
3. **Configuration du Cross-Origin Resource Sharing (CORS) sur toutes les API**
    - Sur Node.js : 
    ```js 
    var cors = require('cors');
    app.use(cors());
    ```
    - Sur Flask (Python) :
    ```py 
    from flask_cors import CORS # pip install flask-cors

    app = flask.Flask(__name__)
    CORS(app)
    ```
    - Sur Springboot (Java) dans :back\connexion\social\src\main\java\com\app\oauth2\social\config :
    ```java
    package com.app.oauth2.social.config; 
    import org. springframework.context.annotation. Configuration;
    import org.springframework.web.servlet.config.annotation.CorsRegistry;
    import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

    @Configuration
    public class WebConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .exposedHeaders ("Access-Control-Allow-Origin", "Access-Control-Allow-Headers")
                .allowCredentials (true)
                .maxAge(3600);
            }
    }
    ```
4. **Stockage des informations de l'utilisateur en global sur React**
   - Utilisation du localStorage pour garder l'accesstoken de l'utilisateur après redirection
   - Configuration d'un ContextAPI sur React qui englobe mes composants
   - Fetch à chaque chargement de page et on garde les infos dans un State
   - On utilise ce State sur toutes les pages ou composants
5. **Avoir un Serveur de développement sur React comme en local**
   - Activation du CHOKIDAR_USEPOLLING pour avoir en temps réel les modifications des fichiers sur le navigateur (dans le docker-compose.yml) : 
    ```yml
    react-front:
        # Le reste du code
        environment:
        - CHOKIDAR_USEPOLLING=true
    ```


## Notes

1. Utilisation de l'accessToken pour éviter le bruteforce avec id dans l'url (avec la requête GET).

2. Path pour plus de détails dans App.jsx : 
    ```
    front/react/src/App.jsx
    ```
3. Détails sur le context API :
    ```
     front/react/src/components/layout/Layout.jsx
     front/react/src/components/layout/Context/Context.jsx
    ```

4. L'affichage du site basé sur un Layout dans : 
    ```
     front/react/src/components/layout/Layout.jsx
    ```
    Certains élements de dépendent pas du Layout, à voir dans : 
    ```
     front/react/src/App.jsx
    ```
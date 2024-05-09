Tuto API commentaire :

(Requête GET) http://localhost:3000/comments/get-all : récupérer tous les commentaires
(Requête GET) http://localhost:3000/comments/get-all-from-author/:authorId : récupérer tous les commentaires d'un utilisateur
(Requête GET) http://localhost:3000/comments/get-all-from-post/:postId : récupérer tous les commentaires d'un post
(Requête POST) http://localhost:3000/comments/add : ajouter un commentaire
(Requête DELETE) http://localhost:3000/comments/delete/:_id : supprimer un commentaire

Modèle de schéma pour les commentaires :
_id: mongoose.Schema.Types.ObjectId, // Ajout d'un ID pour les commentaires (MongoDB le fait automatiquement)
postId: Number,
authorId: Number,
content: String,
createdAt: { type: Date, default: Date.now }







Pense-bête Damien :

Pour lancer le projet : docker-compose up
Pour fermer le projet : docker-compose down
Pour restart le projet : docker-compose restart

Chaque modif : npm run start

- add un com
- afficher tout les com
- afficher tout les com d'un user
- afficher tout les com d'un post
- delete com

(quand liste : trié par + récent)
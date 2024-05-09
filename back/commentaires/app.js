// Import des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialisation de l'application Express
const app = express()
const PORT = 3000;
const HOST = '0.0.0.0'

// Configuration de bodyParser pour analyser les corps de requête JSON
app.use(bodyParser.json());

// MongoDB
mongoose.connect('mongodb://localhost:27017/life-invader-comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;


app.get('/', async(req, res)=>{
  res.status(200).json({message : 'Status 200 - OK'})
})

app.get("/database", (req, res) => {
  res.send("Database is OK");
});


// Modèle de schéma pour les commentaires
const commentSchema = new mongoose.Schema({
  commentId: mongoose.Schema.Types.ObjectId, // Ajout d'un ID pour les commentaires
  postId: Number,
  authorId: Number,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// Route pour créer un nouveau commentaire
app.post('/comments/add', async (req, res) => {
  try {
    const { postId, authorId, content } = req.body; // Correction de la variable authorID en authorId
    const newComment = new Comment({ postId, authorId, content });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du commentaire' });
  }
});

// Route pour obtenir les commentaires d'un post spécifique
app.get('/comments/get-from-post/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
  }
});

// Route pour supprimer un commentaire par son ID
app.delete('/comments/delete/:commentId', async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du commentaire' });
  }
});





// Démarrage du serveur
app.listen(PORT, HOST)
console.log(`Our app running on http://${HOST}:${PORT}`)
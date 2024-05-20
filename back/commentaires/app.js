// Import des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');


// Initialisation de l'application Express
const app = express()
const PORT = 3000;
const HOST = '0.0.0.0'

// Configuration de bodyParser pour analyser les corps de requête JSON
app.use(bodyParser.json());
app.use(cors());

// MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/life-invader-comments';
mongoose.connect(mongoUri);
const db = mongoose.connection;


app.get('/', async(req, res)=>{
  res.status(200).json({message : 'Status 200 - OK-'})
})

app.get("/database", (req, res) => {
  /**
  * Connection ready state
  *
  * - 0 = disconnected
  * - 1 = connectedS
  * - 2 = connecting
  * - 3 = disconnecting
  * - 99 = uninitialized
  */
  res.send("Database status: " + db.readyState);
});

// Vérification de la connexion à MongoDB
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB:'));
db.once('open', () => {
  console.log('Connecté à la base de données MongoDB');
});


// Modèle de schéma pour les commentaires
const commentSchema = new mongoose.Schema({
  postId: String,
  authorId: Number,
  authorName: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

// Route pour créer un nouveau commentaire
app.post('/comments/add', async (req, res) => {
  try {
    const { postId, authorId, authorName, content } = req.body;
    const newComment = new Comment({ postId, authorId, authorName, content });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du commentaire' });
  }
});

// Route pour obtenir tous les commentaires
app.get('/comments/get-all', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
  }
});

// Route pour obtenir les commentaires d'un post spécifique
app.get('/comments/get-all-from-post/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
  }
});

// Route pour obtenir les commentaires d'un auteur spécifique
app.get('/comments/get-all-from-author/:authorId', async (req, res) => {
  try {
    const authorId = req.params.authorId;
    const comments = await Comment.find({ authorId });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
  }
});

// Route pour supprimer un commentaire par son ID
app.delete('/comments/delete/:_id', async (req, res) => {
  try {
    const _id = req.params._id;
    const deletedComment = await Comment.findByIdAndDelete(_id);
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
console.log(`Our app running on http://localhost:${PORT}`)
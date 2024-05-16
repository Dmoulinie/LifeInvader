import React, { useState } from 'react';
import FileIcon from "@assets/post/svg/fileicon.svg?react";
import Eye from "@assets/post/svg/eye.svg?react";
import EyeSlash from "@assets/post/svg/eyeslash.svg?react";

import { v4 as uuidv4 } from 'uuid';

import "./Post.css";

const Post = () => {
  const [selectedFile, setSelectedFile] = useState(null);  
  const [description, setDescription] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false); // État pour la visibilité de l'aperçu

  const togglePreview = () => {
    setPreviewVisible(!previewVisible);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
        alert('Veuillez sélectionner un fichier');
        return;
    }

    const imageData = {
        id: uuidv4(), // Générer un ID unique
        name: selectedFile.name,
        username: 'admin', // Remplacez par le nom d'utilisateur réel
        size: selectedFile.size,
        type: selectedFile.type,
        date: new Date().getTime(),
        description: description, // Ajouter la description
    };

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('data', JSON.stringify(imageData));

    fetch('http://localhost:5000/api/addimage', {
      method: 'POST',
      body: formData,
      header: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  };

  return (
    <div className='flex align-center justify-center flex-col min-h-screen py-32'>
      <form className="transition-transform duration-300 hover:scale-[1.04] scale-100 mx-auto lg:w-6/12 md:w-8/12 w-11/12 flex flex-col justify-center items-center align-center border border-gray-200 rounded-lg p-12 gap-3" onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl mb-4">Publiez votre image maintenant :</h2>

        { /* L'image */ }
        <div className='flex flex-row items-center'>
            <div>
                <p className="text-sm mb-3 text-gray-500 text-center">Envoie de l'image</p>
            <label className="custum-file-upload h-50" htmlFor="file">
            <div className="icon">
                {/* Remplacez par l'icône de fichier appropriée */}
                <FileIcon /> 
            </div>
            <div className="text">
                <span>{selectedFile ? selectedFile.name : "Cliquez pour télécharger l'image"}</span>
            </div>
            <input type="file" id="file" onChange={handleFileChange} required/>
            </label>
            </div>

            {/* Boutons pour afficher/masquer l'aperçu */}
            <div className="relative block left-5 bottom-1 text-gray-500"> {/* Ajout d'un conteneur flex pour les boutons */}
            <button type="button" onClick={togglePreview} className="w-6 h-6 inline absolute"> {/* Bouton pour afficher l'aperçu */}
                <EyeSlash className={`ey  fill-slate-400 ${previewVisible ? 'hidden' : 'block'}`} /> {/* Afficher l'oeil ouvert si l'aperçu est masqué */}
            </button>
            <button type="button" onClick={togglePreview} className="w-6 h-6 inline absolute"> {/* Bouton pour masquer l'aperçu */}
                <Eye className={`eye-slash fill-slate-400 ${previewVisible ? 'block' : 'hidden'}`} /> {/* Afficher l'oeil barré si l'aperçu est visible */}
            </button>
            </div> 
        </div>


        {selectedFile && previewVisible &&  ( // Affiche l'aperçu de l'image si un fichier est sélectionné
          <div className="image-preview flex flex-col justify-center align-center items-center">
              <p className="text-sm text-center text-gray-500 mb-2 italic">Prévisualisation de l'image <br/>qui sera publiée (format 1:1 - square) :</p>
            {/* <img className='w-[14rem] rounded-lg aspect-square' src={URL.createObjectURL(selectedFile)} alt="Aperçu" />  */}

            <div className="image-preview w-[13rem] h-[13rem] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${URL.createObjectURL(selectedFile)})` }}>
            </div>
          </div>
        )}

        { /* La description du post */ }

        <label htmlFor="description" className="text-sm text-gray-500 mt-3">Description de l'image :</label>
        <textarea required id="description" 
        className="border border-gray-100 rounded-lg p-2 w-7/12" 
        placeholder="La meilleure image du siècle !" 
        rows="4"
        value={description}
        onChange={handleDescriptionChange}>
        </textarea>


        { /* Le bouton d'envoi */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          Envoyer l'image
        </button>
      </form>
    </div>
  );
};

export default Post;
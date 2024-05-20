import React from "react";


const UserUtility = () => {

    const random_post = () => Math.floor(Math.random() * 301);
    const random_follower = () => Math.floor(Math.random() * 15001);
    const random_following = () => Math.floor(Math.random() * 15001);

    const professions = [
        "Développeur Web Full-Stack",
        "Développeur Web Front-End",
        "Développeur Web Back-End",
        "Développeur Mobile",
        "Infirmier",
        "Enseignant",
        "Architecte",
        "Pompier",
        "Policier",
        "Musicien",
        "Chef cuisinier",
        "Artiste",
        "Vétérinaire",
        "Ingénieur",
        "Scientifique",
        "Journaliste",
        "Psychologue",
        "Athlète",
        "Artiste",
        "Designer",
        "Agriculteur",
        "Comptable",
        "Avocat",
        "Médecin",
        "Photographe",
        "Acteur",
        "Entrepreneur",
        "Électricien",
        "Plombier",
        "Menuisier",
        "Mécanicien",
        "Chauffeur",
        "Éboueur",
        "Serveur",
        "Boulanger",
        "Boucher",
        "Fleuriste",
        "Coiffeur",
        "Esthéticienne",
    ];

    const getRandomProfession = () => {
        const randomIndex = Math.floor(Math.random() * professions.length);
        return professions[randomIndex];
    };
    const randomProfession = getRandomProfession();

    const hobbies = [
        "la lecture",
        "la musique classique",
        "le sport",
        "le cinéma",
        "voyager à l'étranger",
        "cuisiner des plats exotiques",
        "jouer aux jeux vidéo",
        "la photographie",
        "la peinture",
        "la danse tahitienne",
        "le jardinage",
        "le bricolage",
        "collectioner des trucs inutiles",
        "l'écriture de romans",
        "la programmation sur python",
        "le yoga",
        "la méditation",
        "la randonnée",
        "la natation",
        "le cyclisme"
    ];

    const getRandomHobby = () => {
        const randomIndex = Math.floor(Math.random() * hobbies.length);
        return hobbies[randomIndex];
    };
    const randomHobby = getRandomHobby();


    const funnyNicknames = [
        "Le Chat Potté",
        "Super Geek",
        "Madame Parfaite",
        "Monsieur Muscle",
        "La Tornade Blonde",
        "Le Roi du Silence",
        "La Reine du Drame",
        "Einstein Junior",
        "Le Fantôme",
        "Le Hibou",
        "Miss Catastrophe",
        "Mister Gadget",
        "La Reine des Selfies",
        "Le Roi du Burger",
        "La Princesse Paresseuse",
        "Le Chevalier du Canapé",
        "Super Brain",
        "Miss Télécommande X",
        "Le perroquet",
        "Le Roi du Shopping",
        "La Reine des Neiges",
        "Le Maître du Jeu de Mots",
        "La Reine du Shopping"
    ];

    const getRandomNickname = () => {
        const randomIndex = Math.floor(Math.random() * funnyNicknames.length);
        return funnyNicknames[randomIndex];
    };
    const randomNickname = getRandomNickname();

    // Return an object with the random values
    return {
        postCount: random_post(),
        followerCount: random_follower(),
        followingCount: random_following(),
        profession: randomProfession,
        hobby: randomHobby,
        nickname: randomNickname,
    };
}

export default UserUtility;
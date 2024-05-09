import React from 'react';

const User = () => {

    const current_user =
    {
        "name": "Dmoulinie",
        "id": "90031185",
        "node_id": "MDQ6VXNlcjkwMDMxMTg1",
        "avatar_url": "https://avatars.githubusercontent.com/u/90031185?v=4",
        "html_url": "https://github.com/Dmoulinie"
    }

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
    return (
        <section>
            <div className='pt-5 mx-auto'>
                <div className='flex flex-row align-center items-center justify-center mt-4'>

                    <img src={current_user.avatar_url} alt={current_user.name} className='rounded-full w-40 h-40'>
                    </img>

                    <div className='ml-[7rem] w-4/12'>
                        <h2 className='text-2xl'>{current_user.name}</h2>
                        <p className='text-gray-500'>#{current_user.id}</p>

                        <div className='flex flex-row mt-6'>
                            <p className='text-md'><span className='font-semibold'>{random_post()}</span> Posts</p>
                            <p className='text-md ml-9'><span className='font-semibold'>{random_follower()}</span> Followers</p>
                            <p className='text-md ml-9'><span className='font-semibold'>{random_following()}</span> Suivi(e)s</p>
                        </div>

                        <p className='mt-4 text-sm'>
                        <span className='font-bold text-md'>{current_user.name}</span><br />
                        <span className='text-gray-500'>@{randomNickname}</span><br />
                        🙀{randomProfession}🙀<br />
                        ❤️J'adore {randomHobby}❤️<br />
                        Mon site web : <a href={current_user.html_url} target='_blank'>{current_user.html_url}</a>
                        </p>
                    </div>

                </div>

                <hr className='mt-20 w-7/12 mx-auto border-gray-300'></hr>
            </div>
        </section>
    );
};

export default User;
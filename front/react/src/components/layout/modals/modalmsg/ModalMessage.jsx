import React, { useEffect, useState } from "react";

import Insta from "@/assets/instamsg.svg?react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ModalMessage = ({ showModal, setShowModal, closeModal }) => {

    const [citationdesigned, setCitationDesigned] = useState(""); // Citation [35 citations]
    const [color, setColor] = useState("");

    // 35 citations
    const citations = [
        "Ce bouton ne fait absolument rien. Mais vous avez cliqué dessus quand même. Bravo !",
        "Félicitations ! Vous avez trouvé le bouton secret qui ne sert à rien. Votre récompense ? La satisfaction d'avoir cliqué.",
        "Erreur 404 : Fonctionnalité non trouvée. Mais on vous aime quand même.",
        "Ce bouton est en construction. Revenez dans 100 ans.",
        "Vous êtes le visiteur numéro 42. La réponse à la grande question sur la vie, l'univers et le reste.",
        "Ce bouton est alimenté par des hamsters qui courent dans des roues. Soyez gentil, ils sont fatigués.",
        "Cliquez encore une fois et je lance les licornes sur vous.",
        "Attention, ce bouton peut provoquer des effets secondaires tels que des fous rires incontrôlables et une envie soudaine de manger des cookies.",
        "Si vous lisez ceci, c'est que vous avez passé trop de temps sur ce site. Allez dehors !",
        "Je suis désolé, Dave. J'ai peur de ne pas pouvoir faire ça.", // Référence à 2001 : L'Odyssée de l'espace
        "La vie est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.", // Forrest Gump
        "Je ne suis pas paresseux, je suis juste en mode économie d'énergie.",
        "Je suis sur un régime alimentaire à base de vin et de fromage. C'est appelé le régime français.",
        "Je ne suis pas sûr de ce qui est le plus serré, mes jeans ou mon emploi du temps.",
        "J'ai besoin de vacances de six mois, deux fois par an.",
        "Mon lit est un appareil magique qui me transporte dans le monde des rêves.",
        "Je ne ronfle pas, je rêve que je suis une moto.",
        "Je suis tellement intelligent que parfois je ne comprends pas un mot de ce que je dis.",
        "Le café est mon sang-type.",
        "Je suis allergique à l'exercice. J'ai des éruptions cutanées quand je fais du sport.",
        "Je ne suis pas en retard, je suis juste très ponctuel à mon propre fuseau horaire.",
        "Mon cerveau est comme Google, sauf que j'oublie tout.",
        "Je ne perds jamais. Soit je gagne, soit j'apprends.",
        "Je suis un expert en procrastination. Je peux tout remettre à demain.",
        "La vie est courte. Souriez tant que vous avez encore des dents.",
        "Je ne suis pas parfait, mais mes imperfections sont assez impressionnantes.",
        "Je suis tellement accro au café que je peux entendre les couleurs.",
        "Je suis multitâche. Je peux gaspiller du temps, être improductif et procrastiner en même temps.",
        "L'avenir est prometteur. Malheureusement, je suis myope.",
        "Je suis peut-être un peu bizarre, mais au moins je suis unique.",
        "Je ne suis pas sûr de ce qui est le plus effrayant, les araignées ou le fait que je dois payer mes factures.",
        "J'ai tellement faim que je pourrais manger un cheval et sa selle.",
        "Je suis tellement fatigué que je pourrais dormir sur un fil de fer barbelé.",
        "Je suis tellement indécis que je ne peux même pas décider si je suis indécis ou pas.",
        "J'ai tellement de choses à faire que je vais faire une sieste.",
        "Je suis tellement mauvais en maths que je ne peux même pas compter jusqu'à l'infini."
    ];

    const allcolorclass = [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#9e9e9e",
        "#607d8b",
    ];

    
    function citationAleatoire() {
        const indexAleatoire = Math.floor(Math.random() * citations.length);
        return citations[indexAleatoire];
    }
    function couleurAleatoire() {
        const indexAleatoire = Math.floor(Math.random() * allcolorclass.length);
        return allcolorclass[indexAleatoire];
    }
    useEffect(() => {
        if (showModal) {
            setCitationDesigned(citationAleatoire());
            setColor(couleurAleatoire());
        }
    }, [showModal]);

    useEffect(() => {
        if(showModal) {
            const svgElement = document.getElementById('my-svgmsg');
            const btnElement = document.getElementById('my-svgbtn');
            const pathElement = svgElement.querySelectorAll('path');
            console.log(pathElement);
            pathElement[1].setAttribute('fill', color);
            btnElement.style.backgroundColor = color;
        }
    }, [color]);

    {/* Dialog Modal - Plus */ }
    return (
        <div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="flex justify-center items-center mx-auto lg:w-8/12 md:w-10/12 sm:w-12/12">
                    <div className="transition-transform duration-500 hover:scale-[1.04] scale-100 relative border h-fit shadow-lg rounded-md bg-white mx-auto p-10">

                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <Insta className={`flex mx-auto w-36`}/>
                            <figure className="mt-4">
                                <blockquote className="text-center text-sm font-medium leading-8 text-gray-900 sm:text-lg sm:leading-9">
                                    <p>“{citationdesigned}”</p>
                                </blockquote>
                            </figure>
                        </div>

                        <div className="flex mt-7 justify-center">
                            <button id="my-svgbtn"
                                onClick={() => closeModal()}
                                className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-2 
                                text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 
                                focus:ring-sky-500`}>
                                Fermer
                            </button>
                        </div>

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalMessage;
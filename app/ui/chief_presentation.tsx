import React from "react";
import Image from "next/image";

export default function ChiefPresentation() {
    return (
        <div className="md:flex md:justify-center md:items-center w-3/4 mb-8 bg-white rounded-xl p-4">
            <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                    src="/chief.jpg"
                    width={400}
                    height={400}
                    alt="photo du chef"
                />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
                <h2 className="text-3xl font-bold mb-4">Chef Jean-Luc Dubois</h2>
                <p className="text-lg mb-4">
                    Maître de la Cuisine Française
                </p>
                <p className="mb-4">
                    Chef Jean-Luc Dubois incarne l'excellence de la cuisine française avec une passion et un dévouement inégalés. Originaire de la région de la Bourgogne, berceau de la gastronomie française, Jean-Luc a été initié aux secrets de la cuisine dès son plus jeune âge, guidé par sa grand-mère maternelle, une cuisinière émérite. C'est là que son amour pour les saveurs authentiques et les techniques traditionnelles a pris racine.
                </p>
                <p className="mb-4">
                    Après avoir perfectionné son art dans les cuisines étoilées de Paris, Jean-Luc a parcouru le monde, explorant les différentes cultures culinaires et enrichissant son répertoire avec de nouvelles inspirations. De retour en France, il a fait ses preuves dans des restaurants éminents avant de décider de partager son savoir-faire avec le monde en tant que chef propriétaire de La Table de Chantal.
                </p>
                <p>
                    Sa cuisine est un hommage à la richesse des produits du terroir français, mettant en valeur la fraîcheur des ingrédients locaux avec une créativité subtile et un respect pour les traditions culinaires. Chaque plat qui quitte sa cuisine est une œuvre d'art gustative, où l'équilibre des saveurs et la présentation soignée témoignent de son expertise et de sa sensibilité.
                </p>
            </div>
        </div>
    );
}
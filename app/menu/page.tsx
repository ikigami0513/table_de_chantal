import React from "react";
import { menu } from "@/app/data";

export default function MenuPage() {
    return (
        <div className="p-8 bg-white shadow-lg rounded-lg md:w-3/4 md:m-auto w-full">
            <div className="mb-4 justify-between flex">
                <h1 className="text-3xl font-bold">Menu du restaurant</h1>
                <p>
                <button 
                    className="text-white bg-black py-2 px-4 rounded-2xl hover:bg-gray-900 hover:scale-105 transition-transform duration-300"
                >
                    Boissons
                </button>
                </p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Entrées</h2>
                {menu["entrees"].map((v, i) => (
                    <div key={i} className="flex justify-between items-center">
                        <p className="text-gray-700 mr-4">{v.nom}</p>
                        <div className="flex-grow border-b border-gray-300"></div>
                        <p className="text-gray-700 ml-4">{v.prix} €</p>
                    </div>
                ))}
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Plats principaux</h2>
                {menu["plats"].map((v, i) => (
                    <div key={i} className="flex justify-between items-center">
                        <p className="text-gray-700 mr-4">{v.nom}</p>
                        <div className="flex-grow border-b border-gray-300"></div>
                        <p className="text-gray-700 ml-4">{v.prix} €</p>
                    </div>
                ))}
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Desserts</h2>
                {menu["desserts"].map((v, i) => (
                    <div key={i} className="flex justify-between items-center">
                        <p className="text-gray-700 mr-4">{v.nom}</p>
                        <div className="flex-grow border-b border-gray-300"></div>
                        <p className="text-gray-700 ml-4">{v.prix} €</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

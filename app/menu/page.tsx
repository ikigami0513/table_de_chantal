"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menu } from "@/app/data";

export default function MenuPage() {
    const [toggleImage, setToggleImage] = useState(false);

    const handleToggleImage = () => {
        setToggleImage(!toggleImage);
    };

    return (
        <div className="p-8 bg-gray-100 shadow-lg rounded-lg md:w-3/4 md:mx-auto mb-4 w-full">
            <div className="mb-4 justify-between flex">
                <h1 className="text-3xl font-bold">Menu du restaurant</h1>
                <div>
                    <input 
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="toggleImageSwitch"
                        checked={toggleImage}
                        onChange={handleToggleImage}
                    />
                    <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="toggleImageSwitch"
                    >
                        Afficher les images
                    </label>
                </div>
                <div>
                    <Link href="/boissons">
                        <button 
                            className="text-white bg-black py-2 px-4 rounded-2xl hover:bg-gray-900 hover:scale-105 transition-transform duration-300"
                        >
                            Boissons
                        </button>
                    </Link>
                </div>
            </div>
            {toggleImage ? (
                <>
                    {[["Entrées", "entrees"], ["Plats principaux", "plats"], ["Desserts", "desserts"]].map((v, i) => (
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2">{v[0]}</h2>
                            <div className="flex flex-wrap justify-center">
                                {/* Une erreur est généré par visual studio code car il ne connait pas le type de v[1] */}
                                {menu[v[1]].map((v, i) => (
                                    <div key={v.id} className="max-w-sm rounded overflow-hidden shadow-lg mx-2 mb-4">
                                        <div className="flex justify-center items-center">
                                            <Image 
                                                src={`/menu/${v.image}`}
                                                width={500}
                                                height={500}
                                                className="w-auto h-44"
                                                alt={v.nom}
                                            />
                                        </div>
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{v.nom}</div>
                                            <p className="text-gray-700 text-base">Prix: {v.prix} €</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Entrées</h2>
                        {menu["entrees"].map((v, i) => (
                            <div key={v.id} className="flex justify-between items-center">
                                <p className="text-gray-700 mr-4">{v.nom}</p>
                                <div className="flex-grow border-b border-gray-300"></div>
                                <p className="text-gray-700 ml-4">{v.prix} €</p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Plats principaux</h2>
                        {menu["plats"].map((v, i) => (
                            <div key={v.id} className="flex justify-between items-center">
                                <p className="text-gray-700 mr-4">{v.nom}</p>
                                <div className="flex-grow border-b border-gray-300"></div>
                                <p className="text-gray-700 ml-4">{v.prix} €</p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Desserts</h2>
                        {menu["desserts"].map((v, i) => (
                            <div key={v.id} className="flex justify-between items-center">
                                <p className="text-gray-700 mr-4">{v.nom}</p>
                                <div className="flex-grow border-b border-gray-300"></div>
                                <p className="text-gray-700 ml-4">{v.prix} €</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

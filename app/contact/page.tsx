"use client"

import React from "react";
import Head from 'next/head';
import { PhoneIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
    return (
        <div className="container mx-auto w-3/4 md:w-full mb-8">
            <Head>
                <title>Contact</title>
            </Head>
            <h1 className="text-3xl font-bold mb-8">Contactez-nous</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Formulaire de contact</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Nom</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block mb-2">Sujet</label>
                            <input type="text" id="subject" name="subject" className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="content" className="block mb-2">Contenu</label>
                            <textarea id="content" name="content" className="w-full border border-gray-300 rounded-md p-2"></textarea>
                        </div>
                        <button type="submit" className="text-white bg-black py-2 px-4 rounded-2xl hover:bg-gray-900 hover:scale-105 transition-transform duration-300">Envoyer</button>
                    </form>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Informations sur le restaurant</h2>
                    <p className="pb-2 flex items-center">
                        <HomeIcon className="w-4 h-4" />
                        <span className="pl-2">297 Chau. Fernand Forest, 59200 Tourcoing</span>
                    </p>
                    <p className="pb-2 flex items-center">
                        <PhoneIcon className="w-4 h-4" />
                        <span className="pl-2">03 20 23 84 65</span>
                    </p>
                    <div className="aspect-w-16 aspect-h-9 h-80">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5050.260303905624!2d3.1470040125833125!3d50.73607487152977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32edc86f651c9%3A0xcb1354fe01dcfd97!2s297%20Chau.%20Fernand%20Forest%2C%2059200%20Tourcoing!5e0!3m2!1sfr!2sfr!4v1713451990885!5m2!1sfr!2sfr" 
                            width="600" 
                            height="450" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

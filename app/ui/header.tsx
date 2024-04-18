import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex items-center justify-between bg-black h-32 py-2 px-4 mb-4">
            <div>
                <Image 
                    src="/logo.png"
                    height={64}
                    width={64}
                    alt="logo de la table de Chantal"
                    className="h-full w-auto"
                />
            </div>
            <div className="flex space-x-4">
                <Link href="/" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Accueil</Link>
                <Link href="/menu" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Menu</Link>
                <Link href="/" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Contact</Link>
            </div>
        </div>
    );
}
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-black h-auto sm:h-24 py-2 px-4 mb-4">
            <div className="mb-4 sm:mb-0">
                <Link
                    href="/"
                >
                    <Image 
                        src="/logo.png"
                        height={64}
                        width={64}
                        alt="logo de la table de Chantal"
                        className="h-full w-auto"
                    />
                </Link>
            </div>
            <div className="flex flex-wrap justify-center items-center sm:space-x-4">
                <Link href="/" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Accueil</Link>
                <Link href="/menu" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Menu</Link>
                <Link href="/boissons" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Boissons</Link>
                <Link href="/contact" className="text-white text-2xl hover:bg-gray-700 p-2 m-2 rounded-xl">Contact</Link>
            </div>
        </div>
    );
}

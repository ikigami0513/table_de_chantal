import React from "react";
import { ClockIcon } from "@heroicons/react/24/solid";

export default function OpeningHour() {
    return (
        <div className="bg-white p-4 rounded-xl w-3/4">
            <h2 className="text-2xl font-semibold mb-4 flex">
                <ClockIcon className="w-8 h-8"/>
                <span className="ml-4">Horaires d'ouverture</span>
            </h2>
            <ul className="divide-y divide-gray-200">
                <li className="flex justify-between py-2">
                    <span>Lundi</span>
                    <span>10h00 - 22h00</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Mardi</span>
                    <span>10h00 - 22h00</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Mercredi</span>
                    <span>Fermé</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Jeudi</span>
                    <span>10h00 - 22h00</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Vendredi</span>
                    <span>10h00 - 23h00</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Samedi</span>
                    <span>10h00 - 23h00</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Dimanche</span>
                    <span>10h00 - 21h00</span>
                </li>
            </ul>
        </div>
    );
}
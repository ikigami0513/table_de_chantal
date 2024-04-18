import Carrousel from "@/app/ui/carrousel";
import OpeningHour from "./ui/opening_hour";
import ChiefPresentation from "./ui/chief_presentation";
import RestaurantPresentation from "./ui/restaurant_presentation";

const carousel_images = [
    "/carrousel/chantal_img_1.jpg",
    "/carrousel/chantal_img_2.jpg",
    "/carrousel/chantal_img_3.jpg"
];

export default function Home() {
    return (
        <main className="flex flex-col text-center items-center w-full">
            <RestaurantPresentation />
            <Carrousel images={carousel_images} />
            <ChiefPresentation />
            <OpeningHour />
        </main>
    );
}

import Carrousel from "@/app/ui/carrousel";

const carousel_images = [
    "/carrousel/chantal_img_1.jpg",
    "/carrousel/chantal_img_2.jpg",
    "/carrousel/chantal_img_3.jpg"
];

export default function Home() {
    return (
        <main className="flex flex-col text-center items-center w-full">
            <Carrousel images={carousel_images}/>
        </main>
    );
}
